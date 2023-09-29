//Bai 1: a)
function kienTra_Am_Duong(n) {
    if (n<0) {
        console.log('So am')
    }
    else if (n>0) {
        console.log('So duong')
    }
    else {
        console.log('La so 0')
    }
    return n
}
let kq1 = kienTra_Am_Duong(11)
console.log(kq1)
let kq2 = kienTra_Am_Duong(-10)
console.log(kq2)
console.log('=============================')
//Bai 1: b)
function kienTra_Chan_Le(n) {
    if (n%2==0) {
        console.log('So nay la so chan')
    }
    else {
        console.log('So nay la so le')
    return n
    }
}
let kiemtra = kienTra_Chan_Le(11)
console.log(kiemtra)
console.log('=============================')
//Bai 1: c)
function kiemtra_SoLonNhat(a, b, c) {
    max = a
    if (max < b) {
        max = b
    }
    if (max < c) {
        max = c
    }
    return max
}
let so_Lon_Nhat = kiemtra_SoLonNhat(1, 5, -4)
console.log(so_Lon_Nhat)
console.log('=============================')
//Bai 1: d)
function namNhuan(n) {
    if (n%4==0 && n%100!=0) {
        console.log('Nam',n,'la nam nhuan')
    }
    else if(n%400==0) {
        console.log('Nam',n,'la nam nhuan')
    }
    else {
        console.log('Nam',n,'khong la nam nhuan')
    }
    return n
}
let soSanh_1 = namNhuan(2005)
let soSanh_2 = namNhuan(2800)
let soSanh_3 = namNhuan(2200)
let soSanh_4 = namNhuan(1945)
let soSanh_5 = namNhuan(2008)
let soSanh_6 = namNhuan(2000)
console.log('=============================')
//Bai 1: e)
function Nguyenam_Phuam(n) {
    if (n == 'u' || n == 'o' || n == 'e' || n == 'a' || n == 'i') {
        console.log('kí tự '+ n + ' là nguyên âm')
    }
    else {
        console.log('kí tự '+ n + ' là phụ âm')
    }
    return n
}
let phu_hay_nguyen_1 = Nguyenam_Phuam('o')
let phu_hay_nguyen_2 = Nguyenam_Phuam('c')
console.log('=============================')
//Bai 2: a)
function Ham_tim_nghiem(a, b, c) {
    let delta = b*b-4*a*c
    if (delta<0){
        console.log('Phuong trinh vo nghiem')
    } 
    else if (delta=0){
        return `Puong trinh co nghiem kep x1 = x2 = ${-b/2*a} `
    }
    else{
        const x1 = (-b + Math.sqrt(delta) / 2*a)
        const x2 = (-b - Math.sqrt(delta) / 2*a)
        return [x1, x2]
    }
}
let ketqua = Ham_tim_nghiem(1, 2, 1)
console.log(ketqua)
console.log('=============================')
//Bai 2: d)
function tinhTienDienThoai(n) {
    let phi_co_dinh = 25000
    if (n > 200){
        tien_tra = n * 600 + (n - 50) * 400 + (n - 200) * 200 + phi_co_dinh
    }
    else if (50 > n <= 200){
        tien_tra = n * 600 + (n - 50) * 400 + phi_co_dinh
    }
    else {
        tien_tra = n * 600 + phi_co_dinh
    }
    return `Tien phai tra = ${tien_tra}`
}
let ket_qua = tinhTienDienThoai(200)
console.log(ket_qua)