function finonacci(numero){
    let Serie = 0

    for (let i = 1; i <= numero;) {
        Serie+= i;
    }

    return Serie;
}

console.log(finonacci(4));
