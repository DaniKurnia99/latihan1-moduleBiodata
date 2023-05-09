var biodata = require('./modules/biodata');

var nama = 'Dani Kurnia';
var tempatLahir = 'Bandung';
var tanggalLahir = '18 Mei 2004';
var alamat = 'Jl. Pasirluyu';

console.log("Nama: " + biodata.nama(nama));
console.log("Tempat Lahir: " + biodata.tempatLahir(tempatLahir));
console.log("Tanggal Lahir: " + biodata.tanggalLahir(tanggalLahir));
console.log("Alamat: " + biodata.alamat(alamat));