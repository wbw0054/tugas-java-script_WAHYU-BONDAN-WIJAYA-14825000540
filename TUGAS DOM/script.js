// 1. Array of Object (Hasil dari Bagian 1)
let produk = [
    { nama: "Buku", harga: 5000, stok: 10 },
    { nama: "Pensil", harga: 2000, stok: 0 },
    { nama: "Penggaris", harga: 3000, stok: 15 },
    { nama: "Penghapus", harga: 1000, stok: 5 },
    { nama: "Buku Gambar", harga: 8000, stok: 2 }
];

// Ambil elemen dari DOM
const containerProduk = document.getElementById("daftarProduk");
const inputPencarian = document.getElementById("inputPencarian");
const btnToggle = document.getElementById("btnToggle");
const formProduk = document.getElementById("formProduk");

// FUNGSI 1: Menampilkan data array of object ke halaman (Ketentuan 1)
function tampilkanProduk(dataArray) {
    // Kosongkan kontainer terlebih dahulu sebelum render ulang
    containerProduk.innerHTML = "";

    if (dataArray.length === 0) {
        containerProduk.innerHTML = "<p>Produk tidak ditemukan.</p>";
        return;
    }

    dataArray.forEach(p => {
        // Menggunakan createElement (atau bisa pakai template literal)
        const card = document.createElement("div");
        card.classList.add("card");

        // Ketentuan 4: Gunakan classList untuk mengubah tampilan, bukan style inline
        if (p.stok === 0) {
            card.classList.add("habis");
        }

        // Isi HTML di dalam card menggunakan template literal
        card.innerHTML = `
            <strong>${p.nama}</strong><br>
            Harga: Rp ${p.harga} <br>
            Stok: ${p.stok}
        `;

        containerProduk.appendChild(card);
    });
}

// Panggil fungsi saat pertama kali halaman dimuat
tampilkanProduk(produk);


// --- INTERAKSI DENGAN addEventListener (Ketentuan 2 - Minimal 2 interaksi) ---

// Interaksi A: Fitur Pencarian / Filter Data real-time
inputPencarian.addEventListener("input", function(e) {
    const keyword = e.target.value.toLowerCase();
    const hasilFilter = produk.filter(p => p.nama.toLowerCase().includes(keyword));
    tampilkanProduk(hasilFilter);
});

// Interaksi B: Toggle Tampilan (Contoh: Menambahkan/menghapus class highlight pada kontainer)
btnToggle.addEventListener("click", function() {
    containerProduk.classList.toggle("highlight");
});


// --- FORM DENGAN VALIDASI & preventDefault() (Ketentuan 3) ---
formProduk.addEventListener("submit", function(e) {
    // Mencegah halaman melakukan reload bawaan form
    e.preventDefault(); 

    // Ambil nilai dari input
    const namaInput = document.getElementById("namaBaru").value.trim();
    const hargaInput = Number(document.getElementById("hargaBaru").value);
    const stokInput = Number(document.getElementById("stokBaru").value);

    // Validasi input sederhana
    if (namaInput === "" || isNaN(hargaInput) || isNaN(stokInput)) {
        alert("Semua field harus diisi dengan benar!");
        return;
    }

    if (hargaInput <= 0 || stokInput < 0) {
        alert("Harga harus lebih dari 0 dan stok tidak boleh negatif!");
        return;
    }

    // Tambahkan data baru ke array of object
    const produkBaru = {
        nama: namaInput,
        harga: hargaInput,
        stok: stokInput
    };

    produk.push(produkBaru);

    // Render ulang daftar produk agar data baru muncul di layar
    tampilkanProduk(produk);

    // Reset form setelah berhasil submit
    formProduk.reset();
    alert("Produk berhasil ditambahkan!");
});