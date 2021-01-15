function terimainput() {
    var email = document.forms['masuk']['email'].value;
    var password = document.forms['masuk']['password'].value;

    if (!email || !password) {
        alert("Mohon lengkapi data yang ada !");
    } else if (email && password) {
        window.location = "index.html"
    }
}

function lupa() {
    var lupa = confirm("Apakah anda yakin lupa password anda?")

    if (lupa) {
        window.location = "hubungikami.html"
    } else {
        window.location = "masuk.html"
    }
}
