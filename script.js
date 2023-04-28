const 강화 = document.getElementById("강화버튼");
const 시도횟수 = document.getElementById("시도");
const 총메소 = document.getElementById("총메소");
// ToDo : 필요메소 직접 구하기
const 필요메소 = 100000;
const 별들 = document.getElementsByClassName("fa-star");
let 현재별 = 0;

function 별색칠() {
  const 뽑은숫자 = Math.floor(Math.random() * 100) + 1;
  let 성공확률;
  let 실패확률;
  let 파괴확률 = 0;
  if (현재별 < 3) {
    실패확률 = 현재별 * 5 + 5;
  } else if (현재별 < 15) {
    실패확률 = 현재별 * 5;
  } else {
    if (현재별 < 18) {
      파괴확률 = 2.1;
      실패확률 = 67.9;
    } else if (현재별 < 20) {
      파괴확률 = 2.8;
      실패확률 = 67.2;
    } else if (현재별 < 22) {
      파괴확률 = 7;
      실패확률 = 63;
    } else if ((현재별 = 22)) {
      파괴확률 = 19.4;
      실패확률 = 77.6;
    } else if ((현재별 = 23)) {
      파괴확률 = 29.4;
      실패확률 = 68.6;
    } else if ((현재별 = 24)) {
      파괴확률 = 39.6;
      실패확률 = 59.4;
    }
  }
  성공확률 = 100 - (실패확률 + 파괴확률);
  //실패
  if (뽑은숫자 > 성공확률) {
    if (현재별 > 15) {
      현재별 = 현재별 - 1;
    }
  } else {
    //성공
    현재별 = 현재별 + 1;
  }
  for (let i = 0; i < 25; i = i + 1) {
    if (i < 현재별) {
      별들[i].classList.replace("fa-regular", "fa-solid");
    } else {
      별들[i].classList.replace("fa-solid", "fa-regular");
    }
  }
  //if(현재별);
  //별5.children[0].classList.replace("fa-regular", "fa-solid");
}
function 강화함수() {
  시도횟수.innerText = +시도횟수.innerText + 1;
  // +시도횟수 = parseInt(시도횟수)
  총메소.innerText = (
    +총메소.innerText.replaceAll(",", "") + 필요메소
  ).toLocaleString();
  // 1. 총메소.innerText = 1000 (문자열 )
  // 2. +총메소.innerText = 1000 (숫자)
  // 3. 필요메소 100000 (숫자)
  // 4. +총메소.innerText + 필요메소 = 101000 (숫자)
  // 5. (101000 -> 4번의 결과값).toLocaleString(); = 101,000 (문자열)
  // 6. 총메소.innerText = 101,000 (문자열)
  // 7. 총메소.innerText.replaceAll(",",""); => 총 메소에 있는 쉼표를 모두 찾아서 없앤다
  // 8. 총메소.innerText = 101000 (문자열)
  // 9. +총메소.innerText = 101000 (숫자)

  // +총메소.innerText = 0(숫자)
  // 필요메소 = 100000(숫자)
  // 버튼 클릭시 0 + 100000 = 100000(숫자)
  // 숫자라는 타입을 문자열로 변환
  // 필요메소.toString()

  별색칠();
}

강화.addEventListener("click", 강화함수);
