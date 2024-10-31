let a = +prompt(`a값을 입력하시오.`);

let b = +prompt(`b값을 입력하시오.`);

let distence = (a-b) > 0 ? (a-b) : (a-b)*(-1);

let newA;
let newB;

if (a>=b){
  newA = a - distence;  
}else{
  newA = a + distence;
}

if (b>=a){
  newB = b - distence;  
}else{
  newB = b + distence;
}

alert(`a: ${newA}, b: ${newB}`);
