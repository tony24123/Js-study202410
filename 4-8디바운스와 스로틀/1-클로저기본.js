//일급함수 : 함수를 값으로 표현하여 다른 함수에 전달하거나
//           함수의 리턴으로 함수를 보낼 수 있는 케이스

function calculate() {
  console.log("calculate call!");
  //중첩함수 , 헬퍼함수
  function add(n1, n2) {
    console.log("add call!");

    return n1 + n2;
  }
  return add;
}

const result = calculate();
console.log(`result : ${result}`);

const r1 = result(10, 20);
console.log(`r1: ${r1}`);

console.log(`====================`);

// function foo () {
//     function bar () {
//         return 10;
//     }
//     return bar;
// }
const foo = () => () => 10;

const r2 = foo()();
console.log(`r2 : ${r2}`);
