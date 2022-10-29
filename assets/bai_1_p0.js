function xoa(){
    alert('Dữ Liệu sẽ không tự động lưu lại!')
}
function tracuu1(){
    let a=parseInt(document.getElementById('duong').value);
    let a1=a%10;
    let a2=a%12;
    can = Array("Canh","Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Ký");
    chi = Array("Thân","Dậu","Tuất","Hợi","Tý","Sửu","Dần","Mão","Thìn","Tý","Ngọ","Mùi");
    document.getElementById('am').value = can[a1] + ' ' + chi[a2];
}