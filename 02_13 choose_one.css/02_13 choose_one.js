.main_section {
  margin: 0 3rem 3rem 3rem;
  padding: 15rem 0 5rem 0;
  background-color: #fff;
  border-radius: 10px;
}
.chooseone {
  text-align: center;
  align-items: center;
}

.chooseone h1 {
  font-size: 24px;
  margin-bottom: 3rem;
}

.chooseone .main {
  color: #ff8c00;
}

.chooseone p {
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.chooseone button {
  background-color: #000000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}

.temperature_btn :hover {
  background: #ff892e;
  color: black;
}

/*.temperature_btn .btn_1:hover {
  background: #ff892e;
  color: black;
}

.temperature_btn .btn_2:hover {
  background: #ff892e;
  color: black;
}

.temperature_btn .btn_3:hover {
  background: #ff892e;
  color: black;
}

.temperature_btn .btn_4:hover {
  background: #ff892e;
  color: black;
}
.temperature_btn .btn_5:hover {
  background: #ff892e;
  color: black;
}
.temperature_btn .btn_6:hover {
  background: #ff892e;
  color: black;
}*/

.chooseone .style {
  margin-top: 15px;
  margin-bottom: 3rem;
}

.style_btn :hover {
  background: #ff892e;
  color: black;
}

/*.style_btn .btn_1:hover {
  background: #feffc8;
  color: black;
}

.style_btn .btn_2:hover {
  background: #c3ddff;
  color: black;
}

.style_btn .btn_3:hover {
  background: #ecd6ff;
  color: black;
}

.style_btn .btn_4:hover {
  background: #ffe7ff;
  color: black;
}*/

#result {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #3a3a3a;
}

#result span.style {
  color: #ff8c00;
}

#result span.temperature {
  color: #ff8c00;
}

.result_btn {
  padding-top: 3rem;
  
}

.result_btn .recommendation_btn {
  background-color: #ff892e;
  border-radius: 2rem;
}
-------------------------------------------------------
var selectedTemperature;

function selectTemperature(temperatureValue) {
  selectedTemperature = temperatureValue;
  var message = " ";
  if (temperatureValue == "4°C 이하") {
    message +=
      "<span class='temperature'>4°C 이하</span>에 맞는 옷 구매를 원하시는군요! 어떤 옷 스타일을 원하세요?";
  } else if (temperatureValue == "5~8°C") {
    message +=
      "<span class='temperature'>5~8°C</span>에 맞는 옷 구매를 원하시는군요! 어떤 옷 스타일을 원하세요?";
  } else if (temperatureValue == "9~15°C") {
    message +=
      "<span class='temperature'>9~15°C</span>에 맞는 옷 구매를 원하시는군요! 어떤 옷 스타일을 원하세요?";
  } else if (temperatureValue == "16~19°C") {
    message +=
      "<span class='temperature'>16~19°C</span>에 맞는 옷 구매를 원하시는군요! 어떤 옷 스타일을 원하세요?";
  } else if (temperatureValue == "20~27°C") {
    message +=
      "<span class='temperature'>20~27°C</span>에 맞는 옷 구매를 원하시는군요! 어떤 옷 스타일을 원하세요?";
  } else {
    message +=
      "<span class='temperature'>28°C 이상</span>에 맞는 옷 구매를 원하시는군요! 어떤 옷 스타일을 원하세요?";
  }

  document.getElementById("result").innerHTML = message;
}

function selectStyle(style) {
  document.getElementById("result").style.display = "block";
  if (selectedTemperature) {
    var resultMessage = `${style} 스타일을 선택하셨군요!`;
    resultMessage += ` <span class="temperature">${selectedTemperature}</span>에 입을 수 있는 <span class="style">${style} 스타일</span>을 준비할게요.`;
    document.getElementById("result").innerHTML = resultMessage;
  } else {
    alert("먼저 온도를 선택해주세요.");
  }
  // 페이지 이동을 위한 조건문
  var nextPage = "";
  if (selectedTemperature === "4°C 이하") {
    if (style === "클래식") nextPage = "Duck-down-hood-string-half-coat.html";
  } else if (selectedTemperature === "5~8°C") {
    if (style === "캐주얼") nextPage = "travel-windbreaker.html";
  } else if (selectedTemperature === "9~15°C") {
    if (style === "유니크") nextPage = "overdue_VINTAGE TIE OPS.html";
  }
  if (nextPage !== "") {
    setTimeout(function () {
      window.location.href = nextPage;
    }, 5000);
  }
}
