/* menampilkan alert pop up ketika di beranda atau klik link cek wisata */
var time = new Date().getHours();

if (time < 10) {
  alert("Selamat Pagi, selamat berkunjung di halaman Web Cek Wisata");
} else if (time < 20) {
  alert("Semoga harimu menyenangkan, selamat berkunjung di halaman Web Cek Wisata");
} else {
  alert("Selamat malam, selamat berkunjung di halaman Web Cek Wisata");
}          

/* apabila search digunakan bisa direct ke halaman tertentu sesuai input */
function terimainput() {
  var cari = document.forms["cari"]["search"].value;

  if (cari == "info wisata" || cari == "Info wisata" || cari == "info" || cari == "wisata") {
    window.location = "info.html"
  } else if (cari == "info penginapan" || cari == "penginapan" || cari == "hotel") {
    window.location = "penginapan.html"
  } else if (cari == "Review" || cari == "review" || cari == "Review wisata") {
    window.location = "review.html"
  } else {
     window.location = "index.html"
  }
}
