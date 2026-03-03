var penumpang = [];

var tambahPenumpang = function (namaPenumpang) {
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        console.log(namaPenumpang + " sudah ada di dalam!");
      } else if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (i === penumpang.length - 1) {
        if (penumpang.length < 13) {
          penumpang.push(namaPenumpang);
          return penumpang;
        } else {
          console.log("Bus sudah penuh!");
          return penumpang;
        }
    }
}
}
};

var hapusPenumpang = function(namaPenumpang){
    if(penumpang.length === 0){
        console.log("Bus masih kosong!");
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] === namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            } else {
                console.log(namaPenumpang + " tidak ada di dalam bus!");
                return penumpang;
            }
        }
    }
};

tambahPenumpang("Wowok");
tambahPenumpang("kontol");

hapusPenumpang("Wowok");
hapusPenumpang("Wowok");

console.log(penumpang.join(" - "));
