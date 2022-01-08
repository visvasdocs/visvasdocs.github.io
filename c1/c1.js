var oldIndex;
var newQuoteIndex;
var shlokas;
var shlokas_12, shlokas_15, shlokas_16;
var questions;

function loadWords() {
	//if(window.localStorage.getItem("bg-chapter") != '')  { document.getElementById('chapters').value = window.localStorage.getItem("bg-chapter") };
	//determineChapter()
	questions = qbPhonetics;
	nextQuote();
}

function nextQuote() {
	//determineChapter();
	clear();
	randomize();
	document.getElementById("question").innerHTML = questions[newQuoteIndex].question;
	document.getElementById('a').innerHTML = questions[newQuoteIndex].option1;
	document.getElementById('b').innerHTML = questions[newQuoteIndex].option2;
	document.getElementById('c').innerHTML = questions[newQuoteIndex].option3;
	document.getElementById('d').innerHTML = questions[newQuoteIndex].option4;
}

function showAll() {
	determineChapter();
	var qsTable = document.getElementById("qsTable");
	var strFullTableContents = '<table class="table table-striped  text-black"><thead><tr><th>#</th><th>Question</th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>';
	
	questions.forEach(function(obj, index) { 
		strFullTableContents = strFullTableContents + '<tr><td>' + (index+1) + '</td><td>' + obj.question + '</td><td>' + obj.option1 + '</td><td>' + obj.option2 + '</td><td>' + obj.option3 + '</td><td>' + obj.option4 + '</td></tr>';
	});
	strFullTableContents = strFullTableContents + '</tbody></table>';
	
	qsTable.innerHTML = strFullTableContents;
}

//JS: helper Functions
function determineChapter() {
	var cmbChapter = document.getElementById("chapters");
	if (cmbChapter.value == 12) shlokas = shlokas_12;
	if (cmbChapter.value == 15) shlokas = shlokas_15;
	if (cmbChapter.value == 16) shlokas = shlokas_16;
	window.localStorage.setItem("bg-chapter", cmbChapter.value);
}
function randomize() {
	do{
		newQuoteIndex = Math.floor(Math.random() * questions.length);
	} while ((newQuoteIndex == oldIndex));
	oldIndex = newQuoteIndex;
}
function clear() {
	document.getElementById("question").innerHTML = "";
	document.getElementById('option1').checked = false;
	document.getElementById('option2').checked = false;
	document.getElementById('option3').checked = false;
	document.getElementById('option4').checked = false;
	document.getElementById("answer").innerHTML = "";
	
	//Remove Red Colors if any
	document.getElementById('a').classList.remove('bg-danger');  document.getElementById('a').classList.remove('bg-success');
	document.getElementById('b').classList.remove('bg-danger');  document.getElementById('b').classList.remove('bg-success');
	document.getElementById('c').classList.remove('bg-danger');  document.getElementById('c').classList.remove('bg-success');
	document.getElementById('d').classList.remove('bg-danger');  document.getElementById('d').classList.remove('bg-success');
}
function showAnswer() {
	if(document.querySelector('input[name="options"]:checked') == null) {
		alert('Select an answer to proceed further.');
		return;
	}
	strActualValue = document.querySelector('input[name="options"]:checked').value;
	console.log(strActualValue);
	strExpectedValue = questions[newQuoteIndex].answer;
	document.getElementById("answer").innerHTML = questions[newQuoteIndex].answer;
	//console.log(strExpectedValue + strActualValue);
	
	if(strActualValue != strExpectedValue) { document.getElementById(strActualValue).classList.add('bg-danger');  document.getElementById(strExpectedValue).classList.add('bg-success'); }
	if(strActualValue == strExpectedValue) document.getElementById(strActualValue).classList.add('bg-success');
}

