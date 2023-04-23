const 변수명 = 123;
const 배열 = [1, 2, 3, 4, 5];
배열[0];
const 객체 = {
  응애: "배트",
};
console.log(객체["응애"]);
console.log(객체.응애);

function 더하기(첫번째숫자, 두번째숫자) {
  return 첫번째숫자 + 두번째숫자;
}

console.log(더하기(800, 50));

let 곱할숫자 = 더하기(800, 1000) * 2;
console.log(곱할숫자);
