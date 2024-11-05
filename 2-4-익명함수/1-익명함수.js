// 익명함수 (anonymous function) : 다른 함수에 함수를 전달하거나
// 함수가 함수를 리턴할 때 사용

// 함수 선언식 (function declaration) : 호출보다 선언이 밑에
// 있어도 실행됨
multiply(3, 4);
function multiply(n1, n2) {
  console.log("곱셈 함수!");
  return n1 * n2;
}

// 함수 표현식 (function expression)
const add = function (n1, n2) {
  console.log("덧셈 함수!");
  return n1 + n2;
};

const r1 = add(10, 20);
console.log(`r1: ${r1}`);

console.log(`=================`);
const arr = [
  10,
  `hello`,
  true,
  [1, 2, 3],
  { age: 3, name: `영희` },
  function () {
    console.log(`배열안의 함수!`);
  },
];

console.log(arr[3][1]);

console.log(arr[4].name);

arr[5]();