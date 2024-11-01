//멤버 수정

let groupList = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
let idx;

while (groupList.length > 0) {
  let choiceMenu = prompt(
    `현재 멤버:${groupList}\n1 (새로운 멤버 추가)\n2 (멤버 삭제)`
  );

  //멤버추가

  if (choiceMenu === `1`) {
    let inputMember = prompt("추가할 멤버를 입력하세요");
    groupList.push(inputMember);
  }
  //멤버 삭제
  else if (choiceMenu === `2`) {
    //존재하지 않는 멤버 입력시 반복
    while (true) {
      let deleteMember = prompt(
        `현재 멤버:${groupList}\n삭제할 멤버를 입력하세요`
      );

      idx = groupList.indexOf(deleteMember);
      if (idx !== -1) {
        break;
      }
      alert(`존재하지 않는 멤버입니다. 다시 입력해주세요`);
    }
    //멤버 삭제
    groupList.splice(idx, 1);
    if (groupList.length === 0) {
      alert(`멤버가 모두 삭제되었습니다.`);
      break;
    } else {
      alert(`남은 멤버 : ${groupList}`);
    }
  } else {
    alert("잘못된 입력입니다. 다시 입력해주세요.");
  }
}
