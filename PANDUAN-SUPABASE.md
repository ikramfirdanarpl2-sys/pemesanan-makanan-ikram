# Menyiapkan FoodOrder online

## 1. Buat proyek Supabase

Buat proyek di Supabase, lalu buka **SQL Editor** dan jalankan seluruh isi `supabase-setup.sql`. Skrip ini membuat menu, stok, pesanan, profil staf, kebijakan akses, fungsi transaksi, dan publikasi realtime.

Stok awal pada menu contoh adalah **20 porsi per menu**. Sesuaikan jumlah sebenarnya melalui dashboard staf setelah akun kasir dibuat.

## 2. Hubungkan aplikasi

Salin **Project URL** dan **publishable key** dari pengaturan API proyek, lalu isi `supabase-config.js`:

```js
window.FOODORDER_CONFIG = {
    url: "https://PROJECT_REF.supabase.co",
    anonKey: "sb_publishable_..."
};
```

Publishable/anon key memang digunakan di browser. Jangan pernah menaruh `service_role` key di aplikasi atau mengirimkannya ke siapa pun. Keamanan data ditangani oleh kebijakan RLS di SQL.

## 3. Buat akun staf dan beri peran

Buat akun email/kata sandi di **Authentication → Users**. Pendaftaran publik tidak diperlukan. Setelah itu, jalankan perintah berikut di SQL Editor untuk setiap staf:

```sql
insert into public.staff_profiles (user_id, full_name, role)
select id, 'Nama Kasir', 'cashier'
from auth.users
where email = 'kasir@restoran.test'
on conflict (user_id) do update
set full_name = excluded.full_name, role = excluded.role;
```

Peran yang tersedia: `cashier`, `kitchen`, dan `admin`. Kasir/admin dapat mengelola stok dan pembayaran; dapur dapat melihat antrean dan mengubah status pesanan.

## 4. Jalankan atau host aplikasi

Jangan buka halaman dengan `file://`. Jalankan folder ini melalui server lokal seperti **VS Code Live Server**, atau unggah file statis ke layanan hosting. Atur URL lokal dan URL hosting pada **Authentication → URL Configuration** agar login staf diizinkan.

- Halaman pelanggan: `index.html`
- Dashboard kasir/dapur: `staff.html`

## Cara kerja

- Pelanggan dapat melihat menu dan membuat pesanan tanpa akun.
- Sebelum Supabase dikonfigurasi, halaman pelanggan berjalan dalam mode demo: stok awal 20 per menu, pesanan mengurangi stok di browser ini saja, dan pesanan tidak masuk antrean dapur online.
- Saat Supabase tersambung, pesanan, stok, status, dan item pesanan disimpan di Supabase.
- Dalam mode online, fungsi `place_order` menghitung harga dari database, mengunci stok saat transaksi, lalu menolak pesanan jika stok tidak cukup.
- Membatalkan pesanan mengembalikan stok secara otomatis; pesanan yang dibatalkan tidak dapat dibuka kembali.
- Dashboard staf menerima perubahan pesanan/stok secara realtime.
- Pembayaran Tunai tercatat lunas setelah nominal tervalidasi. QRIS/transfer harus dikonfirmasi kasir secara manual.
- Keranjang sementara tetap tersimpan lokal di browser. Riwayat lama yang sebelumnya ada di `localStorage` tidak dihapus atau dipindahkan otomatis.
