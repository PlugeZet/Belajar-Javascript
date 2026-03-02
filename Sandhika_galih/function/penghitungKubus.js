let hasil;
function hitungKubus(sisiA, sisiB){
    let volA = sisiA * sisiA * sisiA;
    let volB = sisiB * sisiB * sisiB;
    hasil = volA + volB;
    return hasil;
}
hitungKubus(10, 4);
console.log(hasil);