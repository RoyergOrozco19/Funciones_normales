function calPotencia (n1, n2){
    if(!Number.isInteger(n1) || !Number.isInteger(n2)){
        return "Error, ingrese un numero entero";
    }   
}
if (n2 === 0)
    {
        return 1;
}
if (n1===0 && n2<0){
    return "Error, no se puede realizar la operación"
}
let resultado = 1;

for(let i = 0; i < Math.abs(n2); i++){
    resultado *= n1;
}
return n1 < 0? 1/ resultado : resultado;
console .log(calPotencia(2, 3));
    