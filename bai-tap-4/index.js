function tinh() {
    var d = document.getElementById("d").value *1;
    console.log(d);
    var r = document.getElementById("r").value *1;
    console.log(r);
    var chuVi = (d + r) * 2;
    console.log(chuVi);
    var dienTich = d * r;
    document.getElementById("result").innerHTML = `Chu vi: ${chuVi} , diện tích: ${dienTich}`;
}