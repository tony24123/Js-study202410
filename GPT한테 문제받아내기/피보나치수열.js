


let bfNum=0;
let afNum=0;
let total = ``;
let totalSum=0;

let num= +prompt(`양의 정수를 입력해주세요.`);

for(let i=0;i<num;i++){
    
    let sum = 0;
    sum = bfNum + afNum;
    totalSum +=sum
    total += `${sum} `;
    if( i % 2 == 1){
        bfNum = sum;
    }else{
        afNum = sum;
    }
    
    if (total === `0 `){
        bfNum += 1
    };
}
alert(`${total} 피보나치 수열의 총 합은:${totalSum}입니다.`);

