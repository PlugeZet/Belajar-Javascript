var noAngkot = 1;
var AngkotBeroperasi = 1;
var jmlhAngkot = 1;

for(noAngkot = 1; noAngkot <= 10; noAngkot++){
    if(noAngkot < 7 && noAngkot !== 5){
        console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
    }else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log("Angkot no " + noAngkot + " sedang lembur");
    }else{
        console.log("Angkot no " + noAngkot + " tidak beroperasi");
    }
}