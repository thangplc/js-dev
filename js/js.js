// BIẾN
//đặt tên biến(kieu string): var a = 1 ;
// var hoTen = 'thang';
// console.log('ho ten = ', hoTen);
// console.log(typeof(a));

// hoTen = 12;
// console.log(typeof(hoTen));
// kieu so
// var so = 13;
// console.log('số = ', so);
// console.log(typeof(so));

// kieu boolean
// var gioiTinh = false;
// console.log("giới tính = ", gioiTinh);
// console.log(typeof(gioiTinh));

// null: chua khoi tao gia tri, có trong bộ nhớ
// var temp = null;
// console.log("temp = ", temp);
// console.log(typeof(temp));

// undefined: 
// var tuoi;
// console.log('tuoi = ', tuoi);
// console.log(typeof(tuoi));

// nguyên tắc đặt tên biến: k đc bắt đầu = số, ký tự đặc biệt, không khoảng trắng, phải có ý nghĩa, không trùng với tên hệ thống js, đặt theo kiểu camelCase
// Dynamic type: kieu du liệu linh hoạt


// TOÁN TỬ: =, - , *, /
// a = 1;
// b = --a;
// console.log(b);

// b = 2;
// c = '9';
// d = '1';
// console.log(a + b);
// console.log(c + d);
// console.log(c ** d);
// console.log(typeof(c * d));


// HẰNG SỐ: không thể gán giá trị cho nó 
// const PI = 3.141592653589793238462643383279;
// console.log(PI);
// const NAM_SINH; error

// var a = parseInt(prompt("Nhap a: "));
// var b = parseInt(prompt("Nhap b: "));
// function Sum() {
//     var a = document.getElementById('a');
//     var b = document.getElementById('b');
//     // var sum = document.setE
//     document.getElementById('sum').innerHTML = Sum(a, b);

// }
// tinh canh huyen
// var canhGocVuong1 = parseInt(prompt("Nhap canh goc vuong 1: "));
// console.log("Canh goc vuong 1: ", canhGocVuong1);
// var canhGocVuong2 = parseInt(prompt("Nhap canh goc vuong 2: "));
// console.log("Canh goc vuong 2: ", canhGocVuong2);
// document.writeln("Canh huyen = " + Math.sqrt(Math.pow(canhGocVuong1, 2) + Math.pow(canhGocVuong2, 2)));


// constant
const TEN_PHIM = 'Lat Mat';
const GIA_VE_NGUOI_LON = 90000;
const GIA_VE_TRE_EM = 45000;

//input
var sl_VeNguoiLon = parseInt(prompt("Nhap so luong ve nguoi lon ban duoc: "));
var sl_VeTreEm = parseInt(prompt("Nhap so luong ve tre em ba duoc: "));
var phanTram = parseInt(prompt("Nhap vao phan tram tu thien: "));

//Proccesing
var tongDoanhThu = GIA_VE_NGUOI_LON * sl_VeNguoiLon + GIA_VE_TRE_EM * sl_VeTreEm;
var tienTuThien = (phanTram * tongDoanhThu) / 100;
var tienConLai = tongDoanhThu - tienTuThien;

// Output
document.write("Ten phim : " + TEN_PHIM);
document.write("<br>");

document.write("So ve da ban: " + (sl_VeNguoiLon + sl_VeTreEm));
document.write("<br>");

document.write("Doanh thu: " + tongDoanhThu + " VND");
document.write("<br>");

document.write("Trich % tu thien: " + phanTram + "%");
document.write("<br>");

document.write("Tien tu thien: " + tienTuThien + " VND");
document.write("<br>");

document.write("Tong tien sau khi tru: " + tienConLai + " VND");