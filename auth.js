// auth.js
import { auth } from './firebase-config.js';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

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
            alert("Error al iniciar sesión con GitHub: " + errorMessage);
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
            alert("Error al iniciar sesión con Google: " + errorMessage);
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
            alert("Error al iniciar sesión con Facebook: " + errorMessage);
            console.error("Error en el inicio de sesión con Facebook:", errorMessage);
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
            window.location.href = 'index.html'; // Redirigir al login si no está autenticado
        }
    });
}

function cerrarSesion() {
    signOut(auth)
        .then(() => {
            console.log("Sesión cerrada con éxito");
            window.location.href = 'index.html'; // Redirigir al login después de cerrar sesión
        })
        .catch((error) => {
            console.error("Error al cerrar sesión:", error.message);
        });
}

window.cerrarSesion = cerrarSesion;
window.nomusu = nomusu;

export { iniciarSesionConGitHub, iniciarSesionConGoogle, iniciarSesionConFacebook, cerrarSesion, nomusu };
