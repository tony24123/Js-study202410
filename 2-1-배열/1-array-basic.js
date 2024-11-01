let numbers = [10, 20, 30, 40 , 50 , 60];
console.log(`numbers: `, numbers);
console.log(typeof numbers);


console.log(numbers[1]); // 배열 20 출력

console.log(numbers[2]); // 배열 30 출력

console.log(numbers[2] ** 2); // 배열 30 ** 2 출력

numbers[0] = 999; // 배열의 요소 (element) 수정

numbers[3]++; // 40이 41로 수정됨

console.log(numbers);

//배열의 총 요소(데이터) 수
console.log(numbers.length); // 요소 4개

//배열의 마지막 요소 접근 
console.log(numbers[numbers.length-  1]); //마지막 번호 - 1

//배열의 순회 : 전체 데이터를 순차적으로 접근
console.log(`====================`);


for (let i = 0; i < numbers.length; i++) {
    console.log(`${i+1}번째 데이터: ${numbers[i]}`);
    
}
 // 배열의 순회 전용 반복문
 console.log(`======================`);
 let weekDays = [`월` ,`화` ,`수` ,`목` ,`금` ,`토` ,`일` ];


 //for ~ of
//배열 전체를 돌릴때 유용 , 부분적은 불가

for (let day of weekDays) {
    console.log(`${day}요일`);    
}

 
//부분적일때 사용
// for (let i = 0; i < weekDays.length; i++) {
//     if (i % 2 ===0) {
//         console.log(`${weekDays[i]}요일`);           
//     }
// }

//배열 변수 이름 관례 : 복수형, -List 어미
let hobbies = [`스키`, `요리`];
let hobbyList = [`스키`, `요리`];
let hobbyArray;
 




