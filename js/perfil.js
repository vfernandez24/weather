console.log("perfil.js conectado");

const showPerfil = () => {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlay").classList.add("visible");
    document.getElementById("perfil").classList.add("visible");
};

const closePerfil = () => {
    document.getElementById("body").style.overflowY = "auto";
    document.getElementById("overlay").classList.remove("visible");
    document.getElementById("perfil").classList.remove("visible");
};

const paginaPerfil = () => {
    const frase1 = document.getElementById('frase-1')
    const nombre1 = document.getElementById('nombre-1')
    const correo1 = document.getElementById('correo-1')
    const contraseña1 = document.getElementById('password-1')

    frase1.innerHTML = '¡Bienvenido de nuevo ' + localStorage.getItem('nombre') + '!';
    nombre1.innerHTML = localStorage.getItem('nombre');
    correo1.innerHTML = localStorage.getItem('email');
    contraseña1.innerHTML = localStorage.getItem('password');
}

const togglePassword = (numero) => {
    if (numero == '1') {
        document.getElementById('iPassword1').classList.toggle('fa-eye-slash')
        document.getElementById('iPassword1').classList.toggle('fa-eye')
        const passwordInput = document.getElementById('password1');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    } if (numero == '2') {
        document.getElementById('iPassword2').classList.toggle('fa-eye-slash')
        document.getElementById('iPassword2').classList.toggle('fa-eye')
        const passwordInput = document.getElementById('password2');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    }
}

const datosPerfil = (pagina) => {
    const checkBox = document.getElementById('acept');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
        
        if (pagina == 'iniciarSesion') { //? Protocolo para iniciar sesion
            console.log('iniciarSesion')
            guardarDatos() //*Guarda los datos en localStorage
        }

        if (pagina == 'registrar') { //? Protocolo para registrarse
            console.log('registrar')
            if (password1.value !== '' && password2.value !== '' && password1.value == password2.value && checkBox.checked) {
            guardarDatos() //*Guarda los datos en localStorage
        } else 
        {
            if ((password1.value == '' && password2.value == '') || password1.value !== password2.value) {
                let label1 = password1.parentElement;
                label1.classList.add('red')
                let label2 = password2.parentElement;
                label2.classList.add('red')
                console.log('passwordWrong')
            }
            if (!checkBox.checked) {
                let checkmark = document.getElementById('checkmark');
                checkmark.classList.add('red')
            } else {
                let checkmark = document.getElementById('checkmark');
                checkmark.classList.remove('red')
            }
        }
    }
}

const guardarDatos = () => {
    localStorage.setItem("cuentaActiva", 1)
    const nombre = document.getElementById('nombre').value
    localStorage.setItem('nombre', nombre)
    const correo = document.getElementById('email').value
    localStorage.setItem('email', correo)
    const contraseña = document.getElementById('password1').value
    localStorage.setItem('password', contraseña)
    window.location.href = "../index.html";
}

const cerrarSesion = () => {
    localStorage.setItem("cuentaActiva", 0)
    window.location.href = ""   
}

let cuentaActiva = localStorage.getItem("cuentaActiva");

if (cuentaActiva === null) {
    cuentaActiva = 0;
    localStorage.setItem("cuentaActiva", cuentaActiva);
}

if (cuentaActiva==0) {
    document.getElementById('siCuenta').style.display = 'none'
    document.getElementById('noCuenta').style.display = 'flex'
} else if (cuentaActiva==1) {
    document.getElementById('noCuenta').style.display = 'none'
    document.getElementById('siCuenta').style.display = 'block'
}

paginaPerfil()