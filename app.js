console.log("Bismillah Pratikum Dimulai");

// Aktivitas 1 DOM SELECTION / Seleksi elemen
// Kenapa kita harus seleksi karena "menangkap" atau ambil id/class
// Mengambil elemen html tersebut lalu disimpan divariabel javascript

// 1. Mengambil Elemen Judul Utama & Sub Judul
// document.getelementById("...") mengambil berdasarkan atribut id.

const JudulUtama = document.getElementById("judul-utama"); //menangkap: <h1 id="judul-utama">

// document.querySelector("#...")
// tanda # artinya ID
const subjudul = document.querySelector("#sub-judul"); 

// 2. Mengambil Elemen pada kartu 1 (Kartu manipulasi teks & Style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

// 3. Mengambil elemen tombol - tombol aksi pada kartu 1
const BtnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. Mengambil Elemen pada kartu 2 (Fitus Catatan Dinamis / To Do list sederhana)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");

// Aktivitas ke 2 Manipulasi  Teks & Style (Card 1)
// addEventListener("click", function() {...}) artinya adalah tolong drengarkan dulu
// sampai di klik user. jika di klik jalankan perintah didalam function

// A. 
BtnUbahTeks.addEventListener("click", function() {
    //.innerteks = mengganti atau mengisi secara langsung teks yang ada didalam elemen HTML
    teksPreview.innerText = "Hebat! Teks Ini berhasil diubah pake DOM!";

    //.style.color = mengubah warna teks secara langsung  
    teksPreview.style.color = "rgb(18, 233, 18)";

    // console.log
    console.log("[DOM] Teks Preview telah diperbarui!");
});

// B. Manipulasi Class Css Menggunakan classList.toggle()
btnToggleWarna.addEventListener("click", function() {

    boxPreview.classList.toggle("active-mode"); 
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM Berhasil di switch!");
});

// C. Mengambilkan (Reset) Teks ke kondisi semula
btnReset.addEventListener("click", function() {
    // 1.
    teksPreview.innerText = "Halo! Teks ini siap diubah oleh javascript";

    // 2.
    teksPreview.style.color = "";

    // 3.
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM Tampilkan di reset");
});

// Aktivitas 3 & 4 : Elemen Dinamis & Event Handling (TO-DO List Sederhana)
// Di Aktivitas ini kita belajar elemen HTML baru (<li>) secara otomatis dalam javascript 
// mengisi teksnya, memberi tombol hapus, lalu menempelkan ke layar (<ul>)

// Langkah 1 
// "let"
let totalCatatan = 0;

// Langkah 2 Fungsi Update angka counter & pesan status
function perbaruiJumlah() {
    // Memasukan
    jumlahCatatan.innerText = totalCatatan;

    // conditional
    if (totalCatatan === 0) {
        // jika
        pesanKosong.classList.remove("hidden");
    } else {
        // jika > 0
        pesanKosong.classList.add("hidden");
    }
}

// Langkah 3: Fungsi Utama Logika Tambah Catatan Baru
function tambahCatatan() {
    // 3.1 inputcatatan.value fungsi nya untuk mengambil teks yang diketik oleh user
    // .trim() = menghapus spasi diawal dan diakhir
    const isiTeks = inputCatatan.value.trim();

    // 3.2 Validasi input
    if (isiTeks === "") {
        alert("Catatan kamu tidak boleh kosong!");
        return;
    }

    // 3.3 
    const liBaru = document.createElement("li");
    liBaru.className = "note-item";

    // 3.4
    // Tanda 
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

    // 3.5 Menambah Telinga / Event Listener Untuk Tombol hapus pada catatan dinamis
    // liBaru.querySelector(".btn-hapus") = mengambil tombol ber class 
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function() {
        liBaru.remove(); //
        totalCatatan--;
        perbaruiJumlah();
        console.log(`DOM Catatan "${isiTeks}" dihapus.`);
    });

    // 3.6 appenchil = memasukan elemen li kedalam wadah <ul id="daftar-catatan">
    daftarCatatan.appendChild(liBaru);

    // 3.7 totalCatatan
    inputCatatan.value = "";

    //3.8 
    totalCatatan++;
    perbaruiJumlah();

    console.log(`Dom Catatan baru ditambahkan: ${isiTeks} `);
}

// Langkah 4: Event Listener Klik Tombol + "Tambah"
// ketika tombol "+ Tambah " di klik oleh user, maka jalankan fungsi tambah catatan()
btnTambah.addEventListener("click", function() {
    tambahCatatan();
});

// Langkah 5
// Ketika user 
inputCatatan.addEventListener("keyup", function (event) {
    //
    if (event.key === "Enter") {
        tambahCatatan();
    }
});