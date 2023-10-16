//Bai 1
function tinhGTBT(){
    let x = 5, y = 1, z = 2
    ketqua = 3*x*x*x*x - 5*x*y*y*y + 6*z*y*y - 7 / 2* z*z*z*z
    console.log('==> ', ketqua)
}
tinhGTBT()
console.log('=============================')
//Bai 2
let arr = [5, 1, -421, 23, 50, 17, -11, 72, -97, 103, -504, 201]
let phanTuLonNhat = arr[0]
let phanTuNhoNhat = arr[0]
let i = 0
while (arr[i] !== undefined) {
    if (phanTuLonNhat < arr[i]) {
        phanTuLonNhat = arr[i]
    }
    if (phanTuNhoNhat > arr[i]) {
        phanTuNhoNhat = arr[i]
    }
    i++
}
console.log('Phan tu lon nhat: ', phanTuLonNhat)
console.log('Phan tu nho nhat: ', phanTuNhoNhat)
arr = [5, 1, -421, 23, 50, 17, -11, 72, -97, 103, -504, 201]
doDaiMang = arr.length
i = 0
function capTongLa16(arr) {
    while(arr[i] != undefined) {
        let j = i+ 1
        while (arr[j] != undefined) {
            if (arr[i] > arr[j]) {
                let tam = arr[i]
                arr[i] = arr[j]
                arr[j] = tam
            }
            j = j + 1
        }
        i = i + 1
        do{
            if( arr[i] + arr[i + 1] == 16){
                console.log(arr[i],  arr[i + 1])
            }
            i++
        }while ( arr[i] != undefined )
    }

}
capTongLa16(arr)
console.log('=============================')

//Bai 3
function PhanLoai_BMI(cannang, chieucao){
    BMI = cannang/(chieucao*chieucao)
    if (BMI < 17)
        {console.log('Nguoi nay bi om')}
else if (17<= BMI && BMI <= 25)
        {console.log('Nguoi nay bình thường')}
else
        {console.log('Nguoi nay bi thua can')}
    console.log(BMI)
}

let guyễn_Văn_A = PhanLoai_BMI(80, 1.7)
let guyễn_Văn_B = PhanLoai_BMI(63, 1.65)
console.log('=============================')

//Bai 4
let x1, x2
let a = 1, b = -7, c = 12
let Delta = b * b - 4 * a * c
console.log(Delta)
if (Delta < 0){console.log('Phuong trinh vo nghiem')}
else if (Delta == 0){
    x1 = x2 = -b / (2 * a)
    console.log(`Phuong trinh co nghiem kep: x1 = ${x1}, x2 = ${x2}`)
}
else{
    x1 = (-b + Math.sqrt(Delta)) / (2 * a)
    x2 = (-b - Math.sqrt(Delta)) / (2 * a)
    console.log('Phuong trinh co 2 nghiem phan biet: x1 = %s, x2 = %s', x1, x2)
}
