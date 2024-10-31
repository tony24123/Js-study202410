let num = 12345;
let reversedNum = 0;

while (num > 0) {
    let lastDigit = num % 10; // 마지막 자리 추출
    reversedNum = reversedNum * 10 + lastDigit; // 뒤집은 숫자에 추가
    num = Math.floor(num / 10); // 마지막 자리 제거
}

console.log(reversedNum); // 결과는 54321