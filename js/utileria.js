/**
// PARTE OBLIGATORIA (6 FUNCIONES)

/**
 * Valida si un texto tiene un formato de correo electrónico válido.
 * @param {string} correo - Correo electrónico a validar.
 * @returns {boolean} true si es válido, false en caso contrario.
 */
function validarCorreo(correo) {
    if (typeof correo !== 'string') return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo.trim());
}

/**
 * Valida que una cadena contenga exclusivamente letras (mayúsculas, minúsculas, espacios y vocales acentuadas/ñ).
 * @param {string} texto - Texto a evaluar.
 * @returns {boolean} true si contiene solo letras, false en caso contrario.
 */
function soloLetras(texto) {
    if (typeof texto !== 'string' || texto.trim() === '') return false;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * Valida que la representación en texto de un número no exceda una longitud máxima de caracteres.
 * @param {number|string} numero - Número o cadena numérica.
 * @param {number} maxLongitud - Longitud máxima permitida.
 * @returns {boolean} true si es numérico y su longitud es menor o igual al límite.
 */
function validarLongitud(numero, maxLongitud) {
    if (numero === null || numero === undefined || isNaN(numero)) return false;
    const strNumero = String(numero).trim();
    return strNumero.length <= maxLongitud;
}

/**
 * Calcula la edad en años enteros a partir de una fecha de nacimiento.
 * @param {string|Date} fechaNacimiento - Fecha en formato AAAA-MM-DD o de tipo Date.
 * @returns {number} Edad en años cumplidos o NaN si la fecha es inválida.
 */
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    if (isNaN(nacimiento.getTime())) return NaN;

    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

/**
 * Determina si una persona es mayor o igual a 18 años a partir de su fecha de nacimiento.
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento.
 * @returns {boolean} true si tiene 18 años o más, false en caso contrario.
 */
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return !isNaN(edad) && edad >= 18;
}

/**
 * Valida la fortaleza de una contraseña.
 * Criterios: Mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial.
 * @param {string} password - Contraseña a evaluar.
 * @returns {boolean} true si cumple con todos los criterios.
 */
function validarPassword(password) {
    if (typeof password !== 'string') return false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-#])[A-Za-z\d@$!\%*?&._\-#]{8,}$/;
    return regex.test(password);
}


// ==========================================
// SECCIÓN LIBRE (2 FUNCIONES ADICIONALES)
// ==========================================

/**
 * Formatea un número o cadena a un formato telefónico de 10 dígitos (Ej: (123) 456-7890).
 * Resuelve el problema de estandarizar la captura de teléfonos en formularios.
 * @param {string|number} telefono - Número de teléfono de 10 dígitos.
 * @returns {string} Teléfono formateado o cadena vacía si es inválido.
 */
function formatearTelefono(telefono) {
    if (!telefono) return '';
    const limpiado = String(telefono).replace(/\D/g, '');
    if (limpiado.length !== 10) return '';
    return `(${limpiado.slice(0, 3)}) ${limpiado.slice(3, 6)}-${limpiado.slice(6)}`;
}

/**
 * Capitaliza un texto convirtiendo la primera letra de cada palabra a mayúscula.
 * Resuelve el problema de guardar nombres propios desordenados (ej. "juan carlos" -> "Juan Carlos").
 * @param {string} texto - Texto a capitalizar.
 * @returns {string} Texto formateado con cada palabra iniciada en mayúscula.
 */
function capitalizarTexto(texto) {
    if (typeof texto !== 'string' || texto.trim() === '') return '';
    return texto
        .trim()
        .toLowerCase()
        .split(' ')
        .filter(palabra => palabra.length > 0)
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}