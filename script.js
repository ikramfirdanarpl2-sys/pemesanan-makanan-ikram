// =====================================
// DATA MENU RESTORAN
// =====================================

const foodPhoto = id =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=480&q=80`;

const defaultMenus = [
    {
        id: 1,
        name: "Nasi Goreng",
        category: "Makanan",
        price: 18000,
        icon: "🍛",
        popular: true,
        description: "Nasi goreng gurih dengan telur dan sayuran.",
        image: foodPhoto("photo-1512058564366-18510be2db19")
    },
    {
        id: 2,
        name: "Mie Goreng",
        category: "Makanan",
        price: 16000,
        icon: "🍜",
        description: "Mie goreng berbumbu dengan sayuran segar.",
        image: foodPhoto("photo-1569718212165-3a8278d5f624")
    },
    {
        id: 3,
        name: "Ayam Geprek",
        category: "Makanan",
        price: 20000,
        icon: "🍗",
        popular: true,
        description: "Ayam renyah dengan sambal pilihan.",
        image: foodPhoto("photo-1626082927389-6cd097cdc6ec")
    },
    {
        id: 4,
        name: "Dimsum",
        category: "Makanan",
        price: 12000,
        icon: "🥟",
        popular: true,
        description: "Dimsum hangat, cocok untuk camilan.",
        image: foodPhoto("photo-1563245372-f21724e3856d")
    },
    {
        id: 5,
        name: "Es Teh",
        category: "Minuman",
        price: 5000,
        icon: "🧋",
        description: "Teh segar, tersedia dingin atau hangat.",
        image: foodPhoto("photo-1556679343-c7306c1976bc")
    },
    {
        id: 6,
        name: "Jus Jeruk",
        category: "Minuman",
        price: 10000,
        icon: "🍊",
        description: "Jus jeruk segar dengan rasa manis alami.",
        image: foodPhoto("photo-1600271886742-f049cd451bba")
    },
    {
        id: 7,
        name: "Ikan Bakar",
        category: "Makanan",
        price: 25000,
        icon: "🐟",
        description: "Ikan bakar berbumbu dengan sambal.",
        image: foodPhoto("photo-1519708227418-c8fd9a32b7a2")
    },
    {
        id: 8,
        name: "Air Mineral",
        category: "Minuman",
        price: 4000,
        icon: "🥤",
        description: "Air mineral dingin untuk menemani makan.",
        image: foodPhoto("photo-1548839140-29a749e1cf4d")
    },
    {
        id: 9,
        name: "Sate Ayam",
        category: "Makanan",
        price: 22000,
        icon: "🍢",
        description: "Sate ayam dengan bumbu kacang.",
        image: foodPhoto("photo-1544025162-d76694265947")
    },
    {
        id: 10,
        name: "Soto Ayam",
        category: "Makanan",
        price: 18000,
        icon: "🍲",
        description: "Soto ayam hangat dengan kuah berempah.",
        image: foodPhoto("photo-1547592180-85f173990554")
    },
    {
        id: 11,
        name: "Bakso",
        category: "Makanan",
        price: 17000,
        icon: "🍜",
        description: "Bakso sapi dengan kuah hangat.",
        image: foodPhoto("photo-1547592166-23ac45744acd")
    },
    {
        id: 12,
        name: "Rendang",
        category: "Makanan",
        price: 28000,
        icon: "🥘",
        description: "Daging berbumbu rempah yang kaya rasa.",
        image: foodPhoto("photo-1544025162-d76694265947")
    },
    {
        id: 13,
        name: "Kopi Susu",
        category: "Minuman",
        price: 15000,
        icon: "☕",
        popular: true,
        description: "Kopi susu lembut dengan rasa seimbang.",
        image: foodPhoto("photo-1461023058943-07fcbe16d735")
    },
    {
        id: 14,
        name: "Lemon Tea",
        category: "Minuman",
        price: 8000,
        icon: "🍋",
        description: "Teh dengan sentuhan lemon yang menyegarkan.",
        image: foodPhoto("photo-1556679343-c7306c1976bc")
    },
    {
        id: 15,
        name: "Es Campur",
        category: "Minuman",
        price: 12000,
        icon: "🍧",
        description: "Campuran buah dan es manis yang segar.",
        image: foodPhoto("photo-1505252585461-04db1eb84625")
    },
    {
        id: 16,
        name: "Cokelat",
        category: "Minuman",
        price: 13000,
        icon: "🍫",
        description: "Minuman cokelat hangat atau dingin.",
        image: foodPhoto("photo-1511381939415-e44015466834")
    },
    {
        id: 17,
        name: "Nasi Uduk",
        category: "Makanan",
        price: 15000,
        icon: "🍚",
        description: "Nasi uduk harum dengan taburan bawang goreng.",
        image: foodPhoto("photo-1512058564366-18510be2db19")
    },
    {
        id: 18,
        name: "Pecel Ayam",
        category: "Makanan",
        price: 22000,
        icon: "🍗",
        description: "Ayam goreng dengan sambal dan lalapan segar.",
        image: foodPhoto("photo-1626082927389-6cd097cdc6ec")
    },
    {
        id: 19,
        name: "Capcay",
        category: "Makanan",
        price: 18000,
        icon: "🥦",
        description: "Aneka sayuran dimasak dengan bumbu gurih.",
        image: foodPhoto("photo-1512621776951-a57141f2eefd")
    },
    {
        id: 20,
        name: "Pempek",
        category: "Makanan",
        price: 16000,
        icon: "🐟",
        description: "Pempek ikan disajikan dengan kuah cuko.",
        image: foodPhoto("photo-1519708227418-c8fd9a32b7a2")
    },
    {
        id: 21,
        name: "Martabak Telur",
        category: "Makanan",
        price: 20000,
        icon: "🥚",
        description: "Martabak gurih berisi telur dan daging.",
        image: foodPhoto("photo-1544025162-d76694265947")
    },
    {
        id: 22,
        name: "Gado-gado",
        category: "Makanan",
        price: 16000,
        icon: "🥗",
        description: "Sayuran, tahu, dan lontong dengan saus kacang.",
        image: foodPhoto("photo-1512621776951-a57141f2eefd")
    },
    {
        id: 23,
        name: "Mie Ayam",
        category: "Makanan",
        price: 16000,
        icon: "🍜",
        description: "Mie kenyal dengan ayam berbumbu dan sayuran.",
        image: foodPhoto("photo-1569718212165-3a8278d5f624")
    },
    {
        id: 24,
        name: "Soto Betawi",
        category: "Makanan",
        price: 22000,
        icon: "🍲",
        description: "Soto Betawi hangat dengan kuah santan gurih.",
        image: foodPhoto("photo-1547592180-85f173990554")
    },
    {
        id: 25,
        name: "Es Kopi Gula Aren",
        category: "Minuman",
        price: 18000,
        icon: "🧋",
        popular: true,
        description: "Kopi susu dingin dengan manis gula aren.",
        image: foodPhoto("photo-1461023058943-07fcbe16d735")
    },
    {
        id: 26,
        name: "Thai Tea",
        category: "Minuman",
        price: 14000,
        icon: "🧋",
        description: "Teh susu khas Thailand yang creamy.",
        image: foodPhoto("photo-1556679343-c7306c1976bc")
    },
    {
        id: 27,
        name: "Matcha Latte",
        category: "Minuman",
        price: 16000,
        icon: "🍵",
        description: "Matcha lembut berpadu dengan susu.",
        image: foodPhoto("photo-1515823064-d6e0c04616a7")
    },
    {
        id: 28,
        name: "Jus Alpukat",
        category: "Minuman",
        price: 15000,
        icon: "🥑",
        description: "Jus alpukat kental dengan cokelat.",
        image: foodPhoto("photo-1546173159-315724a31696")
    },
    {
        id: 29,
        name: "Es Kelapa Muda",
        category: "Minuman",
        price: 12000,
        icon: "🥥",
        description: "Kelapa muda segar disajikan dengan es.",
        image: foodPhoto("photo-1505252585461-04db1eb84625")
    },
    {
        id: 30,
        name: "Soda Gembira",
        category: "Minuman",
        price: 10000,
        icon: "🥤",
        description: "Soda manis dengan susu dan sirup.",
        image: foodPhoto("photo-1544145945-f90425340c7e")
    },
    {
        id: 31,
        name: "Susu Cokelat",
        category: "Minuman",
        price: 13000,
        icon: "🍫",
        description: "Susu cokelat lembut, nikmat dingin atau hangat.",
        image: foodPhoto("photo-1511381939415-e44015466834")
    },
    {
        id: 32,
        name: "Wedang Jahe",
        category: "Minuman",
        price: 10000,
        icon: "🍵",
        description: "Minuman jahe hangat dengan aroma rempah.",
        image: foodPhoto("photo-1576092768241-dec231879fc3")
    }
];

const DEMO_STOCK_KEY = "foodOrderDemoStock";

function createInitialDemoStock() {
    return defaultMenus.reduce((stock, menu) => {
        stock[menu.id] = 20;
        return stock;
    }, {});
}

function loadDemoStock() {
    const savedStock = localStorage.getItem(DEMO_STOCK_KEY);

    if (savedStock === null) {
        return createInitialDemoStock();
    }

    const parsedStock = JSON.parse(savedStock);
    if (!parsedStock || typeof parsedStock !== "object" || Array.isArray(parsedStock)) {
        throw new TypeError("Data stok demo tersimpan tidak valid.");
    }

    return defaultMenus.reduce((stock, menu) => {
        const quantity = parsedStock[menu.id];
        if (!Number.isInteger(quantity) || quantity < 0) {
            throw new TypeError(`Data stok demo ${menu.name} tidak valid.`);
        }

        stock[menu.id] = quantity;
        return stock;
    }, {});
}

let demoStock = loadDemoStock();
let menus = defaultMenus.map(menu => ({
    ...menu,
    stock: demoStock[menu.id]
}));

// =====================================
// VARIABEL
// =====================================

function loadCart() {
    const savedCart = JSON.parse(
        localStorage.getItem("foodOrderCart") || "[]"
    );

    if (!Array.isArray(savedCart)) {
        throw new TypeError("Data keranjang tersimpan tidak valid.");
    }

    return savedCart
        .filter(item =>
            item &&
            defaultMenus.some(menu => menu.id === item.id) &&
            Number.isInteger(item.qty) &&
            item.qty > 0
        )
        .map(item => ({
            ...defaultMenus.find(menu => menu.id === item.id),
            qty: item.qty
        }));
}

let cart = loadCart();
let activeCategory = "Semua";
let toastTimeoutId;
let supabaseClient = null;
let menuChannel = null;
let backendReady = false;
let demoMode = false;
let isSavingOrder = false;

// Format rupiah
const rupiah = function (angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
};

// =====================================
// MENAMPILKAN MENU
// =====================================

function renderMenus() {
    const menuGrid = document.getElementById("menuGrid");
    const sortOrder = document.getElementById("menuSort").value;
    const searchTerm = document
        .getElementById("menuSearch")
        .value
        .trim()
        .toLocaleLowerCase("id-ID");
    const visibleMenus = menus.filter(menu => {
        const matchesCategory =
            activeCategory === "Semua" || menu.category === activeCategory;
        const searchableText = `${menu.name} ${menu.description}`
            .toLocaleLowerCase("id-ID")
            .includes(searchTerm);

        return matchesCategory && searchableText;
    }).sort((first, second) => {
        if (sortOrder === "price-low") {
            return first.price - second.price;
        }

        if (sortOrder === "price-high") {
            return second.price - first.price;
        }

        return Number(Boolean(second.popular)) - Number(Boolean(first.popular));
    });

    document.getElementById("menuCount").textContent =
        `${visibleMenus.length} menu`;

    if (visibleMenus.length === 0) {
        menuGrid.innerHTML = `
            <div class="menu-empty">
                Menu tidak ditemukan. Coba kata kunci lain.
            </div>
        `;

        return;
    }

    menuGrid.innerHTML = visibleMenus.map(menu => {
        const hasStock = (backendReady || demoMode) && menu.stock > 0;
        const stockClass = demoMode
            ? hasStock ? "demo-stock" : "out-of-stock"
            : hasStock
                ? "in-stock"
                : "out-of-stock";
        const stockLabel = demoMode
            ? hasStock ? `Stok contoh: ${menu.stock}` : "Habis"
            : !backendReady
                ? "Stok online belum tersedia"
            : hasStock
                ? `Stok ${menu.stock}`
                : "Habis";
        const buttonLabel = demoMode
            ? hasStock ? '<span aria-hidden="true">+</span> Tambah' : "Habis"
            : !backendReady
                ? "Perlu koneksi online"
            : hasStock
                ? '<span aria-hidden="true">+</span> Tambah'
                : "Habis";

        return `
        <article class="menu-card ${backendReady && !hasStock ? "sold-out" : ""}">

            <div class="food-image">
                <span aria-hidden="true">${escapeHtml(menu.icon)}</span>
                ${menu.popular ? '<span class="menu-badge">Pilihan</span>' : ""}
                <img src="${escapeHtml(menu.image)}" alt="Foto ${escapeHtml(menu.name)}"
                     loading="lazy" onerror="this.hidden = true">
            </div>

            <div class="menu-info">
                <h3>${escapeHtml(menu.name)}</h3>
                <small class="menu-category">${escapeHtml(menu.category)}</small>
                <p class="menu-description">${escapeHtml(menu.description)}</p>

                <div class="menu-price">
                    ${rupiah(menu.price)}
                </div>
                <small class="menu-stock ${stockClass}">
                    ${stockLabel}
                </small>
            </div>

            <button
                class="add-btn"
                onclick="addToCart(${menu.id})"
                ${hasStock ? "" : "disabled"}
                aria-label="${hasStock
                    ? `Tambah ${escapeHtml(menu.name)} ke keranjang`
                    : !backendReady
                        ? "Pemesanan memerlukan koneksi online"
                        : escapeHtml(stockLabel)}">
                ${buttonLabel}
            </button>

        </article>
    `;
    }).join("");
}

// =====================================
// TAMBAH MENU KE KERANJANG
// =====================================

function addToCart(id) {
    if (!backendReady && !demoMode) {
        showToast("Pemesanan online belum siap. Periksa konfigurasi Supabase.", "error");
        return;
    }

    const menu = menus.find(item => item.id === id);

    if (!menu) {
        return;
    }

    const found = cart.find(item => item.id === id);

    if (menu.stock <= (found ? found.qty : 0)) {
        showToast(`${menu.name} sudah habis atau stoknya tidak mencukupi.`, "error");
        return;
    }

    if (found) {
        found.qty++;
    } else {
        cart.push({
            ...menu,
            qty: 1
        });
    }

    renderCart();
    showToast(`${menu.name} ditambahkan ke keranjang.`, "success");
}

// =====================================
// UBAH JUMLAH MENU
// =====================================

function changeQty(id, amount) {
    const item = cart.find(menu => menu.id === id);

    if (!item) return;

    const menu = menus.find(menuItem => menuItem.id === id);

    if (amount > 0 && (!(backendReady || demoMode) || !menu || item.qty >= menu.stock)) {
        showToast("Jumlah pesanan sudah mencapai stok yang tersedia.", "error");
        return;
    }

    item.qty += amount;

    if (item.qty <= 0) {
        cart = cart.filter(menu => menu.id !== id);
    }

    renderCart();
}

// =====================================
// HAPUS ITEM
// =====================================

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);

    renderCart();
}

// =====================================
// HITUNG TOTAL
// =====================================

function getTotals() {

    // Menghitung subtotal
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    // Biaya layanan 5 persen
    const fee = Math.round(subtotal * 0.05);
    const deliveryFee =
        document.getElementById("orderType").value === "delivery" && subtotal > 0
            ? 8000
            : 0;

    // Mengambil diskon dari input
    let discountPercent =
        Number(document.getElementById("discount").value) || 0;

    // Batas diskon 0 sampai 100 persen
    discountPercent = Math.max(
        0,
        Math.min(100, discountPercent)
    );

    // Menghitung nominal diskon
    const discount = Math.round(
        subtotal * discountPercent / 100
    );

    // Menghitung total pembayaran
    const total = Math.max(
        0,
        subtotal + fee + deliveryFee - discount
    );

    return {
        subtotal,
        fee,
        deliveryFee,
        discount,
        total
    };
}

function showToast(message, type) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = `toast visible ${type || ""}`;

    window.clearTimeout(toastTimeoutId);
    toastTimeoutId = window.setTimeout(() => {
        toast.className = "toast";
    }, 3200);
}

function setConnectionStatus(message, state) {
    const status = document.getElementById("connectionStatus");
    status.textContent = message;
    status.className = `connection-status ${state || ""}`;
}

async function loadOnlineMenus() {
    const { data, error } = await supabaseClient
        .from("menu_items")
        .select("id, name, category, price, icon, popular, description, stock")
        .order("id");

    if (error) {
        throw new Error(error.message);
    }

    if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Menu database kosong. Jalankan supabase-setup.sql terlebih dahulu.");
    }

    menus = data.map(item => {
        const localMenu = defaultMenus.find(menu => menu.id === item.id);

        return {
            ...localMenu,
            ...item,
            image: localMenu ? localMenu.image : "",
            stock: Number(item.stock)
        };
    });

    cart = cart.map(cartItem => {
        const onlineMenu = menus.find(menu => menu.id === cartItem.id);
        return onlineMenu ? { ...onlineMenu, qty: cartItem.qty } : cartItem;
    });

    backendReady = true;
    renderMenus();
    renderCart();
}

async function initializeOnlineOrdering() {
    const config = window.FOODORDER_CONFIG;

    if (
        !window.supabase ||
        typeof window.supabase.createClient !== "function" ||
        !config ||
        !config.url ||
        !config.anonKey ||
        config.url.includes("YOUR_PROJECT") ||
        config.anonKey.includes("YOUR_SUPABASE")
    ) {
        demoMode = true;
        document.getElementById("orderingNote").textContent =
            "Mode demo: pesanan hanya tersimpan di browser ini dan tidak dikirim ke antrean dapur online.";
        setConnectionStatus(
            "Mode demo aktif. Stok awal 20 per menu; pesanan akan mengurangi stok di browser ini saja.",
            ""
        );
        renderMenus();
        renderCart();
        return;
    }

    setConnectionStatus("Menghubungkan ke menu dan stok online...", "loading");

    try {
        supabaseClient = window.supabase.createClient(config.url, config.anonKey);
        await loadOnlineMenus();
        document.getElementById("orderingNote").textContent =
            "Pesanan tersimpan online. Pembayaran QRIS dan transfer perlu dikonfirmasi kasir.";
        setConnectionStatus("Menu dan stok tersinkron online.", "connected");

        menuChannel = supabaseClient
            .channel("foodorder-public-menu")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "menu_items" },
                async () => {
                    try {
                        await loadOnlineMenus();
                        setConnectionStatus("Menu dan stok tersinkron online.", "connected");
                    } catch (error) {
                        console.error("Stok online gagal diperbarui.", error);
                        backendReady = false;
                        renderMenus();
                        renderCart();
                        setConnectionStatus(`Stok online gagal diperbarui: ${error.message}`, "error");
                    }
                }
            )
            .subscribe(status => {
                if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
                    setConnectionStatus(
                        "Koneksi realtime terputus. Pesanan tetap divalidasi oleh server.",
                        "error"
                    );
                }
            });
    } catch (error) {
        console.error("Menu online gagal dimuat.", error);
        backendReady = false;
        document.getElementById("orderingNote").textContent =
            "Pemesanan online belum siap. Periksa koneksi Supabase sebelum mencoba memesan.";
        renderMenus();
        renderCart();
        setConnectionStatus(`Menu online gagal dimuat: ${error.message}`, "error");
    }
}

function updateCashPayment(totals) {
    const isCash = document.getElementById("paymentMethod").value === "Tunai";
    const cashDetails = document.getElementById("cashPaymentDetails");
    const cashReceived = document.getElementById("cashReceived");
    const changeAmount = document.getElementById("changeAmount");
    const cashHint = document.getElementById("cashHint");

    cashDetails.hidden = !isCash || cart.length === 0;
    cashReceived.required = isCash && cart.length > 0;
    cashReceived.min = String(totals.total);

    if (!isCash || cart.length === 0) {
        return;
    }

    if (!cashReceived.value.trim()) {
        changeAmount.textContent = "—";
        changeAmount.classList.remove("insufficient");
        cashHint.textContent = "Masukkan uang yang diterima untuk menghitung kembalian.";

        return;
    }

    const received = Number(cashReceived.value);
    const difference = received - totals.total;
    const isInsufficient = !Number.isFinite(received) || difference < 0;

    changeAmount.textContent = isInsufficient
        ? `Kurang ${rupiah(Math.max(0, -difference))}`
        : rupiah(difference);
    changeAmount.classList.toggle("insufficient", isInsufficient);
    cashHint.textContent = isInsufficient
        ? "Uang yang diterima belum mencukupi."
        : "Nominal pembayaran sudah mencukupi.";
}

// =====================================
// MENAMPILKAN KERANJANG
// =====================================

function renderCart() {

    const holder = document.getElementById("cartItems");
    const itemCount = cart.reduce((total, item) => total + item.qty, 0);
    const mobileCartBar = document.getElementById("mobileCartBar");
    const checkoutButton = document.getElementById("checkoutBtn");
    const hasUnavailableStock = (backendReady || demoMode) && cart.some(item => {
        const menu = menus.find(menuItem => menuItem.id === item.id);
        return !menu || item.qty > menu.stock;
    });
    checkoutButton.disabled =
        (!backendReady && !demoMode) ||
        isSavingOrder ||
        cart.length === 0 ||
        hasUnavailableStock;

    if (cart.length === 0) {
        document.getElementById("cashReceived").value = "";
    }

    document.getElementById("cartCount").textContent =
        `${itemCount} item`;
    document.getElementById("navCartCount").textContent = itemCount;
    document.getElementById("navCartCount").hidden = itemCount === 0;
    document.getElementById("mobileCartCount").textContent =
        `${itemCount} item`;
    mobileCartBar.hidden = itemCount === 0;
    document.body.classList.toggle("has-mobile-cart", itemCount > 0);

    localStorage.setItem(
        "foodOrderCart",
        JSON.stringify(cart.map(item => ({ id: item.id, qty: item.qty })))
    );

    // Jika keranjang kosong
    if (cart.length === 0) {

        holder.innerHTML = `
            <div class="empty">
                Keranjang masih kosong.
                <br>
                Tambahkan menu terlebih dahulu.
            </div>
        `;

    } else {

        // Jika terdapat menu
        holder.innerHTML = cart.map(item => {
            const menu = menus.find(menuItem => menuItem.id === item.id);
            const stockLabel = demoMode
                ? menu && menu.stock > 0
                    ? `Stok contoh: ${menu.stock}`
                    : "Habis"
                : !backendReady
                    ? "Stok online belum tersedia"
                : menu && item.qty <= menu.stock
                    ? `Stok tersedia: ${menu.stock}`
                    : "Jumlah melebihi stok tersedia";

            return `
            <div class="cart-row ${menu && item.qty > menu.stock ? "stock-warning" : ""}">
                <div class="cart-item-main">
                    <div class="cart-item-image">
                        <span aria-hidden="true">${escapeHtml(item.icon || "🍽️")}</span>
                        <img src="${escapeHtml(item.image || "")}" alt="" loading="lazy"
                             onerror="this.hidden = true">
                    </div>
                    <div class="cart-name">
                        ${escapeHtml(item.name)}
                        <small>${rupiah(item.price)} / item</small>
                        <strong>${rupiah(item.price * item.qty)}</strong>
                        <small class="cart-stock-warning">${escapeHtml(stockLabel)}</small>
                    </div>
                </div>
                <div class="cart-row-actions">
                    <div class="qty-controls">
                        <button
                            type="button"
                            aria-label="Kurangi ${escapeHtml(item.name)}"
                            onclick="changeQty(${item.id}, -1)">
                            −
                        </button>
                        <span aria-live="polite">${item.qty}</span>
                        <button
                            type="button"
                            aria-label="Tambah ${escapeHtml(item.name)}"
                            onclick="changeQty(${item.id}, 1)">
                            +
                        </button>
                    </div>
                    <button
                        class="remove-btn"
                        type="button"
                        onclick="removeItem(${item.id})"
                        aria-label="Hapus ${escapeHtml(item.name)}"
                        title="Hapus item">
                        ×
                    </button>
                </div>
            </div>
        `;
        }).join("");
    }

    // Memperbarui total harga
    const totals = getTotals();

    document.getElementById("subtotal").textContent =
        rupiah(totals.subtotal);

    document.getElementById("serviceFee").textContent =
        rupiah(totals.fee);

    document.getElementById("deliveryFee").textContent =
        rupiah(totals.deliveryFee);

    document.getElementById("discountAmount").textContent =
        rupiah(totals.discount);

    document.getElementById("total").textContent =
        rupiah(totals.total);
    document.getElementById("mobileCartTotal").textContent =
        rupiah(totals.total);

    updateCashPayment(totals);
    updateMobileCartVisibility();
}

function updateMobileCartVisibility() {
    const mobileCartBar = document.getElementById("mobileCartBar");
    const checkoutTop = document
        .getElementById("pesanan")
        .getBoundingClientRect()
        .top;

    mobileCartBar.classList.toggle(
        "checkout-visible",
        checkoutTop < window.innerHeight
    );
}

function updateOrderType() {
    const orderType = document.getElementById("orderType").value;
    const isDelivery = orderType === "delivery";
    const isDineIn = orderType === "dine-in";

    document.getElementById("deliveryDetails").hidden = !isDelivery;
    document.getElementById("tableDetails").hidden = !isDineIn;
    document.getElementById("deliveryAddress").required = isDelivery;
    document.getElementById("buyerPhone").required = isDelivery;
    document.getElementById("tableNumber").required = isDineIn;

    renderCart();
}

function resetOrderForm() {
    cart = [];
    document.getElementById("buyerName").value = "";
    document.getElementById("buyerPhone").value = "";
    document.getElementById("deliveryAddress").value = "";
    document.getElementById("tableNumber").value = "";
    document.getElementById("orderType").value = "takeaway";
    document.getElementById("paymentMethod").value = "Tunai";
    document.getElementById("cashReceived").value = "";
    document.getElementById("discount").value = "0";
    updateOrderType();
}

function saveDemoOrder(details, totals) {
    const updatedStock = { ...demoStock };
    const items = cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty
    }));

    for (const item of items) {
        if (updatedStock[item.id] < item.qty) {
            throw new Error(`Stok ${item.name} tidak lagi mencukupi.`);
        }
        updatedStock[item.id] -= item.qty;
    }

    const order = {
        id: `DEMO-${Date.now()}`,
        buyer: details.buyer,
        phone: details.phone,
        orderType: details.orderType,
        address: details.address,
        tableNumber: details.tableNumber,
        paymentMethod: details.paymentMethod,
        paymentStatus: details.paymentMethod === "Tunai" ? "Lunas" : "Belum dibayar",
        cashReceived: details.paymentMethod === "Tunai" ? details.cashReceived : null,
        change: details.paymentMethod === "Tunai"
            ? details.cashReceived - totals.total
            : null,
        items,
        subtotal: totals.subtotal,
        fee: totals.fee,
        deliveryFee: totals.deliveryFee,
        discount: totals.discount,
        total: totals.total,
        status: "Demo lokal",
        date: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
        demo: true
    };

    localStorage.setItem(DEMO_STOCK_KEY, JSON.stringify(updatedStock));
    demoStock = updatedStock;
    menus = menus.map(menu => ({
        ...menu,
        stock: demoStock[menu.id]
    }));
    resetOrderForm();
    renderMenus();
    showReceipt(order);
    showToast("Pesanan demo berhasil. Pesanan tidak dikirim ke dapur online.", "success");
}

// =====================================
// SIMPAN PESANAN
// =====================================

async function saveOrder() {
    if ((!backendReady || !supabaseClient) && !demoMode) {
        showToast("Pemesanan online belum siap. Periksa konfigurasi Supabase.", "error");
        return;
    }

    if (isSavingOrder) return;

    const buyer = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const orderType = document.getElementById("orderType").value;
    const address = document.getElementById("deliveryAddress").value.trim();
    const tableNumber = document.getElementById("tableNumber").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value;
    const cashReceivedInput = document.getElementById("cashReceived").value.trim();
    const cashReceived = Number(cashReceivedInput);

    if (!buyer) {
        showToast("Silakan isi nama pembeli terlebih dahulu.", "error");
        document.getElementById("buyerName").focus();
        return;
    }

    if (cart.length === 0) {
        showToast("Keranjang masih kosong. Tambahkan menu terlebih dahulu.", "error");
        return;
    }

    if (orderType === "delivery" && !phone) {
        showToast("Nomor telepon diperlukan untuk pesanan antar.", "error");
        document.getElementById("buyerPhone").focus();
        return;
    }

    if (orderType === "delivery" && !address) {
        showToast("Silakan isi alamat pengantaran.", "error");
        document.getElementById("deliveryAddress").focus();
        return;
    }

    if (orderType === "dine-in" && !tableNumber) {
        showToast("Silakan isi nomor meja.", "error");
        document.getElementById("tableNumber").focus();
        return;
    }

    const totals = getTotals();
    if (
        paymentMethod === "Tunai" &&
        (!cashReceivedInput || !Number.isFinite(cashReceived) || cashReceived < totals.total)
    ) {
        const message = cashReceivedInput
            ? `Uang diterima kurang ${rupiah(Math.max(0, totals.total - cashReceived))}.`
            : "Masukkan nominal uang yang diterima.";
        showToast(message, "error");
        document.getElementById("cashReceived").focus();
        return;
    }

    const unavailableItem = cart.find(item => {
        const menu = menus.find(menuItem => menuItem.id === item.id);
        return !menu || item.qty > menu.stock;
    });

    if (unavailableItem) {
        showToast(`Stok ${unavailableItem.name} tidak lagi mencukupi.`, "error");
        return;
    }

    if (demoMode) {
        try {
            saveDemoOrder({
                buyer,
                phone,
                orderType,
                address: orderType === "delivery" ? address : "",
                tableNumber: orderType === "dine-in" ? tableNumber : "",
                paymentMethod,
                cashReceived
            }, totals);
        } catch (error) {
            console.error("Pesanan demo gagal disimpan.", error);
            showToast(`Pesanan demo gagal: ${error.message}`, "error");
        }
        return;
    }

    const checkoutButton = document.getElementById("checkoutBtn");
    isSavingOrder = true;
    checkoutButton.disabled = true;
    checkoutButton.textContent = "Mengirim pesanan...";

    try {
        const { data, error } = await supabaseClient.rpc("place_order", {
            p_order: {
                buyer_name: buyer,
                phone,
                order_type: orderType,
                address: orderType === "delivery" ? address : "",
                table_number: orderType === "dine-in" ? tableNumber : "",
                payment_method: paymentMethod,
                cash_received: paymentMethod === "Tunai" ? cashReceived : null,
                discount_percent: Number(document.getElementById("discount").value) || 0,
                items: cart.map(item => ({ id: item.id, qty: item.qty }))
            }
        });

        if (error) {
            throw new Error(error.message);
        }

        if (!data || !data.id) {
            throw new Error("Server tidak mengembalikan nomor pesanan.");
        }

        resetOrderForm();
        showReceipt(data);
        showToast("Pesanan berhasil dikirim ke dapur.", "success");

        try {
            await loadOnlineMenus();
        } catch (refreshError) {
            console.error("Pesanan tersimpan, tetapi stok gagal diperbarui.", refreshError);
            backendReady = false;
            renderMenus();
            renderCart();
            setConnectionStatus(
                "Pesanan tersimpan. Gagal memperbarui stok online; muat ulang halaman untuk mencoba lagi.",
                "error"
            );
        }
    } catch (error) {
        console.error("Pesanan online gagal disimpan.", error);
        showToast(`Pesanan belum tersimpan: ${error.message}`, "error");
    } finally {
        isSavingOrder = false;
        checkoutButton.textContent = "Kirim Pesanan";
        renderCart();
    }
}

function showReceipt(order) {
    const orderTypeLabels = {
        takeaway: "Ambil sendiri",
        delivery: "Pesan antar",
        "dine-in": "Makan di tempat"
    };
    const orderNumber = String(order.id).slice(-6);
    const cashDetails = order.paymentMethod === "Tunai" &&
        Number.isFinite(order.cashReceived)
        ? `
            <div><span>Uang diterima</span><strong>${rupiah(order.cashReceived)}</strong></div>
            <div><span>Kembalian</span><strong>${rupiah(order.change)}</strong></div>
        `
        : "";

    document.getElementById("receiptContent").innerHTML = `
        <header class="receipt-header">
            <div class="receipt-brand">
                <span aria-hidden="true">🍽️</span>
                <div>
                    <strong>FoodOrder</strong>
                    <small>Struk pesanan</small>
                </div>
            </div>
            <h2 id="receiptTitle">Rincian Pesanan</h2>
            <p>#${escapeHtml(orderNumber)} · ${escapeHtml(order.date)}</p>
        </header>

        <div class="receipt-customer">
            <strong>${escapeHtml(order.buyer)}</strong>
            ${order.phone ? `<span>${escapeHtml(order.phone)}</span>` : ""}
            <span>${escapeHtml(orderTypeLabels[order.orderType] || "Pesanan")}</span>
            ${order.tableNumber ? `<span>Meja ${escapeHtml(order.tableNumber)}</span>` : ""}
            ${order.address ? `<span>${escapeHtml(order.address)}</span>` : ""}
        </div>

        <div class="receipt-items">
            ${order.items.map(item => `
                <div class="receipt-line">
                    <div>
                        <strong>${escapeHtml(item.name)}</strong>
                        <small>${rupiah(item.price)} × ${item.qty}</small>
                    </div>
                    <strong>${rupiah(item.price * item.qty)}</strong>
                </div>
            `).join("")}
        </div>

        <div class="receipt-totals">
            <div><span>Subtotal</span><strong>${rupiah(order.subtotal)}</strong></div>
            <div><span>Biaya layanan</span><strong>${rupiah(order.fee)}</strong></div>
            ${order.deliveryFee ? `<div><span>Biaya antar</span><strong>${rupiah(order.deliveryFee)}</strong></div>` : ""}
            ${order.discount ? `<div><span>Diskon</span><strong>−${rupiah(order.discount)}</strong></div>` : ""}
            <div class="receipt-grand-total"><span>Total</span><strong>${rupiah(order.total)}</strong></div>
        </div>

        <div class="receipt-payment">
            <div><span>Status pesanan</span><strong>${escapeHtml(order.status || "Menunggu")}</strong></div>
            <div><span>Metode pembayaran</span><strong>${escapeHtml(order.paymentMethod || "—")}</strong></div>
            <div>
                <span>Status pembayaran</span>
                <strong class="payment-status ${order.paymentStatus === "Lunas" ? "is-paid" : "is-unpaid"}">
                    ${escapeHtml(order.paymentStatus || "Belum dicatat")}
                </strong>
            </div>
            ${cashDetails}
        </div>

        <p class="receipt-note">
            ${order.demo
                ? "Mode demo: pesanan hanya diproses di browser ini dan tidak dikirim ke antrean dapur."
                : "QRIS dan transfer bank dicatat di aplikasi; konfirmasi pembayaran dilakukan secara manual."}
        </p>
    `;

    document.getElementById("receiptDialog").showModal();
}

function escapeHtml(value) {
    const characters = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    };

    return String(value).replace(/[&<>"']/g, character => characters[character]);
}

// =====================================
// EVENT TOMBOL
// =====================================

// Perubahan diskon
document
    .getElementById("discount")
    .addEventListener("input", renderCart);

document
    .getElementById("cashReceived")
    .addEventListener("input", renderCart);

document
    .getElementById("paymentMethod")
    .addEventListener("change", function () {
        if (this.value !== "Tunai") {
            document.getElementById("cashReceived").value = "";
        }

        renderCart();
    });

document
    .getElementById("exactCashBtn")
    .addEventListener("click", function () {
        document.getElementById("cashReceived").value = getTotals().total;
        renderCart();
    });

document
    .querySelectorAll("[data-cash-add]")
    .forEach(button => button.addEventListener("click", function () {
        const cashReceived = Number(
            document.getElementById("cashReceived").value
        ) || 0;
        const baseAmount = Math.max(cashReceived, getTotals().total);

        document.getElementById("cashReceived").value =
            baseAmount + Number(this.dataset.cashAdd);
        renderCart();
    }));

// Pencarian dan filter menu
document
    .getElementById("menuSearch")
    .addEventListener("input", renderMenus);

document
    .getElementById("menuSort")
    .addEventListener("change", renderMenus);

window.addEventListener("scroll", updateMobileCartVisibility, { passive: true });
window.addEventListener("resize", updateMobileCartVisibility);

document
    .getElementById("orderType")
    .addEventListener("change", updateOrderType);

document
    .querySelectorAll(".filter-btn")
    .forEach(button => button.addEventListener("click", function () {
        activeCategory = this.dataset.category;

        document.querySelectorAll(".filter-btn").forEach(filterButton => {
            const isActive = filterButton === this;
            filterButton.classList.toggle("active", isActive);
            filterButton.setAttribute("aria-pressed", isActive);
        });

        renderMenus();
    }));

// Tombol simpan pesanan
document
    .getElementById("checkoutBtn")
    .addEventListener("click", saveOrder);

document
    .getElementById("printReceiptBtn")
    .addEventListener("click", () => window.print());

document
    .getElementById("closeReceiptBtn")
    .addEventListener("click", () => {
        document.getElementById("receiptDialog").close();
    });

// Tombol kosongkan keranjang
document
    .getElementById("clearCartBtn")
    .addEventListener("click", function () {

        cart = [];

        renderCart();

    });

// =====================================
// MENJALANKAN APLIKASI
// =====================================

updateOrderType();
renderMenus();
initializeOnlineOrdering();