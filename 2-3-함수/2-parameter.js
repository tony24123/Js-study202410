//매개 변수(parameter) : 함수가 실행할때 외부에서 전달받는 값

//언어를 알려주면 그 언어로 인사해주는 함수
//기본 값 한국어
function greet(language = `한국어`) {
  switch (language) {
    case `한국어`:
      console.log(`안녕하세요!`);
      break;
    case `영어`:
      console.log(`hello`);
      break;
    case `일본어`:
      console.log(`콘니치와`);
      break;
    default:
      console.log(`우가우가`);
  }
}

//함수에 전달하는 값 : 인수(argument)
greet(`영어`);
greet();

console.log(`==================`);

//x~y 사이의 랜덤 정수를 생성

function makeRandomInteger(x, y) {
  let rn = Math.floor(Math.random() * (y - x + 1)) + x;
  console.log(`랜덤정수:${rn}`);
  return rn;
}

let rn = makeRandomInteger(1, 3);

if (rn === 1) {
  console.log(`랜덤정수 1입니다.`);
}

//매개변수 없는 함수
function infiniteHello() {
  for (let i = 0; i < 5; i++) 
    console.log(`hello`);
}

infiniteHello();