//================Shlokas
qbPhonetics = [

{"question": "1. How many vowels are there in the Samskruta language? ","option1":"13","option2": "14","option3": "12","option4": "15","answer": "a"},
{"question": "2. How is the symbol (:) called in Samskrutam? ","option1":"अनुनासिका ","option2": "अनुस्वार","option3": "विसर्ग ","option4": "अवग्रह ","answer": "c"},
{"question": "3. The famous Grammarian who wrote the Vyakarana text आष्टाध्यायी  is ………. | ","option1":"वररुचि: ","option2": "पाणिनि: ","option3": "कात्यायन: ","option4": "पतंजलि:","answer": "b"},
{"question": "4. How many categories are the vowels classified into, based on the time taken for their pronunciation? ","option1":"3","option2": "2","option3": "4","option4": "6","answer": "a"},
{"question": "5. What is a long vowel called in Samskrutam? ","option1":"दिर्घाक्षरं  ","option2": "हस्वाक्षरम ","option3": "स्वराक्षरं  ","option4": "व्यञ्जनाक्षरं ","answer": "a"},
{"question": "6. Vowels that are homogenous are known as ……………| ","option1":"शवर्ना:  ","option2": "सवर्णा: ","option3": "हावर्णा: ","option4": "षवर्ण:","answer": "b"},
{"question": "7. What does the word अʔरम् refer to? ","option1":"a) Alphabet","option2": "b) Vowel ","option3": "c) Consonant","option4": "d) Conjunct consonant ","answer": "a"},
{"question": "8. How many consonants are there in the Samskruta language? ","option1":"35","option2": "34","option3": "33","option4": "36","answer": "c"},
{"question": "9. The letter ज belongs to which group? ","option1":"कवर्ग ","option2": "चवर्ग ","option3": "तवर्ग ","option4": "टवर्ग ","answer": "b"},
{"question": "10. Which among the following does not belong to टवगɋ ? ","option1":"a) ठ ","option2": "b) द ","option3": "c) ड ","option4": "d) ण ","answer": "b"},
{"question": "11. अकुहाविसर्जनियानाम  --------- ","option1":"तालू","option2": "कंठ: ","option3": "मूर्धा ","option4": "दन्ता:","answer": "b"},
{"question": "12. Which is the place of articulation of Visarga? ","option1":"a) Jaws","option2": "b) Palate ","option3": "c) Thrroat","option4": "d) Lips ","answer": "c"},
{"question": "13. Identify the अनुनासिका letter from the following. ","option1":"a) ड ","option2": "b) ङ ","option3": "c) इ ","option4": "d) ई ","answer": "b"},
{"question": "14. Choose the ऊष्माक्षर from the letters given below. ","option1":"a) थ ","option2": "b) य ","option3": "c) ष ","option4": "d) प ","answer": "c"},
{"question": "15. What are अंत:स्था:  letters? ","option1":"a) Semi-consonants ","option2": "b) Semi-alphabets ","option3": "c) Semi-conjuncts","option4": "d) Semi-vowels ","answer": "d"},
{"question": "16. Identify the महाप्राण - अक्षर  from the following. ","option1":"a) भ ","option2": "b) म ","option3": "c) य ","option4": "d) स ","answer": "a"},
{"question": "17. The word प्रयत्न  can be translated as ……………. . ","option1":"a) Effort ","option2": "b) effect ","option3": "c) efficiency ","option4": "d) ease ","answer": "a"},
{"question": "18. What does the word आभ्यन्तरा   mean? ","option1":"a) External ","option2": "b) Internal ","option3": "c) Eternal ","option4": "d) Neutral ","answer": "b"},
{"question": "19. इचुयशानां स्थानं  ----------- ","option1":"a) उरः","option2": "b) तालू ","option3": "c) कंठ: ","option4": "d) दंता:","answer": "b"},
{"question": "20.How many अंत:स्था: alphabets are there in Samskrutam? ","option1":"2","option2": "4","option3": "3","option4": "5","answer": "b"},
{"question": "21. ऊषमाक्षर are called so, because they produce ………….. while pronouncing. ","option1":"a) Cold ","option2": "b) Light ","option3": "c) Heat ","option4": "d) Hissing sound ","answer": "c"},
{"question": "22.The letter म falls under which category?","option1":"ऊषमाक्षर ","option2": "महाप्राणा  ","option3": "अंत:स्था: ","option4": "अनुनासीक ","answer": "d"},
{"question": "23.What does the word мाण mean in ‘अҍмाण’? ","option1":"a) Sound ","option2": "b) Breath ","option3": "c) Effort ","option4": "d) Position ","answer": "b"},
{"question": "24.The alphabet ॠ is a …………………. | ","option1":"ह्रस्वाक्षरम ","option2": "दीर्घाक्षरम ","option3": "संयुक्ताक्षरं ","option4": "व्यंजनाक्षरं ","answer": "b"},
{"question": "25.क् + ष = ………………| ","option1":"श्र","option2": "क्ष ","option3": "त्र","option4": "ज्ञ","answer": "b"},
{"question": "26.The word दंता: refers to .................... syllables. ","option1":"a) Labial ","option2": "b) Dental ","option3": "c) Palatal ","option4": "d) Glottal ","answer": "b"},
{"question": "27. The word ओष्टौ  means .............. . ","option1":"a) Tongue ","option2": "b) Teeth ","option3": "c) Lips ","option4": "d) Glottis ","answer": "c"},
{"question": "28. संयुक्ताक्षरणि  can be translated as ………………. . ","option1":"a) semi-vowels ","option2": "b) conjunct-vowels ","option3": "c) semi-consonants ","option4": "d) conjunct- consonants","answer": "d"},
{"question": "29. What does the word संयुक्त  mean? ","option1":"a) well-joint ","option2": "b) well-known ","option3": "c) well-formed ","option4": "d) well- organised ","answer": "a"},
{"question": "30. How many letters are there in Samskrutam? ","option1":"48","option2": "53","option3": "51","option4": "60","answer": "c"},
{"question": "31. Which is the place of articulation of the letter घ? ","option1":"मूर्धा ","option2": "तालू  ","option3": "दंतोष्टौ  ","option4": "कंठ:","answer": "d"},
{"question": "32. What does चु mean in इचुयशानां तालू? ","option1":"चवर्ग ","option2": "चकार ","option3": "चु-चू ","option4": "च-चा ","answer": "a"},
{"question": "33. कंट: means ............ . ","option1":"a) mouth ","option2": "b) tongue ","option3": "c) throat ","option4": "d) jaws ","answer": "c"},
{"question": "34. An Anunasika letter is called so because it is articulated in the _____ ","option1":"a) Nose ","option2": "b) mouth, closing the nose ","option3": "c) mouth and nose ","option4": "d) nose, closing the mouth","answer": "c"},
{"question": "35.The word बाह्यप्रयत्न  means ______ .","option1":"a) Effortless ","option2": "b) Internal effort ","option3": "c) External effort ","option4": "d) Both the efforts","answer": "c"},
{"question": "36. Which is the place of articulation of the letter ढ? ","option1":"कंठ: ","option2": "दंतोष्टौ  ","option3": "तालु ","option4": "मूर्धा ","answer": "d"},
{"question": "37. Choose the संवृत-अʔर from the following. ","option1":"a) उ ","option2": "b) ऊ ","option3": "c) अ ","option4": "d) आ ","answer": "c"},
{"question": "38. What are hard consonants called as? ","option1":"मृदुव्यंजनानी  ","option2": "कर्कषव्यंजनानी ","option3": "लघुव्यञ्जनानी  ","option4": "काटोरव्यंजनानी ","answer": "b"},
{"question": "39. What does the word मृदु mean? ","option1":"a) sweet ","option2": "b) hard ","option3": "c) soft ","option4": "d) short ","answer": "c"},
{"question": "40. द्य can be split as ....... + ....... . ","option1":"a) द् + य ","option2": "b) ज् + य ","option3": "c) घ् + य ","option4": "d) ध् + य ","answer": "a"},
{"question": "41. ज्ञ is a combination of ...... & ....... . ","option1":"a) च् + ञ ","option2": "b) छ् + ञ ","option3": "c) ज् + ञ ","option4": "d) झ् + ञ ","answer": "c"},
{"question": "42. How is सू + र + य: written?","option1":"सुर्य: ","option2": "सूरय ","option3": "सूरय: ","option4": "सूर्य:","answer": "d"},
{"question": "43. भ् + र + आ + न् + ति:  = .............. . ","option1":"भ्रन्ति:  ","option2": "भ्रनति: ","option3": "भ्रान्ति: ","option4": "भ्रानति:","answer": "c"},
{"question": "44.Who is the presiding deity of स्वराक्षराणी ","option1":"वाराही ","option2": "ब्राह्मी  ","option3": "महालक्ष्मी: ","option4": "दुर्गा ","answer": "c"},
{"question": "45. Which is the colour attributed to Goddess Mahalakshmi? ","option1":"a) Pink ","option2": "b) White ","option3": "c) Yellow ","option4": "d) Red ","answer": "b"},
{"question": "46. What is the quality associated with the colour white? ","option1":"a) सत्त्व","option2": "b) रजस्","option3": "c) तमस्","option4": "d) असत्त्व","answer": "a"},
{"question": "47. Who is the Source God of Chamundi Devatha? ","option1":"a) Indra ","option2": "b) Shani ","option3": "c) Yama ","option4": "d) Kubera ","answer": "c"},
{"question": "48. What is the Samskruta word that represents the Spinal cord? ","option1":"मेरुदण्ड:  ","option2": "एकदण्ड:  ","option3": "द्वीदण्ड:  ","option4": "त्रिदण्ड:  ","answer": "a"},
{"question": "49. मकार in प्रणव is associated with which God? ","option1":"ब्रम्हा ","option2": "शिव: ","option3": "विष्णु: ","option4": "गणेश:","answer": "b"},
{"question": "50. Which is the colour associated with रजो गुण:? ","option1":"a) Golden ","option2": "b) Blue ","option3": "c) Red ","option4": "d) Green ","answer": "c"},
{"question": "51. Identify the Devatha associated with कवर्ग","option1":"a) Indrani ","option2": "b) Varahi ","option3": "c) Vaishnavi ","option4": "d) Brahmi","answer": "d"},
{"question": "52. The chanting of ‘Om’ is said to be considered as ................... . ","option1":"a) Laya yoga ","option2": "b) Mantra yoga ","option3": "c) Raja yoga","option4": " d) Hatha yoga ","answer": "b"},
{"question": "53. Which letters come under स्पृष्ट category ? ","option1":"वर्गीय व्यञ्जनानि  ","option2": "अवर्गीय व्यञ्जनानि   ","option3": "अल्पप्राण व्यञ्जनानि  ","option4": "महाप्राण व्यञ्जनानि  ","answer": "a"},
{"question": "54. Which deity is associated with अन्त: स्था ? ","option1":"a) Maheshwari ","option2": "b) Chamunda ","option3": "c) Indrani ","option4": "d) Mahalakshmi ","answer": "c"},
{"question": "55. Which is the colour attributed to Vaishnavi ? ","option1":"a) Orange ","option2": "b) Black ","option3": "c) Grey ","option4": "d) Blue","answer": "d"},
{"question": "56. Which is considered to be the उत्पत्ति - स्थान of अकार in प्रणव ","option1":"हृदय ","option2": "नाभि ","option3": "कंठ ","option4": "ऊरु ","answer": "b"},
{"question": "57. The Energy channels in the body are called as ................ . ","option1":"a) Chakras ","option2": "b) Nadis ","option3": "c) Doshas ","option4": "d) Dhatus ","answer": "b"},
{"question": "58. What is the approximate number of Nadis found in the Human system according to Yogis ? ","option1":"a) 72,000 ","option2": "b) 65,000 ","option3": "c) 58,000 ","option4": "d) 84,000 ","answer": "a"},
{"question": "59. What is Ida ? ","option1":"अस्थि ","option2": "धातु ","option3": "नाडी  ","option4": "शुक्र ","answer": "c"},
{"question": "60. What is पिङ्गला otherwise known as? ","option1":"सूर्यनाडी   ","option2": "चंद्रनाडी   ","option3": "वायुनाडी   ","option4": "आकाशनाडी ","answer": "a"},
{"question": "61. Which is the central Nadi that flows between इडा & पिङ्गला?","option1":"गान्धारी  ","option2": "हस्तिजिह्वा  ","option3": "सुशुम्ना ","option4": "तेजस्विनी ","answer": "c"},
{"question": "62. प्रणवजप enhances the activation of .............. . ","option1":"कुण्डलिनी-शक्ती:  ","option2": "उपासना-शक्ती:   ","option3": "क्रिया-शक्ती:  ","option4": "इन्द्र-शक्ती: ","answer": "a"},
{"question": "63. मननात्  त्रायत  इित ................. . ","option1":"मन्त्र:  ","option2": "मन्त्रं ","option3": "मन्त्रा  ","option4": "मन्त्रे ","answer": "a"},
{"question": "64.The location of the alphabet अ: in the human body is ............. .","option1":"a) Mouth ","option2": "b) Nose ","option3": "c) Throat ","option4": "d) Shoulder ","answer": "a"},
{"question": "65. Stomach is the location of which Sanskrit alphabet? ","option1":"a) भ ","option2": "b) य ","option3": "c) क ","option4": "d) म","answer": "d"},
{"question": "66. The grace of the Devatha Indrani is said to confer .......... upon the Sadhaka. ","option1":"a) Patience ","option2": "b) Pleasure ","option3": "c) Power ","option4": "d) Position","answer": "d"},
{"question": "67. Who is the Source God of Mahalakshmi? ","option1":"a) Brahma ","option2": "b) Vishnu ","option3": "c) Shiva ","option4": "d) None of these","answer": "d"},
{"question": "68. What is the colour attributed to Vishnu? ","option1":"a) Black ","option2": "b) Blue ","option3": "c) White ","option4": "d) Pink ","answer": "b"},
{"question": "69. What does the colour of Vishnu signify? ","option1":"a) Playing","option2": " b) Battling ","option3": "c) Healing","option4": " d) Rejoicing ","answer": "c"},
{"question": "70. How many chakras are there in the human body? ","option1":"8","option2": "7","option3": "10","option4": "6","answer": "b"},
{"question": "71. Where is the alphabet अ located in the body according to the yogis? ","option1":"a) Knee ","option2": "b) Forehead ","option3": "c) Head ","option4": "d) Thigh ","answer": "b"},
{"question": "72. Which is the alphabet that is seen located in the Heart region? ","option1":"a) य ","option2": "b) च ","option3": "c) ण ","option4": "d) ड ","answer": "a"},
{"question": "73. Which is called the Root chakra ? ","option1":"a) मणिपूरक","option2": "b) सहस्रार ","option3": "c) मूलाधार ","option4": "d) आज्ञा ","answer": "c"},
{"question": "74. Which chakra is activated when the sound उ is uttered as part of the प्रणवजप? ","option1":"a) अनाहत ","option2": "b) स्वाधिष्ठान ","option3": "c) मणिपूरक ","option4": "d) सहस्रार","answer": "a"},
{"question": "75. The word ‘Meditation’ can be translated as ............ . ","option1":"a) योग ","option2": "b) धारणा ","option3": "c) प्राणायाम","option4": "d) ध्यान","answer": "d"},


]
