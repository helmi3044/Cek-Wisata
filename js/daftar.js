/* menambahkan pop up konfirmasi ketika melakukan daftar akun */
function daftar() {
  var daftar = confirm("Apakah anda yakin ingin mendaftarkan akun anda?")

  if (daftar) {
    window.location = "index.html"
  } else {
    window.location = "daftar.html"
  }
}
