document.addEventListener("DOMContentLoaded", () => {
    const registroForm = document.getElementById('registroForm');

    if (registroForm) {
        registroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Ocultar todos los mensajes de error al iniciar la validación
            ocultarErrores();

            // CAPTURA DE VALORES
            const nombreInput = document.getElementById('nombre').value.trim();
            const telefonoInput = document.getElementById('telefono').value.trim();
            const fechaInput = document.getElementById('fechaNac').value;
            const correoInput = document.getElementById('correo').value.trim();
            const passInput = document.getElementById('password').value.trim();
            const telefonoFormateado = formatearTelefono(telefonoInput);

            let esValido = true;

            // 1. VALIDACIÓN DE NOMBRE (soloLetras)
            if (nombreInput === "" || !soloLetras(nombreInput)) {
                mostrarError('err-nombre');
                esValido = false;
            }

            // 2. VALIDACIÓN DE TELÉFONO (validarLongitud)
            if (telefonoInput === "" || !validarLongitud(telefonoInput, 10)) {
                mostrarError('err-telefono');
                esValido = false;
            }

            // 3. VALIDACIÓN DE FECHA DE NACIMIENTO (esMayorDeEdad)
            if (fechaInput === "" || !esMayorDeEdad(fechaInput)) {
                mostrarError('err-fechaNac');
                esValido = false;
            }

            // 4. VALIDACIÓN DE CORREO (validarCorreo)
            if (correoInput === "" || !validarCorreo(correoInput)) {
                mostrarError('err-correo');
                esValido = false;
            }

            // 5. VALIDACIÓN DE CONTRASEÑA (validarPassword)
            if (passInput === "" || !validarPassword(passInput)) {
                mostrarError('err-password');
                esValido = false;
            }

            // Si formatearTelefono devuelve "" significa que no tiene exactamente 10 dígitos
            if (telefonoInput === "" || telefonoFormateado === "") {
               mostrarError('err-telefono');
              esValido = false;
            }

            // SI TODO ES VÁLIDO: Usamos las funciones de formato y mostramos el modal
            if (esValido) {
                const nombreFormateado = capitalizarTexto(nombreInput);
                const telefonoFormateado = formatearTelefono(telefonoInput);

                const mensaje = `Usuario <strong>${nombreFormateado}</strong> registrado con éxito.<br>` +
                                `Teléfono: ${telefonoFormateado || 'N/A'}<br>` +
                                `Correo: ${correoInput}`;

                const modalMensaje = document.getElementById('modalMensaje');
                if (modalMensaje) {
                    modalMensaje.innerHTML = mensaje;
                }

                const modalResultado = document.getElementById('modalResultado');
                if (modalResultado) {
                    modalResultado.style.display = 'flex';
                }
            }
        });

        // Evento para cerrar la ventana modal del registro
        const btnCerrarModal = document.getElementById('btnCerrarModal');
        if (btnCerrarModal) {
            btnCerrarModal.addEventListener('click', () => {
                const modalResultado = document.getElementById('modalResultado');
                if (modalResultado) {
                    modalResultado.style.display = 'none';
                }
                registroForm.reset();
                ocultarErrores();
            });
        }
    }
});

// Funciones auxiliares para la interfaz
function mostrarError(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) el.style.display = 'block';
}

function ocultarErrores() {
    const errores = document.querySelectorAll('.error-msg');
    errores.forEach(err => err.style.display = 'none');
}