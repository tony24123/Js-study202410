
let foodList = [`닭꼬치`, `볶음밥`, `족발`, `파스타`];

//indexOf() : 배열의 특정 요소가 몇 번 인덱스에 있는지 알려줌 , 값이 없으면 -1, num
let idx = foodList.indexOf(`볶음밥123`);
console.log(`index : ${idx}`);

//음식 중에 족발을 찾아서 보쌈으로 수정 
foodList[foodList.indexOf(`족발`)] = `보쌈`;

//includes() : 배열에 특정 요소가 있는지 유무 확인 , boolean
let flag = foodList.includes(`파스타`);  //있으면 true , 없으면 false
console.log(`flag: ${flag}`);

// slice() : 배열을 원하는 만큼 분할해서 복사배열로 리턴
let numbers = [0,1,2,3,4,5,6];

let slicedNumbers = numbers.slice(1,3); //1번 인덱스부터 3번 미만 1,2 타겟
console.log(`slicedNumbers: `, slicedNumbers); // 복사본이기 때문에 원본 훼손 x
console.log(`numbers:`, numbers); 

let copy1 = numbers.slice(3); // end 생략시 끝까지 분할
console.log(copy1);

let copy2 = numbers.slice(); // 둘다 생략시 처음부터 끝까지 -> 전체복제_
console.log(copy2);

// splice() : 배열의 요소 추가 삭제 ( 중간에서 작업 가능 )
// 주의사항 : 배열 원본이 손상됨 ( 복사 후 작업 추천 )
console.log(`========================`);

console.log(foodList);

foodList.splice(2 , 1); //2번 index부터 1개를 지움
console.log(foodList);

foodList.splice(0 , 1 , `마라탕`); //0번 자리에 한개를 지우고 그 자리에 마라탕을 넣는다
console.log(foodList);

//중간 삽입 가능
foodList.splice(2,0,'짜장면'); //2번 자리에서 0개 지우고 짜장면 넣는다 -> 2번자리에 짜장면 삽입
console.log(foodList);


