// DOM selection

// document.getElementById(''); - Element
const judul = document.getElementById('judul');
// object.atribute.property = 'value';
judul.style.color = 'blue';
judul.style.backgroundColor = "gray";
judul.innerHTML = "Kontol cicak";

// document.getElementsByTagName(''); - HTMLCollection
const p = document.getElementsByTagName("p");
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = "red";
};

// document.getElementsByClassName(''); - HTMLCollection
const li = document.getElementsByClassName('list')[0];
li.style.backgroundColor = "yellow";

// document.querySelector('parent child'); - Element
const p4 = document.querySelector("#b p");
p4.style.color = "white";

const li2 = document.querySelector('section#b ul.list li:nth-child(2)');
li2.style.fontSize = '30px';

// document.querySelectorAll(''); - Nodelist
const section = document.querySelectorAll("section");
for(let i = 0; i < p.length; i++){
    section[i].style.backgroundColor = "orange";
};

// Root node
const sectiona = document.getElementById("a");
const p2 = sectiona.querySelector("p");
p2.style.backgroundColor = "purple";
