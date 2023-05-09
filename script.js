const 강화 = document.getElementById("강화버튼");
const 시도횟수 = document.getElementById("시도");
const 총메소 = document.getElementById("총메소");
const 파괴횟수 = document.getElementById("파괴횟수");
const 별들 = document.getElementsByClassName("fa-star");
const 현재별문구 = document.getElementById("현재별");
const 다음별문구 = document.getElementById("다음별");
const 성공확률문구 = document.getElementById("성공확률");
const 실패확률문구 = document.getElementById("실패확률");
const 파괴확률문구 = document.getElementById("파괴확률");
const 필요메소문구 = document.getElementById("필요메소");
const 파괴 = document.getElementById("파괴");
const 팝업 = document.getElementById("팝업");
const 파괴확인 = document.getElementById("파괴확인");
const 초기화버튼 = document.getElementById("초기화버튼");

let 현재별 = 0;

function 강화비용계산(장비레벨) {
  let 강화비용;
  if (현재별 < 10) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1)) / 25;
  } else if (현재별 < 11) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 400;
  } else if (현재별 < 12) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 220;
  } else if (현재별 < 13) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 150;
  } else if (현재별 < 14) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 110;
  } else if (현재별 < 15) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 75;
  } else {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 200;
  }
  강화비용 = Math.round(강화비용 / 100) * 100;
  return 강화비용;
}

function 강화확률계산() {
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

  return {
    성공확률: 성공확률,
    실패확률: 실패확률,
    파괴확률: 파괴확률,
    현재별: 현재별,
  };
}

function 강화여부() {
  const 뽑은숫자 = Math.floor(Math.random() * 1000) + 1;
  const 강화확률 = 강화확률계산();

  if (뽑은숫자 > 강화확률.성공확률 * 10) {
    //실패

    if (뽑은숫자 - 강화확률.성공확률 * 10 <= 강화확률.파괴확률 * 10) {
      현재별 = 12;
      팝업.classList.remove("visiblity-hidden");
      파괴횟수.innerText = +파괴횟수.innerText + 1;
    } else {
      if (현재별 > 15) {
        현재별 = 현재별 - 1;
      }
    }
  } else {
    //성공
    현재별 = 현재별 + 1;
  }

  if (현재별 > 14) {
    파괴.classList.remove("visiblity-hidden");
  }
}

function 별색칠() {
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
  const 강화비용 = 강화비용계산(140);

  강화여부();
  별색칠();
  const 확률모음 = 강화확률계산();
  const 필요메소 = 강화비용계산(140);
  시도횟수.innerText = +시도횟수.innerText + 1;
  // +시도횟수 = parseInt(시도횟수)
  총메소.innerText = (
    +총메소.innerText.replaceAll(",", "") + 강화비용
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
  현재별문구.innerText = 확률모음.현재별;
  다음별문구.innerText = 확률모음.현재별 + 1 === 26 ? 25 : 현재별 + 1;
  성공확률문구.innerText = 확률모음.성공확률.toFixed(1);
  실패확률문구.innerText = 확률모음.실패확률.toFixed(1);
  파괴확률문구.innerText = 확률모음.파괴확률.toFixed(1);
  필요메소문구.innerText = 필요메소.toLocaleString();
}

function 초기화함수() {
  현재별 = 0;
  const 확률모음 = 강화확률계산();
  const 필요메소 = 강화비용계산(140);
  별색칠();
  파괴.classList.add("visiblity-hidden");

  시도횟수.innerText = 0;
  총메소.innerText = 0;
  파괴횟수.innerText = 0;
  현재별문구.innerText = 확률모음.현재별;
  다음별문구.innerText = 확률모음.현재별 + 1 === 26 ? 25 : 현재별 + 1;
  성공확률문구.innerText = 확률모음.성공확률.toFixed(1);
  실패확률문구.innerText = 확률모음.실패확률.toFixed(1);
  파괴확률문구.innerText = 확률모음.파괴확률.toFixed(1);
  필요메소문구.innerText = 필요메소.toLocaleString();
}

강화.addEventListener("click", 강화함수);
파괴확인.addEventListener("click", function () {
  팝업.classList.add("visiblity-hidden");
  파괴.classList.add("visiblity-hidden");
});
초기화버튼.addEventListener("click", 초기화함수);
