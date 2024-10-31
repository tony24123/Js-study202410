// 입력 값의 약수 구하기

let num = +prompt("값을 입력하시오.");
let result = ''
for (i=0; i<=num ; i++){
    if (num % i == 0){
        result +=  `${i} `
    }
}
alert (`${num}의 약수는 ${result}입니다`)