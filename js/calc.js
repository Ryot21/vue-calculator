
// イベント
plusButton.addEventListener("click", addNumbers);
minusButton.addEventListener("click", minusNumber);
multiplyButton.addEventListener("click", multiplyNumber);
divideButton.addEventListener("click", divideNumber);
deleteButton.addEventListener("click", deleteNumber);
// 下記関数
let result = 0;//計算用
let num = 0;
let logs = [];
let log = {};
	function addNumbers(){
		num++;
		result = result + parseInt(userInput.value);
		let newLog = {
			type : "+",
			number : parseInt(userInput.value)
		};
		logger(newLog, num);
		outputResult(result);
	}
	function minusNumber (){
		num++;
		result = result - parseInt(userInput.value);
		let newLog = {
			type : "-",
			number : parseInt(userInput.value)
		};
		logger(newLog, num);
		outputResult(result);
	}
	function multiplyNumber(){
		num++;
		result = result * userInput.value;
		newLog = {
			type : "*",
			number : parseInt(userInput.value)
		};
		logger(newLog, num);
		outputResult(result);
	}
	function divideNumber(){
		num++;
		result = result / userInput.value;
		newLog = {
			type : "/",
			number : parseInt(userInput.value)
		};
		logger(newLog, num);
		outputResult(result);
	}

  function deleteNumber(){
		num = 0;
		result = 0;
		deleteLog();
		outputResult(result);
	}