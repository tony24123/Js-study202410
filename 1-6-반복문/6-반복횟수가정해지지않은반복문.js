// 1~100사이의 숫자 중 랜덤으로 숫자 하나를 생성하여
// 해당 숫자가 77이 나올때까지 반복해서 숫자를 생성한다.

// 랜덤 숫자 생성(난수 생성)
/*
    Math.random()       - 0.0 <= ~ < 1.0
    Math.random() * 100   - 0.0 <= ~ < 100.0
    Math.floor(Math.random() * 100) - 0<= ~ < 100


    소수점 처리 함수
    Math.ceill() - 올림 처리
    Math.floor() - 내림 처리
    Math.round() - 반올림 처리


    정수 난수 생성 공식 

    x이상 y이하의 정수 난수 생성법
    Math.floor(Math.random() * (y - x + 1)) + x;

*/



let randomNum = Math.floor(Math.random() * 100) + 1;

console.log(randomNum);
