const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2023,
    value: 120000,
  },
];
// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
const totalDejeon = traders
  .filter((n) => n.year === 2023 && n.trader.city === `대전`)
  .reduce((acc, curr) => acc + curr.value, 0);
console.log(totalDejeon);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

const traderListInBusan = traders
  .filter((n) => n.trader.city === `부산`)
  .map((n) => n.trader.name);
console.log(traderListInBusan);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

const topTrader = traders.sort((a, b) => b.value - a.value);
console.log(topTrader[0].trader, topTrader[0].value);

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
// const resultObjByCity = {};
// const seoulList = traders
//   .filter((n) => n.trader.city === `서울`)
//   .reduce((acc, curr) => acc + curr.value, 0);
// // console.log(seoulList);

// const busanList = traders
//   .filter((n) => n.trader.city === `부산`)
//   .reduce((acc, curr) => acc + curr.value, 0);
// // console.log(busanList);

// resultObjByCity["서울"] = seoulList;
// resultObjByCity["부산"] = busanList;

// console.log(resultObjByCity);

// 결과 집합을 생성
// const totalByCity = {};

// for (const trs of traders) {
//   const city = trs.trader.city;
//   // 도시이름은 city에 저장되어 있고 도시 이름이 객체의 키가되어야 함
//   // 조건에 따라 처음 등장한 도시는 객체에 추가하고
//   // 처음 등장한 도시의 거래금액은 그대로 저장
//   // 이미 한번 등장했던 도시는 객체에 추가되는 것이 아니라
//   // 거래금액을 수정해야 함.

//   // dog = { age: 3 }  ->   dog.age => 3 // dog.name => undefined
//   if (totalByCity[city] === undefined) { // 이 도시는 아직 저장되지 않음
//     totalByCity[city] = trs.value;
//   } else { // 이미 저장이 된 도시
//     totalByCity[city] += trs.value;
//   }
// }
// console.log(totalByCity);

// const totalByCity = traders.reduce((cityObj, trs)=>{
//     const city = trs.trader.city;
//     if (cityObj[city] === undefined){
//         cityObj[city] = trs.value;
//     }else {
//         cityObj[city] += trs.value;
//     }
//     return cityObj;
// },{});

const totalByCity = traders.reduce((cityObj, trs) => {
  const city = trs.trader.city;
  cityObj[city] = (cityObj[city] || 0) + trs.value;
  return cityObj;
}, {});

console.log(totalByCity);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
console.log(`++++++++++++++++++++++++++++++++`);

const tradeValueUp70000 = traders.filter((n) => n.value >= 700000);
// console.log(tradeValueUp70000);

let tradeValueUp70000List = {};
for (let tradeList of tradeValueUp70000) {
    if (tradeList.year === 2022) {
        // 이미 2022 키에 데이터가 있는지 확인하고, 있으면 추가하고 없으면 새로운 배열 생성
        if (!tradeValueUp70000List[2022]) {
            tradeValueUp70000List[2022] = [];
        }
        tradeValueUp70000List[2022].push(tradeList);
    } else {
        // 2023 키에 대해 동일한 로직 적용
        if (!tradeValueUp70000List[2023]) {
            tradeValueUp70000List[2023] = [];
        }
        tradeValueUp70000List[2023].push(tradeList);
    }
}
console.log(JSON.stringify(tradeValueUp70000List, null, 2));

// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
/*
         

    
*/

console.log(`#############################`);

// 총액과 횟수를 가진 객체 생성
const trsDataByName = traders.reduce((sumCountObj, trs) => { 
  const name = trs.trader.name;
  if (sumCountObj[name] === undefined) { // 이 이름이 처음 등장했다면
    sumCountObj[name] = { sum: trs.value, count: 1 };
  } else { // 이미 저장된 이름
    sumCountObj[name].sum += trs.value;
    sumCountObj[name].count++;
  }
  return sumCountObj;
}, {});

console.log('=====================');
// console.log(trsDataByName);

/*
  {
    '김철수': 6200000 / 5,
    '박영희': 1250000 / 2
  }
*/

