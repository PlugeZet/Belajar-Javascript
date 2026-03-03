// Membuat object

// 1. Object literal
var myName = {
    nama : "Dimas anjay mabar",
    umur : 17,
    kelas : "XI XXXX 1",
    nilai : [100, 90, 96, 92, 97],
    alamat : {
        jalan : "Jl. rusdi jaya",
        kota : "Ngawi",
        provinsi : "Ambatukam"
    }
}

// Function declaration
var siswa = {};
function daftarSekolah(nama, umur, asalSekolah, alamat){
    var siswaBaru = {};
    siswaBaru.nama = nama;
    siswaBaru.umur = umur;
    siswaBaru.asalSekolah = asalSekolah;
    siswaBaru.alamat = alamat;

    siswa.siswa1 = siswaBaru;
    return siswa;
}
daftarSekolah('Andi', 17, 'SMPN 9', 'Kebon jambu');
console.log(siswa);

// Constructor
function DaftarAkun(nama, email, password){
    this.nama = nama;
    this.email = email;
    this.password = password;
    return this;
}
var akun_1 = new DaftarAkun("Rudi", "rudianakmamah@gmail.com", "anjayalok123");
console.log(akun_1);