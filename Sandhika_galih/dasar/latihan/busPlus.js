// blueprint bus
function bus(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    console.log(namaPenumpang + " naik ke dalam bus");
    return this.penumpang;
  }

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Bus masih kosong!");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
            this.penumpang[i] = undefined;
            this.kas += bayar;
            console.log(namaPenumpang + " turun dan membayar ongkos sebesar " + bayar + " rupiah");
            return [this.penumpang, this.kas];
        } else {
          console.log("Tidak ada yang namanya " + namaPenumpang + " di Bus!");
      }
    }
  }
}

// buat bus dengan blueprint tadi
bus_1 = new bus("Jokowi", ["Jambi", "Lampung"], [], 0);

//
bus_1.penumpangNaik("mulyono");
bus_1.penumpangTurun("mulyono", 30000);
bus_1.penumpangTurun("hehe", 10000);

console.log(bus_1.kas);
