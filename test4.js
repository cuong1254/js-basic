//Bai:
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

//Vong lap for:
// let doDaiMang = arr.length
// for (let i = 0; i < doDaiMang; i = i + 1){
//     console.log('Gia tri mang %s = %s', i, arr[i])
// }
// //Dao nguoc mang va coi so lan xuat hien trong mang
// let arr1 = []
// let j = 0
// for (let i = doDaiMang - 1; i>=0; i--) {
//     console.log('arr[%s] =', i, arr[i])
//     arr1[j] = arr[i]
//     j++
// }
// console.log(arr1)
// soLanXuatHien = {}
// for (let i = 0; i<doDaiMang; i++) {
//     const phanTuthu1 = arr[i]
//     soLanXuatHien[phanTuthu1] = (soLanXuatHien[phanTuthu1] || 0) + 1
// }
// for (const key in soLanXuatHien) {
//     console.log(`So ${key} xuat hien ${soLanXuatHien[key]} lan`)
// }

//Vong lap while:
let i = 0
while (arr[i] != undefined) {
    console.log('Gia tri mang %s = %s', i, arr[i])
    i++
}
//bd)
let tong = 0
let tbc = 0
while (arr[i] !== undefined) {
    tbc = tong / i
    tong = tong + arr[i]
    i++
}
console.log('Tong bang = ', tong)
console.log('Trung binh cong bang = ', tbc)

//c)
let phanTuLonNhat = arr[0]
let phanTuNhoNhat = arr[0]
i = 0
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
//e)
i = 0
let j = arr.length - 1
let temp = 0
while ( i< j) {
    i++; j--
    temp = arr[i]
    arr[j] = temp
    arr[i] = arr[j]
}
console.log(arr)






