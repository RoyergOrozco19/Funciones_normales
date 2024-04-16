function sumarDigitos(numero) {
    let suma = 0;
    let numeroStr = numero.toString();

    for (let i = 0; i < numeroStr.length; i++) {
        suma += parseInt(numeroStr.charAt(i));
    }

    return suma;
}

console.log(sumarDigitos(12345))