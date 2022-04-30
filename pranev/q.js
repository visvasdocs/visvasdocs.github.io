var oldIndex;
var newQuoteIndex = -1;
var shlokas;
var shlokas_12, shlokas_15, shlokas_16;
var questions;
var nScore = 0;
var blnScored = false;

function loadWords() {
	if(window.localStorage.getItem("chapter") != '')  { document.getElementById('chapters').value = window.localStorage.getItem("chapter") };
	if(window.localStorage.getItem("choice") != '')  { document.getElementById('choice').value = window.localStorage.getItem("choice") };
	nextQuote();
	//shuffleObject();
	//returnABCD(66);
}

function nextQuote() {
	//If no answer is there, highlight the right answer for a second and move.
	if (newQuoteIndex != -1) {
		showAnswer();
	}
	clear();
	
	determineChapter();
	determindNextQuestionNumber();
	
	//Get the question
	document.getElementById("question").innerHTML = (newQuoteIndex+1) + '. ' + analyzeQuestion(questions[newQuoteIndex].question);
	
	//Get the options printed
	objOptions = shuffleObject(questions[newQuoteIndex].options);
	var strAllOptions = "";
	index = 1;
	if (questions[newQuoteIndex].type.toLowerCase() == "single") {
		Object.keys(objOptions).forEach(function(key) {
		  strAllOptions = strAllOptions + createRadio(key, objOptions[key], index);
		  index++;
		})
	}else if (questions[newQuoteIndex].type.toLowerCase() == "multi") {
		Object.keys(objOptions).forEach(function(key) {
		  strAllOptions = strAllOptions + createCheckbox(key, objOptions[key], index);
		  index++;
		})
	}
	document.getElementById('AllOptions').innerHTML = strAllOptions;
	
	blnScored = false;
}

function hideCheckbox() {
	document.getElementById('ckb1').style.display = 'none';
	document.getElementById('lckb1').style.display = 'none';
}

function showAll() {
	determineChapter();
	var qsTable = document.getElementById("qsTable");
	var strFullTableContents = '<table class="table table-striped  text-black"><thead><tr><th>#</th><th>Ans:</th><th>Question</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></thead><tbody>';
	
	questions.forEach(function(obj, index) { 
		strFullTableContents = strFullTableContents + '<tr><td>' + (index+1) + '</td><td class="text-primary">' + obj.answer + '</td><td>' + obj.question + '</td>' + getTR_TD_Options(index) + '</tr>';
	});
	strFullTableContents = strFullTableContents + '</tbody></table>';
	
	qsTable.innerHTML = strFullTableContents;
}

//JS: helper Functions
function determineChapter() {
	var cmbChapter = document.getElementById("chapters");
	if (cmbChapter.value == 1) questions = qbGeneral;
	if (cmbChapter.value == 2) questions = qbSocial;
	if (cmbChapter.value == 3) questions = qbLanguageArts;
	if (cmbChapter.value == 4) questions = qbLiterature;
	if (cmbChapter.value == 5) questions = qbComputers;
	if (cmbChapter.value == 6) questions = qbMaths;
	if (cmbChapter.value == 7) questions = qbKannada;
	if (cmbChapter.value == 8) questions = qbHindi;
	
	window.localStorage.setItem("chapter", cmbChapter.value);
	
	var cmbChoice = document.getElementById("choice");
	window.localStorage.setItem("choice", cmbChoice.value);
}
function determindNextQuestionNumber() {
	var progressChoice = document.getElementById("choice").value;
	if (progressChoice == 'order' ) { 
		if (newQuoteIndex == questions.length - 1) newQuoteIndex = 0;
		else newQuoteIndex = newQuoteIndex + 1;
	}
	if (progressChoice == 'random' ) {
		do{
			newQuoteIndex = Math.floor(Math.random() * questions.length);
		} while ((newQuoteIndex == oldIndex));
	}
	oldIndex = newQuoteIndex;
}
function clear() {
	document.getElementById("question").innerHTML = "";
	document.getElementById("answer").innerHTML = "";
}

function createRadio(value, optionToBeDisplayed, index) {	
	return '<div class="form-check"> <input class="form-check-input" type="radio" id="option'+value+'" name="options" value="'+value+'"><label class="form-check-label" for="option'+value+'" id="'+value+'" index="' + index + '">'+optionToBeDisplayed+'</label><br></div>';
}
function createCheckbox(value, optionToBeDisplayed, index) {	
	return '<div class="form-check"> <input class="form-check-input" type="checkbox" id="checkbox'+value+'" name="options" value="'+value+'"><label class="form-check-label" for="checkbox'+value+'" id="'+value+'" index="' + index + '">'+optionToBeDisplayed+'</label><br></div>';
}

