/**
 * 함수(functions)
 * - 작업의 묶음
 * - 코드를 반복해서 작성하는 비효율을 줄인다.
 */


// 함수 선언문
function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 5));

var result = multiply(435, 24); // 10440

console.log(result);

// 함수 표현식
var multiply = function calc (a, b) { //calc를 넣게되어서 콘솔로그를 하게 되면 오류가 뜬다.
    return a * b;
};

console.log(multiply(10,5));
console.log(calc(10,5));




/**
 * 변수 키워드 - var, let, const
 */
var a = 10;

while (true) {
    var a = 1000;
    break;
}

console.log(a);

//호이스팅 - 스코프 안에 있는 선언들을 모두 스코프의 최상위로 끌어올리는 것

console.log(word);

word = "happy"; // 이상태로 하면 에러가 뜬다

console.log(word);

var word; // 그러나 이렇게 되면 undefined가 된다. 밑에 있는걸 끌어올려서 변수 키워드 사용 가능



// let - 중복이 불가능한 변수선언, 키워드 생략이 불가능하고 호이스팅이 가능함

let word;
console.log(word);
word = "happy"; 
console.log(word);
let word; // 이러면 에러가 뜸. 그래서 위에 올려야함 

let a = 10;

while (true) {
    let a = 1000;
    break;
}

console.log(a);


// const const는 초기화와 동시에 선언이 이루어져야 한다.

//const b; //초기값이 할당되지 않아서 에러가 남

const b = 2;

console.log(b);

b = 3; 

// const PI = 3.14;
// const TIME_DATE = 3.14;

// const로 선언된 변수에 할당된 객체
const student = {
    grade: 1,
    class : 3
}; 

//student.grade = 2;

console.log(student); // class : 3, grade : 2

student = {
    num: 20123,
    grade: 2
}
console.log(student); // num : 20123, grade : 2

// 화살표 함수 function 키워드 대신 화살표 =>를 사용해 함수를 간략히 정의

let plus1 = (a, b) => {
    return a + b;
};

let plus2 = (a, b) => a + b;
console.log(plus(2,3));


let print = word => {
    console.log(word);
};
print("Hello!");



let myfunc = () => {
    return 1;
}

console.log(myfunc());
