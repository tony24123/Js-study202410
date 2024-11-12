const $numbers = document.getElementById("numbers");
const $finish = document.getElementById("finish");

const $up = document.getElementById("up");
const $down = document.getElementById("down");

const $begin = document.getElementById('begin');
const $end = document.getElementById('end');

let minNum = 1;
let maxNum = 100;

//랜덤 숫자 정답
const answerNum = Math.floor(Math.random() * 100 + 1);
console.log(answerNum);

//게임 판 생성
function changeBall() {
  for (let ballNum = minNum; ballNum <= maxNum; ballNum++) {
    const $newDiv = document.createElement("div");
    $newDiv.classList.add("icon");
    $newDiv.textContent = ballNum;
    $numbers.append($newDiv);
    $begin.textContent = minNum;
    $end.textContent = maxNum;
  }
}

changeBall();

//공 선택
$numbers.addEventListener("click", (e) => {

  // e.target이 숫자 요소(icon 클래스)를 클릭한 경우만 실행
  if (!e.target.classList.contains("icon")) {
    return; // icon 클래스가 아닌 경우 함수 종료
  }

  console.log(e.target.textContent);
  //targetNum : 선택한 공의 숫자값
  let targetNum = +e.target.textContent;
  //정답 판별
  if (targetNum === answerNum) {
    $finish.classList.add("show"); //정답 애니메이션
    e.target.id = 'move';
    
  } else if (targetNum < answerNum) { //정답보다 작을때
    $up.classList.add("selected");
    minNum = targetNum + 1; //최솟값 변경
    $numbers.innerHTML = ""; //지우기

    changeBall(); 
    $down.classList.remove("selected");
  } else{ //정답보다 클때
    $down.classList.add("selected");
    maxNum = targetNum - 1; //최댓값 변경
    $numbers.innerHTML = ""; //지우기

    changeBall();
    $up.classList.remove("selected");
  }
});
