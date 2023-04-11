// 문자열 선언
var greeting = "Hello!";
var farewell = 'Bye';
var myname = '김테킷'

var sentence = greeting + '\n' + myname;
// console.log(sentence);

// console.log(farewell + 2);


// 이스케이프 시퀀스
// var sentence = greeting + '\n' + myname;
// var sentence = greeting + '\t' + myname;
// var sentence = greeting + '\'' + myname;
// var sentence = greeting + "\"" + myname;
var sentence = greeting + "\\" + myname;
// console.log(sentence);


// 템플릿 리터럴(ES6)
// 멀티라인 텍스트 작업 가능, 이스케이프 시퀀스 필요x
// var a = `안녕하세요!`;
// var a = `안녕하세요!
// 여러분:)`;
// console.log(a); // 안녕하세요!(엔터키) 여러분:)

// var price = 1000;
// var b = '이 물건은 ' + price + '원 입니다.';
// console.log(b);

// var c = `이 물건은 ${price}원 입니다. `; // 표기 방법이 간단해짐
// console.log(c);

// var d = `이 물건은 ${200+450}원 입니다.`;
// console.log(d);





// 문자열 함수
var abc = "I am Iron man";

// indexOf
// // 문자열의 특정 값이 시작되는 위치
// console.log(abc.indexOf("man")); // 10
// console.log(abc.indexOf("I")); // 0

// slice
// // 문자열의 일부를 잘라낼 때
// console.log(abc.slice(0, 4));

// toUpperCase(), toLowerCase()
console.log(abc.toUpperCase()); //대문자 출력
console.log(abc.toLowerCase()); //소문자 출력



// startWith(), endWith()
var efg = 'This is my car.';
console.log(efg.startsWith('Th')); //true
console.log(efg.startsWith('th')); //false
// 대소문자가 똑같아야한다.
console.log(efg.endsWith('car.')); //true



// includes()
console.log(efg.includes('is')); //true