/*
    # v1.0 요구사항
    시스템은 1~10사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.

    # v1.1 요구사항

    종료시점에 시스템은 정답횟수와 오답횟수를 출력한다.

    # v1.2 요구사항

    덧셈이외에 뺄셈, 곱셈을 랜덤으로 추가 출제한다.

    # v1.3 요구사항

    난이도를 3가지 (상중하)로 설정하여
    상 난이도에서는 세자리수 사칙연산문제를 출제
    중 난이도는 두자리수
    하 난이도는 한자리수
*/

let correctAnswer = 0;
let wrongAnswer = 0;
let sum;
let codeName = ``;
let qNum = 1;

//난이도 설정
let level = 0;
let topLevel = 999 - 100 + 1; //상
let midLevel = 99 - 10 + 1;   //중
let bottomLevel = 9 - 1 + 1;  //하

let chanceAnswer = prompt(`난이도를 [상] [중] [하]로 입력하세요.`);
alert(`0을 입력하시면 게임이 종료됩니다.`);
if (chanceAnswer == `상`) {
  level = topLevel;
} else if (chanceAnswer == `중`) {
  level = midLevel;
} else {
  level = bottomLevel;
}

//게임 시작
while (true) {
  let num1 = Math.floor(Math.random() * level);
  let num2 = Math.floor(Math.random() * level);
  
  //난이도 설정
  if (level == topLevel) {
    num1 += 100;
    num2 += 100;
  } else if (level == midLevel) {
    num1 += 10;
    num2 += 10;
  } else {
    num1 += 1;
    num2 += 1;
  }

  //랜덤 부호 설정
  let codeNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (codeNum === 1) {
    codeName = `+`;
    sum = num1 + num2;
  } else if (codeNum === 2) {
    codeName = `-`;
    sum = num1 - num2;

    //같은 수가 나오면 랜덤 숫자 재생성
    if (num1 === num2) {
      continue;
    }
  } else {
    codeName = `*`;
    sum = num1 * num2;
  }
  //문제 조작
  if (num1 < num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  //문제 출제
  let setNum = +prompt(`Q${qNum++}. ${num1} ${codeName} ${num2} = ??`);

  if (setNum !== 0) {
    if (sum == setNum) {
      alert(`정답!`);
      correctAnswer++;
    } else {
      alert(`오답!`);
      wrongAnswer++;
    }
  } else {
    alert(`게임이 종료됐습니다.`);
    alert(`총 정답갯수 : ${correctAnswer} 오답갯수 : ${wrongAnswer}`);
    break;
  }
}
