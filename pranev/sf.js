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
		document.getElementById("answer").innerHTML = 'Answer: ' + document.getElementById(questions[newQuoteIndex].answer).getAttribute('index');
		document.getElementById(questions[newQuoteIndex].answer).classList.add('bg-success');
		strExpected = questions[newQuoteIndex].answer.trim();
	} else if (questions[newQuoteIndex].type.toLowerCase() == "multi") {
		var strAnswer = 'Answer: ';
		for(var i = 0; i < ans_array.length; i++) {
			document.getElementById(ans_array[i].trim()).classList.add('bg-success');
			strExpected = strExpected + ',' + ans_array[i].trim();
			strAnswer = strAnswer + document.getElementById(ans_array[i].trim()).getAttribute('index') + ', ';
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

//================Questions
qbGeneral = [

{ "question": "Which country &gt;&gt;&gt;gen_aus","type": "single","options" : {"A": "Australia","B": "United States","C": "China","D": "Australia"},"answer": "D"},
{ "question": "Which country &gt;&gt;&gt;gen_china","type": "single","options" : {"A": "Australia","B": "United States","C": "United Kingdom","D": "China"},"answer": "D"},
{ "question": "Which country &gt;&gt;&gt;gen_ind","type": "single","options" : {"A": "United States","B": "United Kingdom","C": "China","D": "India"},"answer": "D"},
{ "question": "Which country &gt;&gt;&gt;gen_us","type": "single","options" : {"A": "India","B": "United Kingdom","C": "China","D": "United States"},"answer": "D"},
{ "question": "Which country &gt;&gt;&gt;gen_uk","type": "single","options" : {"A": "India","B": "United States","C": "China","D": "United Kingdom"},"answer": "D"},
{ "question": "Which country &gt;&gt;&gt;gen_aus","type": "single","options" : {"A": "Australia","B": "United States","C": "China","D": "Australia"},"answer": "D"},
{ "question": "Which country &gt;&gt;&gt;gen_china","type": "single","options" : {"A": "Australia","B": "United States","C": "United Kingdom","D": "China"},"answer": "D"},

{ "question": "Eldest son of Dhirtarashtra","type": "single","options" : {"A": "Dhusaasana","B": "Yudhisthira","C": "Krishna","D": "Duryodana"},"answer": "D"},
{ "question": "Paandu had ___ sons","type": "single","options" : {"A": "4","B": "3","C": "6","D": "5"},"answer": "D"},
{ "question": "How many sisters Duryodhana had?","type": "single","options" : {"A": "2","B": "3","C": "0","D": "1"},"answer": "D"},
{ "question": "Who is elder? Yudhisthira or Duryodhana?","type": "single","options" : {"A": "Duryodhana","B": "Both are same age","C": "One is sister","D": "Yudhisthira"},"answer": "D"},
{ "question": "Whose father was blind? Pandavas or Kauravas?","type": "single","options" : {"A": "Pandavas","B": "No father was blind","C": "Both were blind","D": "Kauravas"},"answer": "D"},
{ "question": "Mother of all Pandavas?","type": "single","options" : {"A": "Kunti","B": "Draupadi","C": "Gandhari","D": "2 mothers"},"answer": "D"},
{ "question": "Who were in forest for longer times","type": "single","options" : {"A": "Kauravas","B": "Saguni","C": "Kings","D": "Pandavas"},"answer": "D"},
{ "question": "Tell the right order of Pandavas:","type": "single","options" : {"A": "Nakul, Sahadev, Bheema, Arjun","B": "Arjun Bheema, Nakul Sahadev","C": "Bheema Duryodhan Arjun Sahadv","D": "Bheema Arjun Nakul Sahadev"},"answer": "D"},
{ "question": "Pick the odd one out:","type": "single","options" : {"A": "Duryodhan","B": "Dhosaasan","C": "Yuyutsu","D": "Arjun"},"answer": "D"},
{ "question": "Sister of Duryodhan ___","type": "single","options" : {"A": "No sister","B": "Dushasana","C": "Paanjaali","D": "Dushala"},"answer": "D"},
{ "question": "How many Sisters for Duryodhan?","type": "single","options" : {"A": "0","B": "99","C": "100","D": "1"},"answer": "D"},
{ "question": "Who was more stronger?","type": "single","options" : {"A": "Duryodhan","B": "Arjun","C": "Yudhisthira","D": "Bheema"},"answer": "D"},
{ "question": "Other than 5 pandavas, there is another brother for them. He is","type": "single","options" : {"A": "Kannan","B": "Krishna","C": "Kubera","D": "Karna"},"answer": "D"},
{ "question": "Karna is born to ___","type": "single","options" : {"A": "Gandhari","B": "Draupadi","C": "Dhusaasala","D": "Kunti"},"answer": "D"},
{ "question": "Dushala mother is ___","type": "single","options" : {"A": "Kunti","B": "Draupadi","C": "Dhusaasala","D": "Gandhari"},"answer": "D"},
{ "question": "Who is bad?","type": "single","options" : {"A": "Gandhari","B": "Bheema","C": "Nakul","D": "Duryodhana"},"answer": "D"},
{ "question": "Mother of Nakula and Arjuna","type": "single","options" : {"A": "Kunti & Madri","B": "Gandhari & Kunti","C": "Kunti","D": "Madri & Kunti"},"answer": "D"},
{ "question": "Who is the wife of Dhritarashtra?","type": "single","options" : {"A": "Kunti","B": "Madri","C": "Dhusala","D": "Gandhari"},"answer": "D"},
{ "question": "Who is the mother of Duryodhana?","type": "single","options" : {"A": "Kunti","B": "Madri","C": "Dhusala","D": "Gandhari"},"answer": "D"},
{ "question": "Lord Krishna's brother is ___","type": "single","options" : {"A": "Rama","B": "Arjun","C": "Bheema","D": "Balarama"},"answer": "D"},
{ "question": "Lord Krishna and Balarama's father is ____","type": "single","options" : {"A": "Paandu","B": "Dhritarashtra","C": "Saguni","D": "Vasudeva"},"answer": "D"},
{ "question": "Duryodhana's mother's brother is ___","type": "single","options" : {"A": "Paandu","B": "Arjun","C": "Kunti","D": "Saguni"},"answer": "D"},
{ "question": "Lord Krishna's father's sister is ___","type": "single","options" : {"A": "Madri","B": "Dhusala","C": "Gandhari","D": "Kunti"},"answer": "D"},
{ "question": "Lord Krishna's sister's name is ___","type": "single","options" : {"A": "Kunti","B": "Draupadi","C": "Vasudeva","D": "Subhadra"},"answer": "D"},
{ "question": "Who married Lord Krishna's sister?","type": "single","options" : {"A": "Bheema","B": "Dharma","C": "Duryodhana","D": "Arjun"},"answer": "D"},
{ "question": "Wife's name of all Pandavas is ___","type": "single","options" : {"A": "Subhadra","B": "Dushasala","C": "Gandeeva","D": "Draupadi"},"answer": "D"},
{ "question": "Where was the big palace of Pandavas and Kauravas was?","type": "single","options" : {"A": "Ayodhya","B": "Bengaluru","C": "Chennai","D": "Hastinapura"},"answer": "D"},
{ "question": "Son of Arjun and Subhadra is ____","type": "single","options" : {"A": "Arjunaa","B": "Bheema","C": "Sahadev","D": "Abhimanyu"},"answer": "D"},
{ "question": "Which is the right combination?","type": "single","options" : {"A": "Bheema - Food","B": "Nakula - Jumping","C": "Sahadev - Shooting","D": "Arjun - Bow/Arrow"},"answer": "D"},
{ "question": "Which is not the right combination?","type": "single","options" : {"A": "Arjun - Bow/Arrow","B": "Nakula - Reading stars","C": "Sahadev - Swords","D": "Bheema - Food"},"answer": "D"},
{ "question": "Capital of India","type": "single","options" : {"A": "Chennai","B": "Bangalore","C": "Kolkata","D": "New Delhi"},"answer": "D"},
{ "question": "Where is this city? (pick more correct one). Bangalore","type": "single","options" : {"A": "India","B": "Tamilnadu","C": "Japan","D": "Karnataka"},"answer": "D"},
{ "question": "Where is this city? (pick more correct one). Chennai","type": "single","options" : {"A": "India","B": "Karnataka","C": "Japan","D": "Tamilnadu"},"answer": "D"},
{ "question": "Capital of Japan","type": "single","options" : {"A": "Osaka","B": "Mukaasa","C": "Cairo","D": "Tokyo"},"answer": "D"},
{ "question": "Capital of America (United States)","type": "single","options" : {"A": "New York","B": "California","C": "Las vegas","D": "Washington DC "},"answer": "D"},
{ "question": "Capital of United Kingdom (UK)","type": "single","options" : {"A": "England","B": "Scotland","C": "Worthing","D": "London"},"answer": "D"},
{ "question": "Capital of Australia","type": "single","options" : {"A": "London","B": "Bangalore","C": "Sydney","D": "Canberra"},"answer": "D"},
{ "question": "Capital of China","type": "single","options" : {"A": "Washington DC","B": "Canberra","C": "Sydney","D": "Beijing"},"answer": "D"},
{ "question": "Capital of South Korea","type": "single","options" : {"A": "Beijing","B": "Canberra","C": "Washington DC","D": "Seoul"},"answer": "D"},
{ "question": "Capital of Bangladesh","type": "single","options" : {"A": "Delhi","B": "Bombay","C": "Bengal","D": "Dhaka"},"answer": "D"},
{ "question": "Capital of Karnataka","type": "single","options" : {"A": "Chennai","B": "Hyderabad","C": "Delhi","D": "Bangalore"},"answer": "D"},
{ "question": "Capital of Tamilnadu","type": "single","options" : {"A": "Bangalore","B": "Hyderabad","C": "Delhi","D": "Chennai"},"answer": "D"},
{ "question": "Capital of Andhra Pradesh","type": "single","options" : {"A": "Hyderabad","B": "Bangalore","C": "Chennai","D": "Amaravati"},"answer": "D"},
{ "question": "Capital of Telangana","type": "single","options" : {"A": "Amaravati","B": "Bangalore","C": "Chennai","D": "Hyderabad"},"answer": "D"},
{ "question": "Capital of Kerala","type": "single","options" : {"A": "Kochi","B": "Kozhikode","C": "Chennai","D": "Tiruvanandapuram"},"answer": "D"},
{ "question": "Capital of Maharashtra","type": "single","options" : {"A": "Kolkata","B": "Bangalore","C": "Chennai","D": "Mumbai"},"answer": "D"},
{ "question": "Mumbai is capital of ___","type": "single","options" : {"A": "Tamil nadu","B": "Kerala","C": "Karnataka","D": "Maharashtra"},"answer": "D"},
{ "question": "Bangalore is capital of ___","type": "single","options" : {"A": "Tamil nadu","B": "Kerala","C": "Maharashtra","D": "Karnataka"},"answer": "D"},
{ "question": "Delhi is capital of ___","type": "single","options" : {"A": "Delhi","B": "America","C": "China","D": "India"},"answer": "D"},

]
