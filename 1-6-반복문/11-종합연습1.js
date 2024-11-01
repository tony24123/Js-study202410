//마지막 기회처리에 의문 ;;



let num = Math.floor(Math.random() * 100) + 1; //정수 난수 설정


//최솟값, 최댓값
let minNum = 1;
let maxNum = 100;

//난이도 설정
let chance;
while (true) {
  let chanceAnswer = prompt(
    `난이도를 설정하세요! 상 [기회 : 3] , 중 [기회 : 6] , 하 [기회 : 10] `
  );
  if (chanceAnswer === `상`) {
    chance = 3;
  } else if (chanceAnswer === `중`) {
    chance = 6;
  } else if (chanceAnswer === `하`) {
    chance = 10;
  } else {
    alert("난이도를 다시 설정하시오.");
    continue;
  }

  break; //while의 break
}

let countDown = chance; //기회 체크

//게임 판독
for (let i = chance - 1; i >= 0; i--) {
  let setnum = +prompt(`숫자를 입력하세요! [${minNum}~${maxNum}]`);

  //범위 밖의 값을 입력했을때 다시 숫자입력으로 돌아감
  //continue를 사용해서 밑에 countDown이 들어가지 않음
  if (setnum < minNum || setnum > maxNum) {
    alert(`범위 안에 값을 입력하세요.`);
    i++;
    continue;
  }
  countDown--;
  
  if (countDown === 0) {
    break;
  } else {
    if (setnum > num) {
      alert(`down`);
      maxNum = setnum - 1;
    } else if (setnum < num) {
      alert(`up`);
      minNum = setnum + 1;
    } else if (setnum === num) {
      alert(`정답입니다`);
      break;
    } else {
      alert(`제대로 된 값이 아닙니다. 다시 입력하세요`);
      i++;
      countDown++;
      continue;
    }
    alert(`${countDown}번의 기회가 남았습니다.`);
  }  
}
alert(`기회가 모두 소진되었습니다. 정답은 ${num}이었습니다!`);
