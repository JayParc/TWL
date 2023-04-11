// 반복문(loop)

// 1. for


// for (var i = 0; i < 10; i++) {
//     console.log(i); // 0 1 2 3 4 5 6 7 8 9
// }

// for (var i = 10; i > 0; i--) {
//     console.log(i); // 10 9 8 7 6 5 4 3 2 1
// }

// for (var i = 0; i < 10; i++) {
//     for(var j = 0; j<10; j++){
//         console.log(`${i}-${j}`); // 0-0 0-1 0-2 0-3 0-4 ... 9-6 9-7 9-8 9-9
//     }
// }

// 2. while

// var flag =  10;

// while (flag > 0) {
//     console.log(flag); // 숫자가 계속 출력된다. CPU를 과부하를 걸게 한다. 무한히 반복되는 상황을 막아줘야한다.
//     flag--; // 10 9 8 7 6 5 4 3 2 1
// }

// do... while

var flag = 10;

do {
    console.log(flag);
    flag--;
} while(flag < 0);