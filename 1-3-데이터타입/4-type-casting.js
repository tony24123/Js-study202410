let num = 20;
let address = '서울시';
let result = '10';

//타입이 다르면 연산불가
//암묵적 형 변환(implicit type casting)

//숫자와 문자의 덧셈은 숫자를 자동으로 문자로 변경
console.log(num + result);


//덧셈 제외 산술연산은 문자를 숫자로 변경하고 값이 나오면 출력
// 값이 나오지 않으면 NAM
console.log(num - result);



const operating = num + result;
console.log(typeof operating);

const n1 = '10';
const n2 = 20;

// Number(n1) -> * 문자를 숫자로 형변환 명시적형변환 
const n3 = Number(n1) + n2;
console.log(`n3: ${n3}`);
