// auth.js
import { auth } from './firebase-config.js';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.addEventListener('DOMContentLoaded', function() {
    const githubButton = document.getElementById('github-login-button');
    const googleButton = document.getElementById('google-login-button');
    const facebookButton = document.getElementById('facebook-login-button');

    githubButton.addEventListener('click', iniciarSesionConGitHub);
    googleButton.addEventListener('click', iniciarSesionConGoogle);
    facebookButton.addEventListener('click', iniciarSesionConFacebook);
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

export { iniciarSesionConGitHub, iniciarSesionConGoogle, iniciarSesionConFacebook };
