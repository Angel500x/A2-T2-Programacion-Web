// las primera 6 funciones


 // Valida si un texto tiene un formato de correo electrónico válido.
function validarCorreo(correo) {
    if (!correo) return false;
    // Dominios permitidos (puedes agregar más a esta lista)
    const dominiosPermitidos = [
        'gmail.com',
        'outlook.com',
        'outlook.es',
        'hotmail.com',
        'yahoo.com',
        'icloud.com'
    ];
    // Validación de formato básico de correo
    const regexFormato = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
    const coincidencia = correo.toLowerCase().trim().match(regexFormato);
    if (!coincidencia) {
        return false; // No tiene estructura de correo
    }
    const dominioIngresado = coincidencia[1]; // Extrae lo que está después del @
    // Comprueba si el dominio ingresado está en la lista de permitidos
    return dominiosPermitidos.includes(dominioIngresado);
}


 // Valida que una cadena contenga exclusivamente letras.
function soloLetras(texto) {
    if (typeof texto !== 'string' || texto.trim() === '') return false;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

 // Valida que la representación en texto de un número no exceda una longitud máxima.
function validarLongitud(numero, maxLongitud) {
    if (numero === null || numero === undefined || isNaN(numero)) return false;
    const strNumero = String(numero).trim();
    return strNumero.length <= maxLongitud;
}

// Calcula la edad en años enteros a partir de una fecha de nacimiento.
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

// Determina si una persona es mayor o igual a 18 años a partir de su fecha de nacimiento.
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return !isNaN(edad) && edad >= 18;
}

// Valida la fortaleza de una contraseña.
function validarPassword(password) {
    if (typeof password !== 'string') return false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-#])[A-Za-z\d@$!\%*?&._\-#]{8,}$/;
    return regex.test(password);
}

// 2 FUNCIONES ADICIONALES

// Formatea un número o cadena a un formato telefónico si tiene EXACTAMENTE 10 dígitos
function formatearTelefono(telefono) {
    if (!telefono) return '';
    const limpiado = String(telefono).replace(/\D/g, '');
    if (limpiado.length !== 10) return '';
    return `(${limpiado.slice(0, 3)}) ${limpiado.slice(3, 6)}-${limpiado.slice(6)}`;
}

//Capitaliza un texto convirtiendo la primera letra de cada palabra a mayúscula.
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
