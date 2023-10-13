//a
let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
doDaiMang = arr.length
let i = 0
function capTongLa10(arr) {
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
            if( arr[i] + arr[i + 1] == 10){
                console.log(arr[i],  arr[i + 1])
            }
            i++
        }while ( arr[i] != undefined )
    }

}
capTongLa10(arr)
//b
arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14, 5]
function xoaPhanTuTrungNhau(arr) {
    let arrTrung = arr.sort()
    let  newArr = [arrTrung[0]]
    for (let i = 1; i < arrTrung.length; i++) {
        if (arrTrung[i] !== arrTrung[i - 1]) {
            newArr.push(arrTrung[i])
          }
    }
    return newArr
}
console.log(xoaPhanTuTrungNhau(arr))
    


