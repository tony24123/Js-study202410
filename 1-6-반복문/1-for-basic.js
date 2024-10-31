console.log(`1번 학생 안녕하세요!`);
console.log(`2번 학생 안녕하세요!`);
console.log(`3번 학생 안녕하세요!`);
console.log(`4번 학생 안녕하세요!`);
console.log(`5번 학생 안녕하세요!`);

let n = 1;

for (n=0; n<5 ; n++){
console.log(`${n+1}번 학생 안녕하세요!`);
}

console.log(`2X1 =2`);





// 구구단
for (let i=0;i<10;i++){
  for(let j=0;j<10;j++){
  console.log(`${i} x ${j} = ${i*j}`);
  }
  console.log(``);  
}

// 1 ~ 10 까지의 누적합 == 55
let total = 0;

for (let i=0; i<=10; i++){
  total += i;
}
console.log(`0부터 10까지의 총 합은 ${total}입니다`);


