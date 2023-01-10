document.getElementById("login").addEventListener('click', function(){

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    console.log(uname);
    console.log(pass);
    if (uname == "admin" && pass == "admin"){
        location.href = "dashboard.html";
    } else {
        alert("Login Gagal");
    }
})