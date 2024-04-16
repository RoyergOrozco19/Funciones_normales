function numPrim(numero) {
    let Num2 = true;

    for (let num3 = 2; num3 < numero; num3++) {
        if (numero % num3 === 0) {
            Num2 = false;
            break;
        }
    }

    return Num2;
}

console.log(numPrim(7));
