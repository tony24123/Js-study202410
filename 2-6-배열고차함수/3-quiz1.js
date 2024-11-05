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
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

// function searchTrader() {
//   let traderInfo = [];
//   for (let n of traders) {
//     if (n.year === 2022) {
//       traderInfo.push(n.trader);
//     }
//   }
//   return traderInfo;
// }

// const newArray = searchTrader();
// console.log(newArray);

const traderInfo = traders.filter((n) => n.year === 2022).map((n) => n.trader);
console.log(traderInfo);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
let workPlace = [];
for (let i of traders) {
  workPlace.push(i.trader.city);
}
console.log(workPlace);

// let workPlace=[];
// workPlace = traders.trader.;
// console.log(workPlace);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

const searchTrader = traders
  .filter((n) => n.trader.city === "대전").map((n) => n.trader);
console.log(searchTrader);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

let traderSelect = [];
for (let i of traders) {
  traderSelect.push(i.trader.name);
}
console.log(traderSelect);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

const traderLiveInSeoul = traders.filter((n) => n.trader.city === `서울`);
console.log(traderLiveInSeoul);
let sum = 0;
for (let i of traderLiveInSeoul) {
  sum += i.value;
}
console.log(sum);
