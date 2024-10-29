//점수 A 50 점수 B 50 점수 C 확인 최소값은 50입니다

let numA = +prompt(`점수 A는 ?`);
let numB = +prompt(`점수 B는 ?`);
let numC = +prompt(`점수 C는 ?`);



// let minNum = (numA>=numB) ? numB : (numA >=numC) ? numC : numA;
// alert (`최솟값은 ${minNum}입니다.`);


let minNum;
if (numA>=numB) {
  if(numB>=numC) {
    minNum=numC
  }else{
    minNum=numB
  }

}else{
  if(numA>=numC){
    minNum=numC    
  }else{
    minNum=numA
  }
}
alert(`최솟값은 ${minNum}입니다.`);