document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Ocultar mensajes de error previos
            ocultarErroresLogin();

            const correoInput = document.getElementById('correoLogin').value.trim();
            const passInput = document.getElementById('passLogin').value.trim();

            let esValido = true;

            // 1. VALIDACIÓN DE CORREO
            if (correoInput === "" || !validarCorreo(correoInput)) {
                mostrarErrorLogin('err-correoLogin');
                esValido = false;
            }

            // 2. VALIDACIÓN DE CONTRASEÑA
            if (passInput === "" || !validarPassword(passInput)) {
                mostrarErrorLogin('err-passLogin');
                esValido = false;
            }

            // MOSTRAR MODAL
            if (esValido) {
                const modalLogin = document.getElementById('modalLogin');
                if (modalLogin) {
                    modalLogin.style.display = 'flex';
                }
            }
        });

        // cerrar la ventana modal
        const btnCerrar = document.getElementById('btnCerrarLogin');
        if (btnCerrar) {
            btnCerrar.addEventListener('click', () => {
                const modalLogin = document.getElementById('modalLogin');
                if (modalLogin) {
                    modalLogin.style.display = 'none';
                }
                loginForm.reset();
                ocultarErroresLogin();
            });
        }
    }
});

// controlar los errores
function mostrarErrorLogin(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) el.style.display = 'block';
}

function ocultarErroresLogin() {
    const errores = document.querySelectorAll('#loginForm .error-msg');
    errores.forEach(err => err.style.display = 'none');
}