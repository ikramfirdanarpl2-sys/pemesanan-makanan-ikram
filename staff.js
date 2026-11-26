const config = window.FOODORDER_CONFIG;
const canManageStock = role => role === "cashier" || role === "admin";
const canManagePayments = role => role === "cashier" || role === "admin";

let supabaseClient = null;
let currentProfile = null;
let realtimeChannel = null;
let orders = [];

function escapeHtml(value) {
    const characters = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    };

    return String(value ?? "").replace(/[&<>"']/g, character => characters[character]);
}

function setMessage(elementId, message, isError) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.className = `staff-message${isError ? " is-error" : ""}`;
}

function showLogin(message, isError) {
    document.getElementById("staffPanel").hidden = true;
    document.getElementById("loginPanel").hidden = false;
    if (message) {
        setMessage("loginMessage", message, isError);
    }
}

async function loadOrders() {
    const { data, error } = await supabaseClient
        .from("orders")
        .select("id,buyer_name,phone,order_type,address,table_number,payment_method,payment_status,cash_received,change_due,subtotal,service_fee,delivery_fee,discount,total,status,created_at,order_items(id,item_name,unit_price,quantity)")
        .order("created_at", { ascending: false })
        .limit(100);

    if (error) {
        setMessage("dashboardMessage", `Antrean gagal dimuat: ${error.message}`, true);
        return;
    }

    orders = data || [];
    renderOrders();
}

function renderOrders() {
    const holder = document.getElementById("ordersList");

    if (orders.length === 0) {
        holder.innerHTML = '<div class="staff-empty">Belum ada pesanan online.</div>';
        return;
    }

    const statusOrder = {
        Menunggu: 0,
        Diproses: 1,
        Selesai: 2,
        Dibatalkan: 3
    };
    const orderTypeLabels = {
        takeaway: "Ambil sendiri",
        delivery: "Pesan antar",
        "dine-in": "Makan di tempat"
    };

    holder.innerHTML = [...orders]
        .sort((first, second) =>
            (statusOrder[first.status] ?? 4) - (statusOrder[second.status] ?? 4) ||
            new Date(first.created_at) - new Date(second.created_at)
        )
        .map(order => {
            const orderId = escapeHtml(String(order.id));
            const items = (order.order_items || []).map(item => `
                <li>
                    <span>${escapeHtml(item.item_name)} × ${item.quantity}</span>
                    <strong>${formatRupiah(item.unit_price * item.quantity)}</strong>
                </li>
            `).join("");
            const paymentControl = canManagePayments(currentProfile.role)
                ? `
                    <label class="staff-order-field">
                        <span>Pembayaran</span>
                        <select
                            aria-label="Status pembayaran pesanan ${orderId}"
                            onchange="changePaymentStatus('${orderId}', this.value)">
                            ${["Belum dibayar", "Lunas"].map(status => `
                                <option value="${status}" ${order.payment_status === status ? "selected" : ""}>
                                    ${status}
                                </option>
                            `).join("")}
                        </select>
                    </label>
                `
                : `
                    <div class="staff-order-field">
                        <span>Pembayaran</span>
                        <strong class="staff-payment-state ${order.payment_status === "Lunas" ? "is-paid" : ""}">
                            ${escapeHtml(order.payment_status)}
                        </strong>
                    </div>
                `;

            return `
                <article class="staff-order-card">
                    <div class="staff-order-heading">
                        <div>
                            <span class="staff-order-number">Pesanan #${orderId.slice(-6)}</span>
                            <small>${escapeHtml(new Date(order.created_at).toLocaleString("id-ID"))}</small>
                        </div>
                        <strong class="staff-order-total">${formatRupiah(order.total)}</strong>
                    </div>

                    <div class="staff-order-customer">
                        <strong>${escapeHtml(order.buyer_name)}</strong>
                        ${order.phone ? `<span>${escapeHtml(order.phone)}</span>` : ""}
                        <span>${escapeHtml(orderTypeLabels[order.order_type] || order.order_type)}
                            ${order.table_number ? ` · Meja ${escapeHtml(order.table_number)}` : ""}
                        </span>
                        ${order.address ? `<span>${escapeHtml(order.address)}</span>` : ""}
                    </div>

                    <ul class="staff-order-items">${items}</ul>

                    <div class="staff-order-controls">
                        <label class="staff-order-field">
                            <span>Status dapur</span>
                            <select
                                aria-label="Status dapur pesanan ${orderId}"
                                onchange="changeOrderStatus('${orderId}', this.value)">
                                ${["Menunggu", "Diproses", "Selesai", "Dibatalkan"].map(status => `
                                    <option value="${status}" ${order.status === status ? "selected" : ""}>
                                        ${status}
                                    </option>
                                `).join("")}
                            </select>
                        </label>
                        ${paymentControl}
                    </div>
                </article>
            `;
        }).join("");
}

function formatRupiah(value) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(value);
}

async function loadStock() {
    const { data, error } = await supabaseClient
        .from("menu_items")
        .select("id,name,category,stock")
        .order("category")
        .order("name");

    if (error) {
        setMessage("dashboardMessage", `Stok gagal dimuat: ${error.message}`, true);
        return;
    }

    renderStock(data || []);
}

