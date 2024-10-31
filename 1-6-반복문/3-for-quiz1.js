// 2의 제곱수 출력

let num = +prompt(`양의 정수를 입력하시오.`);

let result = ''
for (let i=1; i < num; i++){   
    if(i**2 < num){
        result += `${2**i} `
    }
}
alert(`${num}보다 작은 2의제곱수는 ${result}입니다.`)   