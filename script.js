// 변수
// 예약어 var let const

let 응배 = "배트";

응배 = "로어";

console.log(응배);

const 리얼 = "기거스";

console.log(리얼);

const 메소 = 10;
const 아이템값 = 10;

if (메소 > 아이템값) {
  console.log("구매 완료");
} else if (메소 < 아이템값) {
  console.log("메소가 부족합니다.");
} else {
  console.log("테스트");
}

const 배열 = [5000, 4000, 3000, "거지", "2000"];
console.log(배열[3]);

// console log를 10번 반복하고싶다
// let i = 0;
// i = i + 1;
// i = 10;

for (let i = 0; i < 배열.length; i++) {
  console.log(배열[i]);
}

const 숫자 = document.getElementById("숫자");
console.log(숫자.innerText);
숫자.innerText = 1500;
