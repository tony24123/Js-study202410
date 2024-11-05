
// 요리 레시피를 출력하는 함수

//함수 파라미터에는 값만 전달 가능
//코드를 전달할 수는 없음
//코드를 함수로 싸면 함수값으로 전달 가능
function makeCook(recipeName, recipeFunction) {
    console.log('#### 나만의 맛도리 레시피 ####');
    console.log(`!!! 요리 이름: ${recipeName}`);  
    
    
    // 핵심 레시피 내용
    // 함수 사용자가 원하는 커스텀 코드
    recipeFunction();    
    
    console.log(`~~~ 참 쉽죠? 여러분도 따라해보세요!! ~~~`);
    console.log('=======================================');
  }
  
  makeCook('대파청양고추라면', function () {
    console.log(`# step1 : 물을 500ml넣고 끓이세요!`);
    console.log(`# step2 : 물이 끓으면 면과 스프를 넣으세요`);
    console.log(`# step3 : 2분 후 계란을 넣으세요`);
    console.log(`# step4 : 1분 후 파와 청양고추를 썰어서 넣으세요`);
    console.log(`# step5 : 30초간 뜸을 들이세요`);    
  });
  makeCook('BLT샌드위치', function () {
    console.log(`# step1 : 베이컨 굽기!`);
    console.log(`# step2 : 상추 썰기`);
    console.log(`# step3 : 참치 다지기`);
    console.log(`# step4 : 빵 짜르기`);
    console.log(`# step5 : 샌드위치 만들기`);
  });