function renderStock(menuItems) {
    const holder = document.getElementById("stockList");

    if (menuItems.length === 0) {
        holder.innerHTML = '<div class="staff-empty">Menu belum tersedia.</div>';
        return;
    }

    holder.innerHTML = menuItems.map(menu => `
        <div class="stock-row">
            <div class="stock-menu-name">
                <strong>${escapeHtml(menu.name)}</strong>
                <small>${escapeHtml(menu.category)} · ${Number(menu.stock) > 0 ? "Tersedia" : "Habis"}</small>
            </div>
            <label>
                <span>Stok</span>
                <input id="stock-${Number(menu.id)}" type="number" min="0" step="1"
                       value="${Number(menu.stock)}" aria-label="Stok ${escapeHtml(menu.name)}">
            </label>
            <button type="button" onclick="saveStock(${Number(menu.id)})">Simpan</button>
        </div>
    `).join("");
}

async function saveStock(menuId) {
    const input = document.getElementById(`stock-${menuId}`);
    const stock = Number(input.value);

    if (!Number.isInteger(stock) || stock < 0) {
        setMessage("dashboardMessage", "Masukkan stok berupa bilangan bulat nol atau lebih.", true);
        input.focus();
        return;
    }

    const { error } = await supabaseClient.rpc("set_menu_stock", {
        p_menu_id: menuId,
        p_stock: stock
    });

    if (error) {
        setMessage("dashboardMessage", `Stok gagal disimpan: ${error.message}`, true);
        return;
    }

    setMessage("dashboardMessage", "Stok berhasil diperbarui.");
    await loadStock();
}

async function changeOrderStatus(orderId, status) {
    const { error } = await supabaseClient.rpc("set_order_status", {
        p_order_id: orderId,
        p_status: status
    });

    if (error) {
        setMessage("dashboardMessage", `Status pesanan gagal diperbarui: ${error.message}`, true);
        await loadOrders();
        return;
    }

    setMessage("dashboardMessage", `Status pesanan #${String(orderId).slice(-6)} diperbarui.`);
    await loadOrders();
}

async function changePaymentStatus(orderId, status) {
    const { error } = await supabaseClient.rpc("set_payment_status", {
        p_order_id: orderId,
        p_status: status
    });

    if (error) {
        setMessage("dashboardMessage", `Status pembayaran gagal diperbarui: ${error.message}`, true);
        await loadOrders();
        return;
    }

    setMessage("dashboardMessage", `Pembayaran pesanan #${String(orderId).slice(-6)} diperbarui.`);
    await loadOrders();
}

async function openDashboard(user) {
    const { data: profile, error } = await supabaseClient
        .from("staff_profiles")
        .select("full_name,role")
        .eq("user_id", user.id)
        .maybeSingle();

    if (error) {
        showLogin(`Profil staf gagal dimuat: ${error.message}`, true);
        return;
    }

    if (!profile) {
        await supabaseClient.auth.signOut();
        showLogin("Akun ini belum diberi peran kasir, dapur, atau admin.", true);
        return;
    }

    currentProfile = profile;
    document.getElementById("loginPanel").hidden = true;
    document.getElementById("staffPanel").hidden = false;
    document.getElementById("staffName").textContent =
        profile.full_name || user.email || "Staf";
    document.getElementById("staffRole").textContent =
        `Akses: ${profile.role === "admin" ? "Admin" : profile.role === "cashier" ? "Kasir" : "Dapur"}`;
    document.getElementById("stockPanel").hidden = !canManageStock(profile.role);
    await loadOrders();

    if (canManageStock(profile.role)) {
        await loadStock();
    }

    if (realtimeChannel) {
        await supabaseClient.removeChannel(realtimeChannel);
    }

    realtimeChannel = supabaseClient
        .channel("foodorder-staff-dashboard")
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "orders" },
            () => loadOrders()
        )
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "menu_items" },
            () => {
                if (canManageStock(currentProfile.role)) {
                    loadStock();
                }
            }
        )
        .subscribe(status => {
            if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
                setMessage(
                    "Koneksi realtime terputus. Gunakan Perbarui untuk memuat antrean.",
                    true
                );
            }
        });
}

async function initializeStaff() {
    if (
        !window.supabase ||
        typeof window.supabase.createClient !== "function" ||
        !config ||
        !config.url ||
        !config.anonKey ||
        config.url.includes("YOUR_PROJECT") ||
        config.anonKey.includes("YOUR_SUPABASE")
    ) {
        document.getElementById("loginBtn").disabled = true;
        showLogin("Isi supabase-config.js setelah menyiapkan proyek Supabase.", true);
        return;
    }

    supabaseClient = window.supabase.createClient(config.url, config.anonKey);
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) {
        showLogin(`Sesi login gagal dimuat: ${error.message}`, true);
        return;
    }

    if (data.session) {
        await openDashboard(data.session.user);
    }

    supabaseClient.auth.onAuthStateChange(event => {
        if (event === "SIGNED_OUT") {
            currentProfile = null;
            showLogin("Anda sudah keluar.");
        }
    });
}

document.getElementById("loginForm").addEventListener("submit", async event => {
    event.preventDefault();
    const button = document.getElementById("loginBtn");
    button.disabled = true;
    setMessage("loginMessage", "Memeriksa akun...");

    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: document.getElementById("loginEmail").value.trim(),
            password: document.getElementById("loginPassword").value
        });

        if (error) {
            throw new Error(error.message);
        }

        await openDashboard(data.user);
    } catch (error) {
        setMessage("loginMessage", `Login gagal: ${error.message}`, true);
    } finally {
        button.disabled = false;
    }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        setMessage("dashboardMessage", `Gagal keluar: ${error.message}`, true);
    }
});

document.getElementById("refreshOrdersBtn").addEventListener("click", loadOrders);

initializeStaff();
