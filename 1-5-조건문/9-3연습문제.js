let food = `소고기`;

switch (food) { 
  case `피자`:
    console.log(`${food}는 이탈리아 요리입니다`);
    break;
  case `타코`:
    console.log(`${food}는 멕시코 요리입니다`);
    break;
  case `스시`:
    console.log(`${food}는 일본 요리입니다`);
    break;
  case `바게트`:
    console.log(`${food}는 프랑스 요리입니다`);  
    break;

  default:
    console.log(`${food}에 대한 정보가 없습니다`);
}