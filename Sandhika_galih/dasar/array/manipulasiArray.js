// method pada array
var myArray = ["Hidup jokowi", 67, true, "hehe"];
var j = ", ";

// 1. length
console.log(myArray.length);

// 2. join
console.log(myArray.join(j));

// 3. push & pop
// push = memasukan
myArray.push("Jawir keren");
console.log(myArray.join(j));

// pop = menghapus
myArray.pop();
console.log(myArray.join(j));

// 4. unshift & shift
// unshift = menambah di element pertama
myArray.unshift("nasgor goreng");
console.log(myArray.join(j));

// shift = menghapus element pertama
myArray.shift();
console.log(myArray.join(j));

// 5. splice
// splice(mulai dari, hapus berapa, argument 1, argument 2, ...);
myArray.splice(myArray.length, 0, "wowok love sawit", 69);
console.log(myArray.join(j));

// 6. slice
myArray.splice(0, 3);
console.log(myArray.join(j));

// 7. forEach
var angka = [1,2,3,4,5,6,7,8,9];
angka.forEach(function(e){
    console.log("angka ke-" + e);
});

var orang = ["joko", "budi", "asep", "toni"];
orang.forEach(function(e, i){
    console.log("orang ke-" + i + " adalah " + e);
});

// 8. map
var angka1 = [1,2,3,4,5,6,7,8,9,10];
var angka2 = angka1.map(function(e){
    return e * 2;
});
console.log(angka2.join(j));

// 9. sort
var acak = [32,646,3,5,9,4,56,2];

// mengurutkan dari angka pertama
acak.sort();
console.log(acak.join(j));

// urutan yg ini bener tapi aku ga ngerti
acak.sort(function(a, b){return a - b;});
console.log(acak.join(j));

// 10. filter & find
var acak = [32,64,3,5,9,4,6,2];

var angkaFilter = acak.filter(function(e){return e >= 5;});
console.log(angkaFilter.join(j));

var angkaFind = acak.find(function(e){return e > 10;})
console.log(angkaFind);