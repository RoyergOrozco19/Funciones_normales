function mComunDivisor(n1, n2){
    let  i = 1;
    for(let mCd= n2; n1 % n2; n1= mCd ){
        i=mCd;
    } 
    return n1;
}
console.log(mComunDivisor(12,24));