// 평균을 구해서 다시 맵핑
// 객체 전용 반복문 for ~ in
// const ooo = { a: 1, b: 2, c: 3, d: 4 };
for (const key in trsDataByName) {
  trsDataByName[key] = trsDataByName[key].sum / trsDataByName[key].count;
}

console.log(trsDataByName);


console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!`);


// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**

//강사님 풀이
/*
  {
    '2022_김철수': 1,
    '2022_박영희': 3,
    '2023_김철수': 2,
    '2023_박영희': 1,
  }
*/

// const highestTrsData = traders.reduce((yearNameObj, trs) => { 

//   const key = `${trs.year}_${trs.trader.name}`;
//   if (yearNameObj[key] === undefined) {
//     yearNameObj[key] = 1;
//   } else {
//     yearNameObj[key]++;
//   }

//   // 연도별 최대 거래 횟수 찾기
//   const yearMaxKey = `max_${trs.year}`; // max_2022, max_2023
//   if (
//     yearNameObj[yearMaxKey] === undefined // 아직 max값이 한번도 결정되지 않음
//     || yearNameObj[key] > yearNameObj[yearMaxKey].count // 현재 루프회차에서 새로운 그 연도 최대거래횟수가 등장한 경우
//   ) {
//     yearNameObj[yearMaxKey] = {
//       name: trs.trader.name,
//       count: yearNameObj[key]
//     };
//   }

//   return yearNameObj;
// }, {});

// console.log(highestTrsData);


const trader2022 = traders.filter((n) => n.year === 2022);
const counter = trader2022.reduce((countObj, cur) => {
  if (cur.trader.name in countObj) {
    countObj[cur.trader.name]++;
  } else {
    countObj[cur.trader.name] = 1;
  }
  return countObj;
}, {});
console.log(counter);

console.log("=======");

let max = 0;
let maxtr = "";
for (const key in counter) {
  console.log(counter[key]);
  if (counter[key] > max) {
    max = counter[key];
    maxtr = key;
  }
}
console.log(maxtr);
console.log(max);

const newObj = {};
newObj[maxtr] = max;
console.log(newObj);

// let max=0;
// let maxtr=[];
// for(const tr of counter){
//     if(max<tr.countObj){
//         max=tr.countObj
//         maxtr=tr;
//     }
// }
// console.log(maxtr);

console.log(`&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&`);


// 8. **모든 거래 중 거래액이 중간값인
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
//정렬은 원본을 손상시킴, 복제 후 진행 slice()
// const midValue = traders.sort((a, b) => b.value - a.value);

// console.log(midValue[Math.floor(midValue.length / 2) + (midValue.length % 2)]);

// 거래액을 오름차정렬
// 정렬은 원본을 손상시킴, 복제 후 진행
console.log('===================================');

const sortedTraders = traders.slice().sort((trs1, trs2) => trs1.value - trs2.value);
// console.log(sortedTraders);

// 가운데 인덱스 찾기
// 9개짜리 배열에서 인덱스의 범위는 0 ~ 8 -> 4가 중앙인덱스
// 10개짜리 배열에서는 중앙인덱스가 애매하다
// [10, 20, 40, 50]
const middleIndex = Math.floor(sortedTraders.length / 2);

// 중간 거래액
let middleTradeValue;
// 데이터가 홀수개 인경우
if (sortedTraders.length % 2 === 1) {
  middleTradeValue = sortedTraders[middleIndex].value;
} else { // 데이터가 짝수개인 경우
  const firstMiddleValue = sortedTraders[middleIndex].value; 
  const secondMiddleValue = sortedTraders[middleIndex - 1].value; 
  middleTradeValue = (firstMiddleValue + secondMiddleValue) / 2;
}

console.log(`중간 거래액: ${middleTradeValue}`);

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

const countCity = traders.reduce((acc, cur) => {
  if (cur.trader.city in acc) {
    acc[cur.trader.city]++;
  } else {
    acc[cur.trader.city] = 1;
  }
  return acc;
}, {});
console.log(countCity);

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
const tradeList = traders.sort((a, b) => b.value - a.value);
console.log(tradeList);
