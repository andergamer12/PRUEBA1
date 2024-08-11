// auth.js
import { auth } from './firebase-config.js';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.addEventListener('DOMContentLoaded', function() {
    const githubButton = document.getElementById('github-login-button');
    const googleButton = document.getElementById('google-login-button');
    const facebookButton = document.getElementById('facebook-login-button');

    if (githubButton) githubButton.addEventListener('click', iniciarSesionConGitHub);
    if (googleButton) googleButton.addEventListener('click', iniciarSesionConGoogle);
    if (facebookButton) facebookButton.addEventListener('click', iniciarSesionConFacebook);
});

function iniciarSesionConGitHub() {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Inicio de sesión con GitHub exitoso:", user);
            window.location.href = 'principal.html';
        }).catch((error) => {
            const errorMessage = error.message;
           
            console.error("Error en el inicio de sesión con GitHub:", errorMessage);
        });
}

function iniciarSesionConGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Inicio de sesión con Google exitoso:", user);
            window.location.href = 'principal.html';
        }).catch((error) => {
            const errorMessage = error.message;
            
            console.error("Error en el inicio de sesión con Google:", errorMessage);
        });
}

function iniciarSesionConFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Inicio de sesión con Facebook exitoso:", user);
            window.location.href = 'principal.html';
        }).catch((error) => {
            const errorMessage = error.message;
            
            console.error("Error en el inicio de sesión con Facebook:", errorMessage);
        });
}

function registrar() {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registro de usuario exitoso:", user);
                alert("Usuario registrado satisfactoriamente!");
                window.location.href = 'index.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error en el registro:", errorMessage);
            });
    });
}

function ingreso() {
    document.getElementById('loginForm1').addEventListener('submit', function(e) {
        e.preventDefault();
        const email1 = document.getElementById('email1').value;
        const password1 = document.getElementById('password1').value;

        signInWithEmailAndPassword(auth, email1, password1)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Inicio de sesión exitoso:", user);
                window.location.href = 'principal.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.error("Error en el inicio de sesión:", errorMessage);
            });
    });
}

function recupPassword() {
    document.getElementById('recupPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email2').value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Correo de recuperación enviado con éxito");
                alert("Correo enviado satisfactoriamente");
                window.location.href = 'index.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("El correo no se ha enviado");
                console.error("Error al enviar el correo de recuperación:", errorMessage);
            });
    });
}

function nomusu() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const welcomeMessageDiv = document.querySelector('div');
            if (welcomeMessageDiv) {
                welcomeMessageDiv.innerHTML += ` <strong>${user.displayName || user.email}</strong>`;
            }
        } else {
            window.location.href = 'index.html';
        }
    });
}

function cerrarSesion() {
    signOut(auth)
        .then(() => {
            console.log("Sesión cerrada con éxito");
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Error al cerrar sesión:", error.message);
        });
}

window.cerrarSesion = cerrarSesion;
window.nomusu = nomusu;
window.registrar = registrar;
window.ingreso = ingreso;
window.recupPassword = recupPassword;

export { iniciarSesionConGitHub, iniciarSesionConGoogle, iniciarSesionConFacebook, cerrarSesion, nomusu, registrar, ingreso, recupPassword };
