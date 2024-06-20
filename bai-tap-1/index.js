var luongNgayTag = document.getElementById("luongNgay");
var NgayTag = document.getElementById("Ngay");

function tinhluong() {
    var luongNgayvalue = luongNgayTag.value;
    var Ngayvalue = NgayTag.value;
    var tongLuong = luongNgayvalue * Ngayvalue;
    document.getElementById("Luong").innerText = `Tiền lương: ${tongLuong}`;
}