const judul = document.getElementById("judul");
judul.innerHTML = "Hehe boy";

// uhh
const p1 = document.getElementsByClassName("p1")[0];
p1.style.backgroundColor = "red";
p1.style.color = "white";

// Attribute manip
const container = document.getElementById("container");
container.setAttribute("class", "container");
document.getElementsByClassName("container")[0].style.backgroundColor =
  "lightblue";
container.getAttribute("class");
container.removeAttribute("id");

// Buat element baru
const pBaru = document.createElement("p");
const pTeks = document.createTextNode("Haloo");
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(pTeks);
// Simpan pBaru di akhir section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);
pBaru.setAttribute("id", "p4");
pBaru.style.backgroundColor = "blue";
pBaru.style.color = "white";

const liBaru = document.createElement("li");
const liTeks = document.createTextNode("item baru");
liBaru.appendChild(liTeks);

const ul = document.getElementsByTagName("ul")[0];
const li2 = document.getElementsByTagName("li")[1];
ul.insertBefore(liBaru, li2);

// Remove child
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// Replace child
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const h2Teks = document.createTextNode("Ini judul baru");
h2Baru.appendChild(h2Teks);

sectionB.replaceChild("h2Baru", "p4");
