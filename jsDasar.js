let namaDepan = "mulyono";
let namaBelakang = "widodo";

// Slice
let sliced1 = namaDepan.slice(0,1);
let sliced2 = namaDepan.slice(1,7);
sliced1 = sliced1.toUpperCase();
namaDepan = sliced1.concat(sliced2);

// Concat
let namaLengkap = namaDepan.concat(' ', namaBelakang);
console.log(namaLengkap);

// Substring
let namaLengkap_0_4 = namaLengkap.substring(0,7);
let namaLengkap_5_12 = namaLengkap.slice(8,15);

console.log(namaLengkap_0_4);
console.log(namaLengkap_5_12);

// Replace
let namaBaru = namaLengkap.replace("Mulyono", "Joko");
console.log(namaBaru);

// ParseInt (Extract number)
let dataString = "10";
console.log(typeof dataString);
let dataNumber = parseInt(dataString);
console.log(typeof dataNumber);

let dataString2 = "10.678345";
console.log(typeof dataString);
let dataFloat = parseFloat(dataString2);
console.log(typeof dataFloat);