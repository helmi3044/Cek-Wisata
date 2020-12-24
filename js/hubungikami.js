/* membuat js apabila form tidak diisi lengkap muncul pop up dan apabila form diisi lengkap muncul pop up dan direct ke index.html */
function terimainput() {
  var NamaDepan = document.forms['hubungi_kami']['NamaDepan'].value;
  var NamaBelakang = document.forms['hubungi_kami']['NamaBelakang'].value;
  var email = document.forms['hubungi_kami']['email'].value;
  var Pesan = document.forms['hubungi_kami']['Pesan'].value;

  if (!NamaDepan || !NamaBelakang || !email || !Pesan) {
    alert("Mohon lengkapi data yang ada !");
  } else if (NamaDepan && NamaBelakang && email && Pesan) {
    alert("Data berhasil disimpan")
    window.location = "index.html"
  }
}
