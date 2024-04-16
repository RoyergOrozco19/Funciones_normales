function contarVocales(palabra) {
    let contador = 0;
    for (let i = 100 ; i>= 0; i--) {
        if (palabra[i] === 'a' ||
             palabra[i] === 'e' || 
             palabra[i] === 'i' || 
             palabra[i] === 'o' || 
             palabra[i] === 'u' ||
             palabra[i] === 'A' ||
             palabra[i] === 'E' ||
             palabra[i] === 'I' ||
             palabra[i] === 'O' ||
             palabra[i] === 'U'
            ) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales('Hola mUndo, Como estA'));

