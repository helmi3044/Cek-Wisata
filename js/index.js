/* menampilkan alert pop up ketika di beranda atau klik link cek wisata */
var time = new Date().getHours();

if (time < 10) {
  alert("Selamat Pagi, selamat berkunjung di halaman Web Cek Wisata");
} else if (time < 20) {
  alert("Semoga harimu menyenangkan, selamat berkunjung di halaman Web Cek Wisata");
} else {
  alert("Selamat malam, selamat berkunjung di halaman Web Cek Wisata");
}          
