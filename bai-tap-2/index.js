
var so1Tag = document.getElementById("so1");
var so2Tag = document.getElementById("so2");
var so3Tag = document.getElementById("so3");
var so4Tag = document.getElementById("so4");
var so5Tag = document.getElementById("so5");



function tinhtrungbinh() {
    var so1value = so1Tag.value*1;
    console.log(so1value);
    var so2value = so2Tag.value*1;
    var so3value = so3Tag.value*1;
    var so4value = so4Tag.value*1;
    var so5value = so5Tag.value*1;
    console.log(so5value);
    var trungBinh =  (so1value + so2value + so3value + so4value +so5value) / 5;
    document.getElementById("trungBinh").innerHTML = `Giá trị trung bình của 5 số trên: ${trungBinh}`;
}