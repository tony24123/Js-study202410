

// 2의 배수를 출력하기
let result =``;
for (let i=2 ; i<=10; i+=2) {
    result += `${i} `;
}
console.log(`${result}`);




///1 ~ 100 사이 7의 배수이면서 14의 배수가 아닌 수 출력하기
let num=7;
let snum;
for (i=1; i<100;i+=2 ){
    snum = num * i
    if(snum<100){
        console.log(`${snum}`);        
    }
}



/// 7777 안에 있는 3의 배수 개수 알아내기

let sum = 0;
for (let i=3; i<=7777; i+=3) {
    sum++;        
}
console.log(`7777 안의 3의 배수는 ${sum}개입니다.`);

