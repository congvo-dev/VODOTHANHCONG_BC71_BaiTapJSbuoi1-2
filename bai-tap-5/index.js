function tinhTong() {
    var number = document.getElementById("kySo").value;
    var hangChuc = Math.floor(number/10);
    console.log(hangChuc);
    var donVi = number % 10;
    console.log(donVi);
    var tongSo = hangChuc + donVi;
    document.getElementById("result").innerHTML = tongSo;
}