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
// let i = 0
// while (arr[i] != undefined) {
//     console.log('Gia tri mang %s = %s', i, arr[i])
//     i++
// }
// //bd)
// let tong = 0
// let tbc = 0
// while (arr[i] !== undefined) {
//     tbc = tong / i
//     tong = tong + arr[i]
//     i++
// }
// console.log('Tong bang = ', tong)
// console.log('Trung binh cong bang = ', tbc)

// //c)
// let phanTuLonNhat = arr[0]
// let phanTuNhoNhat = arr[0]
// i = 0
// while (arr[i] !== undefined) {
//     if (phanTuLonNhat < arr[i]) {
//         phanTuLonNhat = arr[i]
//     }
//     if (phanTuNhoNhat > arr[i]) {
//         phanTuNhoNhat = arr[i]
//     }
//     i++
// }
// console.log('Phan tu lon nhat: ', phanTuLonNhat)
// console.log('Phan tu nho nhat: ', phanTuNhoNhat)
// //e)
// i = 0
// let j = arr.length - 1
// let temp = 0
// while ( i< j) {
//     i++; j--
//     temp = arr[i]
//     arr[j] = temp
//     arr[i] = arr[j]
// }
// // console.log(arr)
// //f)
//     i = 0
//     const soLanXuatHienn = {}
//     while ( arr[i] != undefined ){
//         const phanTuTrongArr = arr[i]
//         soLanXuatHienn[phanTuTrongArr] = (soLanXuatHienn[phanTuTrongArr] || 0) + 1
//         i++
//     }
//     for (const key in soLanXuatHienn) {
//         console.log(`So ${key} xuat hien ${soLanXuatHienn[key]} lan`)
//     } 
// //g)
// i = arr.length - 1
// while(arr[i] !== undefined) {
//     arr[i + 1] = arr[i]
//     i = i - 1
// }
// arr[0] = 117
// console.log('==>',arr)
// console.log(arr.length)
// //h)
// function mangTangDan(arr){
//     let checkTangDan = true
//     i = 0
//     while (i< arr.length) {
//         if (arr[i] > arr[i + 1]) {
//             checkTangDan = false
//         }
//         i++
//     }
//     if (checkTangDan == true){
//         console.log('Mang tang dan')
//     }
//     else{console.log('Mang khong tang dan')}
// }
// mangTangDan(arr)
// //i)
i = 0
function dumamay(arr){
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
        console.log(arr)
    }
}
dumamay(arr)
// //k
// i = 0
// while(arr[i] != undefined) {
//     if (arr[i]%2==0) {
//         console.log('So chan', arr[i])
//     }
//     i++
// }
//Vong lap do While:
// arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// i = 0
// do {
//     console.log('Gia tri mang %s = %s', i, arr[i])
//     i++
// }while (arr[i] !== undefined)
// b,d))
// let tong = 0
// let tbc = 0
// i = 0
// do {
//     tbc = tong / i 
//     tong = tong + arr[i]
//     i++
//     console.log('Tong bang = ', tong)
//     console.log('Trung binh cong bang = ', tbc)
// }while (arr[i] !== undefined)
// c))
// let phanTuLonNhat = arr[0]
// let phanTuNhoNhat = arr[0]
// i = 0
// do {
//     if (phanTuLonNhat < arr[i]) {
//         phanTuLonNhat = arr[i]
//     }
//     if (phanTuNhoNhat > arr[i]) {
//         phanTuNhoNhat = arr[i]
//     }
//     i++
// }while (arr[i] !== undefined)
// console.log('Phan tu lon nhat: ', phanTuLonNhat)
// console.log('Phan tu nho nhat: ', phanTuNhoNhat)