function showAnswer() {
	strExpectedValue = highlightAllAnswersGreen();	
	strActualValue = getActualValue();
		
	//If no answer is selected, return;
	if(document.querySelector('input[name="options"]:checked') == null) {
		return;
	}
	
	//console.log('Expec ' + strExpectedValue.trim() + ' Actual ' + strActualValue);
	if(strActualValue == strExpectedValue.trim()) { 
		if (blnScored == false) { nScore = nScore + 1; blnScored = true; }
		document.getElementById('lblScore').innerText = 'Score: ' + nScore;
	}
}

function highlightAllAnswersGreen() {
	var strExpected = "";
	var ans_array = questions[newQuoteIndex].answer.split(',');
	
	if (questions[newQuoteIndex].type.toLowerCase() == "single") {
		document.getElementById("answer").innerHTML = 'Answer: ' + returnABCD(document.getElementById(questions[newQuoteIndex].answer).getAttribute('index'));
		document.getElementById(questions[newQuoteIndex].answer).classList.add('bg-success');
		strExpected = questions[newQuoteIndex].answer.trim();
	} else if (questions[newQuoteIndex].type.toLowerCase() == "multi") {
		var strAnswer = 'Answer: ';
		for(var i = 0; i < ans_array.length; i++) {
			document.getElementById(ans_array[i].trim()).classList.add('bg-success');
			strExpected = strExpected + ',' + ans_array[i].trim();
			strAnswer = strAnswer + returnABCD(document.getElementById(ans_array[i].trim()).getAttribute('index')) + ', ';
		}
		document.getElementById("answer").innerHTML = 'Answer: ' + strAnswer;
	}
	return strExpected;
}
function getActualValue() {
	var strExpectedValue = questions[newQuoteIndex].answer;
	var strActualChecked = "";
	
	if (questions[newQuoteIndex].type.toLowerCase() == "single") {
		if(document.querySelector('input[name="options"]:checked') != null) {
			strActualChecked = document.querySelector('input[name="options"]:checked').value;
			if(strActualChecked != strExpectedValue) {
				document.getElementById(strActualChecked).classList.add('bg-danger');
			}
		}
	} else if (questions[newQuoteIndex].type.toLowerCase() == "multi") {
		var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
		for (var checkbox of markedCheckbox) {  
			strActualChecked = strActualChecked + ',' + checkbox.value;
			if(!strExpectedValue.includes(checkbox.value)){
				document.getElementById(checkbox.value).classList.add('bg-danger');
			}
		}
	}
	return strActualChecked;
}

function getTR_TD_Options(index) {
	objOptions = questions[index].options;
	str = "";
	Object.keys(objOptions).forEach(function(key) {
		str = str + "<td>" + objOptions[key] + "</td>" 
		//<td>' + obj.option2 + '</td><td>' + obj.option3 + '</td><td>' + obj.option4 + '</td>
	})
	return str;
}

function shuffleObject(obj) {
	//var obj = {"A": "Dhusaasana","B": "Yudhisthira","C": "Krishna","D": "Duryodana"};
	var shuffledNumbers = shuffleArray(Object.keys(obj).length);
	var newObj = { };
	var newKey;
	
	for (let i = 0; i < shuffledNumbers.length; i++) {
		newKey = Object.keys(obj)[shuffledNumbers[i]];
		newObj[newKey] = obj[newKey];
	}
	//console.log(newObj);
	return newObj;
}
function shuffleArray(length) {
	var array = [];
	for (let i = length -1 ; i >= 0; i--) {		
		array.push(i);
	}
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
	return array;
}

function analyzeQuestion(strQuestion) {
	if (strQuestion.includes("&gt;&gt;&gt;")) {
		var str = strQuestion.split('&gt;&gt;&gt;')[0] + '<br><img src="pics/' + strQuestion.split('&gt;&gt;&gt;')[1] + '.jpg" width="200" height="200">';
		return str;
	} else return strQuestion;
}

function returnABCD(num) {
	var x = parseInt(num) + 64;
	return String.fromCharCode(x);
}

//================Questions

