let namaDepan, namaBelakang, namaLengkap;
document.getElementById("merge_button").onclick = function(){
    namaDepan = document.getElementById("nama_depan").value;
    namaBelakang = document.getElementById("nama_belakang").value;

    let slice1 = namaDepan.slice(0,1).toUpperCase();
    let slice2 = namaDepan.slice(1);
    namaDepan = slice1 + slice2;
    namaLengkap = namaDepan + ' ' + namaBelakang;
    
    document.getElementById("nama_lengkap").textContent = namaLengkap;
}
