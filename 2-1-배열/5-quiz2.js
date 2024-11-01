/*
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

let groupList = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (groupList.length > 0) {
  let imputMember = prompt(`${groupList}\n삭제 할 멤버 이름을 입력하세요.`);

  //해당 멤버가 몇번 인덱스인지 색출
  let idx = groupList.indexOf(imputMember);
  // 해당 멤버가 없으면 다시 입력
  if (idx === -1) {
    alert(`${imputMember}라는 멤버는 없습니다. 다시 입력해주세요.`);
    continue;
  }
  //해당 멤버 삭제   
  groupList.splice(idx, 1);
  if (groupList.length === 0) {
    alert(`멤버가 모두 삭제되었습니다.`);
  } else {
    alert(`남은 멤버 : ${groupList}`);
  }
}
