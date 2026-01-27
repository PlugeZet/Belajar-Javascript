let angka_1,angka_2,hasil;
document.getElementById("button").onclick = function(){
    angka_1 = document.getElementById("angka_1").valueAsNumber;
    angka_2 = document.getElementById("angka_2").valueAsNumber;
    hasil = angka_1 + angka_2;
    document.getElementById("hasil").textContent = hasil;
}