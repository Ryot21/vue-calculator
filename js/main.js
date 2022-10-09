const userInput = document.getElementById("input-number");

const plusButton = document.getElementById("btn-plus");
const minusButton = document.getElementById("btn-minus");
const multiplyButton = document.getElementById("btn-multiply");
const divideButton = document.getElementById("btn-divide");
const deleteButton = document.getElementById("btn-delete");

const currentProcess = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");


function outputResult(result, process){
	currentProcess.innerHTML = process ?? "";
	currentResultOutput.innerHTML = result;
	return result
}
function logger(newLog, num){
	logs.push(newLog);
	// console.log(logs);
	// console.log(logs[num - 1].Type);
	if(num === 1){
		console.log(`0 ${logs[num - 1].type} ${logs[num - 1].number}`)
	}else if(num >= 2){
		console.log(`${result - logs[num - 1].number} ${logs[num - 1].type} ${logs[num - 1].number}`);
	}


}
function deleteLog(){
	logs.splice(0);
	console.log(0);
}
