/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

-객체의 프로퍼티가 있는지 여부 확인하는 문법은 검색해보기
*/

let userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};

let idx;
let inputPassword;

while (true) {
  let login = +prompt(`1 : 로그인\n2 : 회원가입`);
  //로그인
  if (login === 1) {
    let inputId = prompt(`아이디를 입력해주세요.`);

    let flag = false;
    //입력된 아이디가 있는지 확인
    for (let user of userInfo.userList) {
      if (inputId === user.account) {
        flag = true;
        idx = userInfo.userList.indexOf(user);
      }
    }
    // if문에 걸렸는지 체크
    if (flag === true) {
      inputPassword = prompt(`비밀번호를 입력해주세요.`);
    } else {
      alert(`아이디가 틀렸습니다.`);
      continue;
    }
    //입력 비밀번호 정답 구분
    if (inputPassword === userInfo.userList[idx].password) {
      alert("로그인에 성공하였습니다.");
      break;
    } else {
      alert(`비밀번호가 틀렸습니다.`);
      continue;
    }
  } else if (login === 2) {
    let createAccount = prompt(`새로 만들 아이디를 입력해주세요.`);

    let flag = false;
    //입력된 아이디가 있는지 확인
    for (let user of userInfo.userList) {
      if (createAccount === user.account) {
        flag = true;
      }
    }

    if (flag === true) {
      alert(`이미 가입되어 있는 아이디입니다.`);
      continue;
    }
    //가입이 가능한 아이디일시
    alert(`사용 가능한 아이디입니다.`);
    let createPassword = prompt(`비밀번호를 입력해주세요`);
    let createUserName = prompt(`사용자 이름을 입력해주세요`);
  } else {
    alert(`1 또는 2를 입력해주세요.`);
  }
}
