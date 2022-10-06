function validar() {
    let validado = true
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    let msgUsername = document.getElementById('msgUsername');
    let msgPassword = document.getElementById('msgPassword');

    if (username.value != 'admin') {
        msgUsername.innerHTML = 'Usuario incorrecto';
        validado = false;
        console.log(username);
    }
    if (password.value!= '1234') {
        msgPassword.innerHTML = 'Contraseña incorrecto';
        validado = false;
        console.log(password);
    }
    if (validado == true) {
        alert(`Ingresado`);
    }
    return validado;
}