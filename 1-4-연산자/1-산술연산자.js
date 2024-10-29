 
 //js는 나눗셈을 수행할 때 실수 나눗셈을 수행 (소수점이 도출됨)
console.log(27/5);

// 나눗셈의 몫만 구하기 
console.log(Math.floor(27/5));

//나머지 연산 
console.log(27%5);

// 뒤에 숫자가 더 크면 앞의 숫자가 그대로 나머지 몫은 0
console.log(4%10);

console.log(10%0); //NaN - 못나눔

//제곱 연산 (ES6+)
console.log(2 ** 4);


//증감 연산자 
let x = 3;
x++; //숫자 1 증가
++x;
x--;
--x;
console.log(`x: ${x}`);

// 전위 연산 , 후위 연산 
let n1 = 10;
let n2 = n1++;
console.log(`n1: ${n1}, n2: ${n2}`);

let n3 = 10;
let n4 = ++n3;
console.log(`n1: ${n3}, n2: ${n4}`);


let myNum = 5;
myNum += 3;
myNum -= 6;
console.log(`mynNum:${myNum}`);
let xx = 3;
 xx += 1;
 xx++;






