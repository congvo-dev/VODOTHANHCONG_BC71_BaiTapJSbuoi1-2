var usd = 23500;

function doiTien() {
    var sousd = document.getElementById("usd").value;
    console.log(sousd);
    var USDtoVND = sousd * usd;
    var x = new Intl.NumberFormat('vn-VN').format(USDtoVND);
    
    document.getElementById("raTien").innerHTML= x;
};