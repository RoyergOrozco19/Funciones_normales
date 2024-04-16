function invertString(string){
    let invCadena = "";
    
    for (let i = 3; i>= 0; i--){
        invCadena += string[i];
    }
        return  invCadena;
    }

    console.log(invertString("Hola"));
