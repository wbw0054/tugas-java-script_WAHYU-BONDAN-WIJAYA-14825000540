// 1.array of object
const produk = [
    { nama: "Buku", harga: 5000, stok: 10 },
    { nama: "Pensil", harga: 2000, stok: 0 },
    { nama: "Penggaris", harga: 3000, stok: 15 },
    { nama: "Penghapus", harga: 1000, stok: 5 },
    { nama: "Buku Gambar", harga: 8000, stok: 2 }
];

console.log("--- DAFTAR SEMUA PRODUK ---");
// 3.perulangan
produk.forEach(p => {
    console.log(`\({p.nama} - Rp\){p.harga} (Stok: ${p.stok})`);
});

// 2. Function 1: Memfilter data 
function cariTersedia(data) {
    let hasil = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].stok > 0 && data[i].harga < 6000) {
            hasil.push(data[i]);
        }
    }
    return hasil;
}

console.log("\n--- HASIL FILTER (Stok > 0 & Harga < 6000) ---");
console.log(cariTersedia(produk));

// 2. Function 2: Menghitung total harga
function hitungTotal(data) {
    let total = 0;
    for (let p of data) {
        total += p.harga;
    }
    return total;
}

console.log("\n--- TOTAL KESELURUHAN HARGA ---");
console.log("Rp " + hitungTotal(produk));