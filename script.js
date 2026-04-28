// 1. Cek apakah file JS kebaca
console.log("JS aktif");

// 2. Fungsi Kirim
// Pastikan di HTML ada elemen dengan id="nama" dan id="status"
function kirim() {
    var namaInput = document.getElementById("nama").value;
    var status = document.getElementById("status");

    if (!namaInput) {
        status.innerHTML = "Isi nama dulu ya";
        return;
    }

    status.innerHTML = "Terima kasih " + namaInput + ", data berhasil dikirim";
}

// 3. Fungsi Hitung
// Pastikan di HTML ada id="tugas", id="uts", id="uas", dan id="hasil"
function hitung() {
    var tugas = parseFloat(document.getElementById("tugas").value);
    var uts = parseFloat(document.getElementById("uts").value);
    var uas = parseFloat(document.getElementById("uas").value);

    // Cek apakah input kosong atau bukan angka (NaN)
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        document.getElementById("hasil").innerHTML = "Isi semua nilai dengan angka";
        return;
    }

    var total = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);

    document.getElementById("hasil").innerHTML = "Nilai akhir: " + total.toFixed(1);
}

// 4. Variabel dan Tipe Data
let namaMhs = "daffa"; // Diubah agar tidak bentrok dengan variabel di bawah
const umur = 20;
let teks = "Hello";     // String
let angka = 10;         // Number
let aktif = true;       // Boolean
let kosong = null;
let belum;

let mahasiswa = {
    nama: "daffa",
    umur: 20
};

let daftarNilai = [80, 90, 100]; // Nama variabel diubah karena 'nilai' dipakai lagi di bawah

// 5. Fungsi dan Output
console.log("Hello dari konsol");
// alert("Halo"); // Dimatikan sementara agar tidak mengganggu saat refresh halaman

function sapa(nama) {
    return "Halo " + nama;
}
console.log(sapa("daffa"));

const tambah = (a, b) => {
    return a + b;
};

// 6. Pengkondisian (Logic)
let skor = 80; // Nama variabel diganti dari 'nilai' agar tidak error (Redeclaration)

if (skor >= 75) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus");
}

// 7. Perulangan (Loop)
for (let i = 0; i < 5; i++) {
    console.log("Urutan ke-" + i);
}

// 8. DOM Manipulation (Pastikan elemen-elemen ini ada di HTML)
const judul = document.querySelector("h1");    
const tombol = document.querySelector("#btn"); 
// const item = document.querySelector(".menu"); // Aktifkan jika ada class .menu di HTML

if (judul) {
    judul.innerHTML = "<strong>Judul Baru</strong>"; // Render sebagai HTML
    judul.style.color = "red"; 
    judul.style.backgroundColor = "white"; // Diganti jadi black agar teks red kelihatan (tadi blue)
    // judul.style.display = "none"; // Hati-hati: ini akan menghilangkan elemen dari layar
}