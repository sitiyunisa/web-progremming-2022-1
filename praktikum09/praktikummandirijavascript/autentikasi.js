function Login() {
    const username = 'billa2017';
    const password = 'billayns';

    var cekUsername = document.getElementById('username').value;
    var cekPassword = document.getElementById('password').value;

    if (username=="juned" && password=="123"){
        alert("Selamat anda berhasil login");
        }
    } 
    else {
        console.log('tidak di isi!');

        var getErr = document.getElementById("error");
        getErr.style.display = 'block';

    }
}

function Close() {
    var getErr = document.getElementById("error");
    getErr.style.display = 'none';
}