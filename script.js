
//1. Напишите функцию, которая берет код квадрата шахматной доски и возвращает его цвет.
//chessBoard("a1") ➞ "черный"
//chessBoard("e5") ➞ "черный"
//chessBoard("d1") ➞ "белый"

function chessBoard(str){
    var arrEven = ['a', 'c', 'e', 'g'];
    var arrNotEven = ['b', 'd', 'f', 'h'];
    
    if ((arrEven.indexOf(str[0]) != -1 && +str[1] % 2 == 0) || (arrNotEven.indexOf(str[0]) != -1 && +str[1] % 2 != 0)){
        return "белый";
    } else {
        return "черный";
    }
    
}

console.log(chessBoard("a1"));
console.log(chessBoard("e5"));
console.log(chessBoard("d1"));


//2. Учитывая целочисленный массив, преобразуйте этот массив в зеркальный.
//mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
//mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
//mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

function mirror(arr){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        arrResult.push(arr[i]);
    }
    
    for (var j = arr.length - 2; j >= 0; j--){
        arrResult.push(arr[j]);
    }
    
    return arrResult;
}

console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5]));
console.log(mirror([3, 5, 6, 7, 8]));


