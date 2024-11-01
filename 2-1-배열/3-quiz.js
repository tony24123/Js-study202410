/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

let numList = [];
let sum = 0;
let num;

while (true) {
  let str = prompt(`숫자를 입력하시오, 그만이라고 입력하시면 멈춥니다.`);
  if (str === `그만`) {
    break;
  }  
  num = Number(str);// 문자를 숫자로 형변환
  
  // 숫자라면 배열에 저장 , 숫자가 아니면 다시 입력받기
  if (!isNaN(num)) {
    numList.push(num);
    sum += num;    
  } else {
    alert(`숫자를 다시 입력해주세요.`);
    continue;
  }
}

alert(`
    숫자배열 : ${numList}
    숫자 총합 : ${sum}
    `);


/* 강사님 코드    
// 숫자들을 쌓아놓을 배열
let numbers = [];

while (numbers.length < 6) {
  // if (numbers.length === 6) break;
  // 사용자에게 숫자를 입력받음
  let num = prompt('숫자를 입력하세요.\n그만두려면 \'그만\'이라고 입력하세요!');

  if (num === '그만') break;

  // 배열에 해당 숫자를 저장
  numbers.push(+num);
} // end while

// 배열 총합 구하기
let total = 0; // 총합 누적 변수
for (let n of numbers) {
  total += n;
}
alert(`입력한 숫자 목록 [${numbers}]
입력한 숫자 총합: ${total}`);
*/
