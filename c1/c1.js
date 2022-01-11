var oldIndex;
var newQuoteIndex = 0;
var shlokas;
var shlokas_12, shlokas_15, shlokas_16;
var questions;
var nScore = 0;
var blnScored = false;

function loadWords() {
	if(window.localStorage.getItem("chapter") != '')  { document.getElementById('chapters').value = window.localStorage.getItem("chapter") };
	if(window.localStorage.getItem("choice") != '')  { document.getElementById('choice').value = window.localStorage.getItem("choice") };
	//determineChapter()
	//questions = qbPhonetics;
	nextQuote();
}

function nextQuote() {
	
	//If no answer is there, highlight the right answer for a second and move.
	if (newQuoteIndex != 0) {
		showAnswer();
	}
	clear();
	
	determineChapter();
	determindNextQuestionNumber();
	document.getElementById("question").innerHTML = questions[newQuoteIndex].question;
	document.getElementById('a').innerHTML = questions[newQuoteIndex].option1;
	document.getElementById('b').innerHTML = questions[newQuoteIndex].option2;
	document.getElementById('c').innerHTML = questions[newQuoteIndex].option3;
	document.getElementById('d').innerHTML = questions[newQuoteIndex].option4;
	
	blnScored = false;
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
	if (cmbChapter.value == 1) questions = qbPhonetics;
	if (cmbChapter.value == 2) questions = qbBhagwadGita;
	if (cmbChapter.value == 3) questions = qbSanathanaDharma;
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
	
	//If no answer is selected, highlight the answer.
	if(document.querySelector('input[name="options"]:checked') == null) {
		strExpectedValue = questions[newQuoteIndex].answer;
		document.getElementById(strExpectedValue).classList.add('bg-success');
		return;
	}
	strActualValue = document.querySelector('input[name="options"]:checked').value;
	strExpectedValue = questions[newQuoteIndex].answer;
	document.getElementById("answer").innerHTML = 'Answer: ' + questions[newQuoteIndex].answer;
	
	//COLOR it accordingly
	if(strActualValue != strExpectedValue) { document.getElementById(strActualValue).classList.add('bg-danger');  document.getElementById(strExpectedValue).classList.add('bg-success'); }
	if(strActualValue == strExpectedValue) { 
		document.getElementById(strActualValue).classList.add('bg-success');
		if (blnScored == false) { nScore = nScore + 1; blnScored = true; }
		document.getElementById('lblScore').innerText = 'Score: ' + nScore;
	}
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


qbBhagwadGita =  [


{"question": "1. Why did Arjuna start trembling, when he saw the Kaurava army in full force at the beginning of the Kurukshetra war ?","option1":"a. He was thrilled, and eager for battle.","option2": "b. He started to develop a fever.","option3": "c. He was upset at the thought of fighting his family members.","option4": "d. He was scared that he might not be able to win against the seasoned warriors in the Kaurava army.","answer": "d"},
{"question": "2. Arjuna's bow, the _______________ started slipping from his hand.","option1":"a. Sharnga","option2": "b. Kodanda","option3": "c. Gandiva","option4": "d. Pinaka","answer": "c"},
{"question": "3. Arjuna's symptoms after viewing the Kaurava army, indicate the follwing mental condition :","option1":"a. Depression","option2": "b. Obsessive compulsive disorder","option3": "c. ADHD","option4": "d. Bipolar disorder","answer": "a"},
{"question": "4. When he saw Arjuna's dilemma, Krishna  _____________________.","option1":"a. Drove Arjuna away from the battlefield.","option2": "b. Praised Arjuna for his compassion towards his family.","option3": "c. Reprimanded Arjuna for the display of indecision.","option4": "d. Kept silent.","answer": "c"},
{"question": "5. The three phases of understanding and expressing the absolute truth are :","option1":"a. Brahman, Paramātmā and Bhagavān.","option2": "b. Tamas, Rajas and Sattva.","option3": "c. Brahma, Vishnu and Shiva.","option4": "d. Pataala, Prithvi and Swarga.","answer": "a"},
{"question": "6. Krishna observes that Arjuna displays ______________ .","option1":"a. Wisdom","option2": "b. Compassion","option3": "c. Impurities","option4": "d. Love.","answer": "c"},
{"question": "7. The supreme personality who posesses all riches, all strength and all fame, all beauty, all knowledge and all renunciation is called ___________.","option1":"a. Bhagavan","option2": "b. Shiva","option3": "c. Brahma","option4": "d. Indra","answer": "a"},
{"question": "8. By nature's law, the human form of life is specifically meant for self-realization in the form of ___________________________.","option1":"a. Sattva, Rajas or Tamas.","option2": "b. Karma yoga, Jnana yoga or Bhakti yoga.","option3": "c. Kshetra, Purusha and Prakriti.","option4": "d. Brahman, Paramatma and Bhagavan.","answer": "b"},
{"question": "9. Those who are engaged in sense gratification require purification by means of the ___________.","option1":"a. Sadhanas","option2": "b. Karmas","option3": "c. Yogas","option4": "d. Yagnas","answer": "d"},
{"question": "10. The yagna system is planned in such a way that sensory conscious persons may satisfy their desires ___________________________ in the reaction of sense gratificatory work.","option1":"a. without becoming entangled","option2": "b. while becoming entangled","option3": "c. without paying attention","option4": "d. while completely indulging","answer": "a"},
{"question": "11. People who are attached to _____________ are unable to understand the supreme absolute truth.","option1":"a. materialism","option2": "b. spirituality","option3": "c. bhakti","option4": "d. gnana","answer": "a"},
{"question": "12. Bhakti begins with a preliminary desire for ____________ .","option1":"a. Bhagavan","option2": "b. Supersoul","option3": "c. Self realization.","option4": "d. Freedom","answer": "c"},
{"question": "13. By devotional service under the guidance of a _______________, we become free from material attachment.","option1":"a. spiritual master","option2": "b. teacher","option3": "c. guide","option4": "d. gnani","answer": "a"},
{"question": "14. Even the most sinful sinner can cross the ocean of misery through the boat of ____________________________.","option1":"a. enlightenment","option2": "b. bhakti","option3": "c. transcendental knowledge","option4": "d. wisdom","answer": "c"},
{"question": "15. Knowledge in Krishna consciousness can be achieved by a faithful man who firmly believes in ___________.","option1":"a. Narayana","option2": "b. Krishna","option3": "c. Bhagavan","option4": "d. Maha Vishnu","answer": "b"},
{"question": "16. Faith is attained by discharge of devotional service and by chanting __________________________________________________________.","option1":"a. Bhajans.","option2": "b. Om Tat Sat.","option3": "c. Hare Krishna Hare Krishna , Krishna Krishna Hare Hare / Hare Rama Hare Rama Rama Rama Hare Hare.","option4": "d. Vithala naama.","answer": "c"},
{"question": "17. A person who controls the _____________ can easily attain perfection in knowledge of Krishna Consciousness.","option1":"a. senses","option2": "b. mind","option3": "c. breath","option4": "d. food","answer": "a"},
{"question": "18. The material world is a manifestation of the three modes of material nature, called the _____________.","option1":"a. Pradhana","option2": "b. Brahman","option3": "c. Adidevatha","option4": "d. Maya","answer": "a"},
{"question": "19. The ________________ says that everything is related to Krishna or the Supreme Brahman, and everything belongs to him.","option1":"a. Kathopanishad","option2": "b. Mandukya Upanishad","option3": "c. Ishopanishad","option4": "d. Brihadaranyaka Upanishad","answer": "c"},
{"question": "20. The lord as ______________  is present in both the dog, the cow, the elephant and persons of all castes.","option1":"a. Brahman","option2": "b. Paramatma","option3": "c. Atma","option4": "d. Bhagavan","answer": "b"},
{"question": "21. The supreme lord is present in everybody's ______________ as Paramatma.","option1":"a. mind","option2": "b. body","option3": "c. ego","option4": "d. heart","answer": "d"},
{"question": "22. A devotee who is constantly engaged in Krishna consciousness very quickly attains ___________________  in the Supreme.","option1":"a. advancement","option2": "b. bliss","option3": "c. liberation","option4": "d. happiness","answer": "c"},
{"question": "23. The state of life where one does not feel the pangs of material miseries is called ________________.","option1":"a. Brahma Nirvana","option2": "b. Ananda","option3": "c. Sukha","option4": "d. Yoga","answer": "a"},
{"question": "24. The devotee who is in Krishna consciousness can elevate himself simply by thinking of ____________ constantly.","option1":"a. Maha Vishnu","option2": "b. Radha","option3": "c. Narayana","option4": "d. Krishna","answer": "d"},
{"question": "25. For him who has controlled the mind, the mind is the best of ________________.","option1":"a. teachers","option2": "b. friends","option3": "c. slaves","option4": "d. partners","answer": "b"},
{"question": "26. Unless the _____________ is controlled, the practise of yoga is a waste of time.","option1":"a. mind","option2": "b. heart","option3": "c. breath","option4": "d. soul","answer": "a"},
{"question": "27. Real yoga entails meeting the _______________ within the heart and then following his dictation.","option1":"a. Brahman","option2": "b. Paramatma","option3": "c. Ishvara","option4": "d. Bhagavan","answer": "b"},
{"question": "28. Anyone who eats for pleasure while not offering it to Krishna is eating in _______________.","option1":"a. bhakti","option2": "b. sadhana","option3": "c. sin","option4": "d. consciousness","answer": "c"},
{"question": "29. One who sleeps more than 6 hours out of 24 is influenced by the mode of _______________.","option1":"a. passion","option2": "b. ignorance","option3": "c. goodness","option4": "d. detachment","answer": "b"},
{"question": "30. One who _________ more than required will dream very much while sleeping, and will hence sleep more than required.","option1":"a. works","option2": "b. eats","option3": "c. prays","option4": "d. enjoys","answer": "b"},
{"question": "31. Krishna consciousness is the development of ______________ of Krishna.","option1":"a. freedom","option2": "b. friendship","option3": "c. attachment","option4": "d. love","answer": "d"},
{"question": "32. Arjuna is called Partha because he is the ___________ of Prtha.","option1":"a. son","option2": "b. grandchild","option3": "c. husband","option4": "d. father","answer": "a"},
{"question": "33. One who takes directly to ________________________, automatically knows about Brahmajyoti and Paramatma in full.","option1":"a. Sanyasa","option2": "b. Krishna Consciousness","option3": "c. Bhakti Marga","option4": "d. Vanaprastha","answer": "b"},
{"question": "34. The lord says to Arjuna 'Tach chrnu' or __________________.","option1":"a. hear from me","option2": "b. speak to me","option3": "c. think of me","option4": "d. pray to me","answer": "a"},
{"question": "35. Developing _________________ frees us from the modes of passion and ignorance, and thus lust and avarice are diminished.","option1":"a. communication skills","option2": "b. good sleep","option3": "c. strong body","option4": "d. devotional services","answer": "d"},
{"question": "36. The divine material energy of Krishna is called ___________.","option1":"a. Brahman","option2": "b. Maya","option3": "c. Ishwara","option4": "d. Kshetra","answer": "b"},
{"question": "37. The conditioned soul is called __________ or eternally conditioned.","option1":"a. atma","option2": "b. nithya-baddha ","option3": "c. brahman","option4": "d. parkriti","answer": "b"},
{"question": "38. Four classes of men surrender to Krishna - the distressed, the desirer of wealth, the inquisitive and the _____________________ ","option1":"a. renunciate","option2": "b. one searching for knowledge of the absolute","option3": "c. devotee","option4": "d. pleasure seeker","answer": "b"},
{"question": "39. Arjuna addresses Krishna as ________________ or supreme person, because he knows him to be the supreme authority capable of giving definitive answers.","option1":"a. Keshava","option2": "b. Madhava","option3": "c. Paramatma","option4": "d. Purushottama","answer": "d"},
{"question": "40. According to the Vedic dictionary, ____________ refers to the mind, soul, body and senses.","option1":"a. Atma","option2": "b. Brahman","option3": "c. Kshetra","option4": "d. Purusha","answer": "a"},
{"question": "41. Brahman is indestructible and eternally existing, and its _______________ is not changed at any time.","option1":"a. colour","option2": "b. shape","option3": "c. form","option4": "d. constitution","answer": "d"},
{"question": "42. Beyond Brahman there is ___________.","option1":"a. Parabrahman","option2": "b. Supersoul","option3": "c. Bhagavan","option4": "d. Atma","answer": "a"},
{"question": "43. In vedic literature, the living entity is called __________ and brahman, but never parabrahman.","option1":"a. paramatma","option2": "b. jivatma","option3": "c. atma","option4": "d. bhagavan","answer": "b"},
{"question": "44. The ____________ Upanishad describes the vedic sacrificial process.","option1":"a. Taittiriya ","option2": "b. Mandukya","option3": "c. Brihadaranyaka","option4": "d. Chandogya","answer": "d"},
{"question": "45. In material nature, the jivatma may take a body from any of the ____________ forms of life.","option1":"a. 8400000","option2": "b. 1800000","option3": "c. 2200000","option4": "d. infinite","answer": "a"},
{"question": "46. To attain material heavenly planets and enjoy their facilities, the jivatma sometimes performs ____________.","option1":"a. yoga","option2": "b. sacriﬁces (yajña)","option3": "c. sadhana","option4": "d. sanyasa","answer": "b"},
{"question": "47. The physical nature, which is ____________ changing, is called adhibhūta [the material manifestation]","option1":"a. never","option2": "b. constantly","option3": "c. sometimes","option4": "d. rarely","answer": "b"},
{"question": "48. The universal form of the Lord, which includes all the demigods, like those of the sun and moon, is called _______________.","option1":"a. bhagavan","option2": "b. parmatma","option3": "c. adhidaiva","option4": "d. purusha","answer": "c"},
{"question": "49. The Supreme Lord, represented as the Supersoul in the heart of every embodied being, is called _____________ or the Lord of sacriﬁce.","option1":"a. adhidhaiva","option2": "b. adhiyajña","option3": "c. purusha","option4": "d. prakriti","answer": "b"},
{"question": "50. The Supersoul is the _____________ of the individual soul’s activities and is the source of the soul’s various types of consciousness.","option1":"a. doer","option2": "b. inflencer","option3": "c. origin","option4": "d. witness","answer": "d"},
{"question": "51. The __________ is seated beside the individual soul.","option1":"a. heart","option2": "b. brahman","option3": "c. bhagavan","option4": "d. Supersoul","answer": "d"},
{"question": "52. When Krishna refers to himself as 'dhata', he is calling himself the '_____________'.","option1":"a. witness","option2": "b. influencer","option3": "c. creator","option4": "d. illusion","answer": "c"},
{"question": "53. Whatever we want to know through the ________ is but a step toward understanding Krishna.","option1":"a. Vedas","option2": "b. Upanishads","option3": "c. Granthas","option4": "d. Puranas","answer": "a"},
{"question": "54. __________ is also the Rig, Yajur and Sama vedas.","option1":"a. Krishna","option2": "b. Brahma","option3": "c. Shiva","option4": "d. Saraswathi","answer": "a"},
{"question": "55. When offered with love and _________, Krishna accepts even plain water.","option1":"a. bhakti","option2": "b. silence","option3": "c. music","option4": "d. dance","answer": "a"},
{"question": "56. Only the remains of sacrifices made to _______________ are fit for consumption by those seeking release from material entanglement.","option1":"a. Devatas","option2": "b. Krishna","option3": "c. Bhagavan","option4": "d. Ishwara","answer": "b"},
{"question": "57. Whatever we do, eat, or give away should be done as _________ to Krishna.","option1":"a. dance","option2": "b. offering","option3": "c. poem","option4": "d. payment","answer": "b"},
{"question": "58. When we do anything as an offering for Krishna it is called '______________'.","option1":"a. pooja","option2": "b. prarthana","option3": "c. archana","option4": "d. vandana","answer": "c"},
{"question": "59. When an action is contaminated by ___________ reactions, it becomes auspicious or inauspicious.","option1":"a. illusory","option2": "b. gross","option3": "c. material","option4": "d. human","answer": "c"},
{"question": "60. The word 'aja' means '______________'.","option1":"a. prominent","option2": "b. unborn","option3": "c. pious","option4": "d. sacred","answer": "b"},
{"question": "61. The __________ Veda says that it was Krishna who,  in the beginning instructed Brahma in Vedic knowledge.","option1":"a. Yajur","option2": "b. Rig","option3": "c. Atharva","option4": "d. Sama","answer": "c"},
{"question": "62. From __________________, Brahma and the patriarchs are born.","option1":"a. Krishna","option2": "b. Shiva","option3": "c. Brihaspati","option4": "d. Narayana","answer": "d"},
{"question": "63. In the beginning of the creation there was only the Supreme Personality _______________.","option1":"a. Aum","option2": "b. Shiva","option3": "c. Narayana","option4": "d. Bhagavan","answer": "c"},
{"question": "64. As per the Maha -Upanishad Lord Shiva was born from the ____________ of the Supreme Lord.","option1":"a. forehead","option2": "b. arm","option3": "c. eyes","option4": "d. throat","answer": "a"},
{"question": "65. When a person knows the goal of life but is addicted to the fruits of activities, he is acting in _________.","option1":"a. karma-yoga","option2": "b. gnana yoga","option3": "c. bhakti yoga","option4": "d. buddhi yoga","answer": "a"},
{"question": "66. When a person knows that the goal is Kṛṣṇa but he takes pleasure in mental speculations to understand Kṛṣṇa, he is acting in _______________.","option1":"a. karma-yoga","option2": "b. jñāna-yoga","option3": "c. bhakti yoga","option4": "d. buddhi yoga","answer": "b"},
{"question": "67. When a person knows the goal and seeks Krishna completely in Krishna consciousness and devotional service, he is acting in ____________________.","option1":"a. karma-yoga","option2": "b. jñāna-yoga","option3": "c. bhakti yoga","option4": "d. buddhi yoga","answer": "c"},
{"question": "68. Krishna first appeared before his parents Devaki and ____________ in a four handed form.","option1":"a. Nanda","option2": "b. Vasudeva","option3": "c. Ugrasena","option4": "d. Akrura","answer": "b"},
{"question": "69. 'Su-durdarsham' means _______________________.","option1":"a. very easy to see","option2": "b. very difficult to see","option3": "c. very pleasing to see","option4": "d. very attactive to see","answer": "b"},
{"question": "70. Innumerable universes enter into and come from Maha Vishnu simply by his ___________ process.","option1":"a. blinking","option2": "b. breathing","option3": "c. waking","option4": "d. sleeping","answer": "b"},
{"question": "71. The word 'maitrah' means '__________'.","option1":"a. friendly","option2": "b. pretty","option3": "c. sister","option4": "d. cousin","answer": "a"},
{"question": "72. _______________ means that a devotee does not attach much importance to the pains and trouble pertaining to the body.","option1":"a. Nirguna","option2": "b. Nirvana","option3": "c. Mumukshu","option4": "d. Nirmama","answer": "d"},
{"question": "73. The term 'prakriti' means '__________________'.","option1":"a. planet","option2": "b. plants","option3": "c. nature","option4": "d. flowers","answer": "c"},
{"question": "74. The term 'purusha' means '________________'.","option1":"a. masculine","option2": "b. enjoyer","option3": "c. giant","option4": "d. son of Puru.","answer": "b"},
{"question": "75. 'Kshetragnya' means 'knower of the _______________'.","option1":"a. arts","option2": "b. warfare","option3": "c. field","option4": "d. politics","answer": "c"},
{"question": "76. The lord's spiritual effulgence is referred to as '_____________________'","option1":"a. brahma jyoti","option2": "b. brahma vidya","option3": "c. Atma vidya","option4": "d. Brahman","answer": "a"},
{"question": "77. The material elements that cover the brahma jyoti are referred to as ________________.","option1":"a. maya","option2": "b. prakriti","option3": "c. purusha","option4": "d. mahat-tattva","answer": "d"},
{"question": "78. The word 'prabhu' means '_____________________'.","option1":"a. teacher","option2": "b. master","option3": "c. God","option4": "d. husband of Prabha","answer": "b"},
{"question": "79. Rajas is the mode of passion and leads to ______________.","option1":"a. illusion","option2": "b. greed","option3": "c. bliss","option4": "d. war","answer": "b"},
{"question": "80. Tamas is the mode of _______________ and leads to madness and delusion.","option1":"a. darkness","option2": "b. ignorance","option3": "c. failure","option4": "d. inertia","answer": "b"},
{"question": "81. The name 'Yogeshwarah' means master of '_____________'.","option1":"a. yoga","option2": "b. mysticism","option3": "c. illusion","option4": "d. arts","answer": "b"},
{"question": "82. Shivah means eternally ____________.","option1":"a. pure","option2": "b. blissful","option3": "c. constant","option4": "d. angry","answer": "a"},
{"question": "83. Shasvatah means that which remains .","option1":"a. young at all times","option2": "b. eternal","option3": "c. constant","option4": "d. the same at all times","answer": "d"},
{"question": "84. Saakshee means ____________________.","option1":"a. beautiful eyes","option2": "b. witness","option3": "c. doer","option4": "d. influencer","answer": "b"},
{"question": "85. Sumedhah means one who has pure ______________.","option1":"a. consciousness","option2": "b. intelligence","option3": "c. bliss","option4": "d. ego","answer": "b"},
{"question": "86. Naikaroopah means one who has ____________ forms.","option1":"a. infinite","option2": "b. no","option3": "c. finite","option4": "d. nine","answer": "a"},
{"question": "87. Brihadroopa means ______________ and infinite form.","option1":"a. small","option2": "b. subtle","option3": "c. vast","option4": "d. solid","answer": "c"},
{"question": "88. Sarvapraharanayudhah means one who has all kinds of _____________ for all kinds of assault and fight.","option1":"a. instruments","option2": "b. weapons / tools","option3": "c. skills","option4": "d. strategies","answer": "b"},
{"question": "89. Praanadah means one who gives ___________ to all.","option1":"a. boons","option2": "b. mukti","option3": "c. praana","option4": "d. birth","answer": "c"},
{"question": "90. Mahaasvanaha means one who posesses a _________________.","option1":"a. huge serpent","option2": "b. deep breath","option3": "c. large weapon","option4": "d. thundering voice","answer": "d"},
{"question": "91. Medhavee means ___________.","option1":"a. child of Medhas","option2": "b. devoid of ego","option3": "c. supremely intelligent","option4": "d. great cowherd","answer": "c"},
{"question": "92. Dhanvee means one who has a mighty __________________.","option1":"a. bow","option2": "b. wealth","option3": "c. cow","option4": "d. weapon","answer": "a"},
{"question": "93. Satyamedhah means 'one whose ________________ never fails'","option1":"a. effort","option2": "b. aim","option3": "c. truth","option4": "d. intelligence","answer": "d"},
{"question": "94. Mahaabalah means one who has ______________ _.","option1":"a. supreme strength","option2": "b. supreme weapons","option3": "c. supreme wealth","option4": "d. Balarama","answer": "a"},
{"question": "95. Vishwakarma means __________________________ of the world of objects.","option1":"a. observer","option2": "b. creator","option3": "c. influencer","option4": "d. designer","answer": "b"},
{"question": "96. Vikramee means one who is full of ___________________.","option1":"a. prowess","option2": "b. vision","option3": "c. skill","option4": "d. strength","answer": "a"},
{"question": "97. Akshobhyah means one with infinite ___________.","option1":"a. wealth","option2": "b. eyes","option3": "c. skill","option4": "d. patience","answer": "d"},
{"question": "98. Amaanee means one who has no __________________.","option1":"a. darkness","option2": "b. pride","option3": "c. false vanity","option4": "d. disturbance","answer": "c"},
{"question": "99. Avyaah means ________________________.","option1":"a. eternal","option2": "b. changeless","option3": "c. constant","option4": "d. enchanting","answer": "b"},
{"question": "100. Chaturasrah means one who  _________________________ .","option1":"a. dispenses equal justice to all","option2": "b. lives in a four sided residence","option3": "c. who owns four worlds","option4": "d. who has four weapons","answer": "a"},



]

qbSanathanaDharma =  [

{"question": "1. Consider the following statement (s) is/are correct related to the historical literary sources of Ancient India?, I. The ‘Puranas’ serves as a source of historical facts of ancient India. There are eighteen Puranas. They provide historical information of various dynasties., II. Apart from the Kurukshetra war, the Mahabharata contains various accounts of social life and religious thinking of the people of ancient India","option1":"A. Only I","option2": "B. Only II","option3": "C. Both I and II","option4": "D. Neither I nor II","answer": "c"},
{"question": "2. The words Satyameva Jayate in the State Emblem adopted by the Government of India have been taken from which Upanishad?","option1":"A. Aitareya Upanishad","option2": "B. Mundaka Upanishad","option3": "C. Adhyatma Upanishad","option4": "D. Prasna Upanishad","answer": "b"},
{"question": "3.  The famous dialogue between Nachiketa and Yama is mentioned in the","option1":"A. Chhandogyopanishad","option2": "B. Mundakopanishad","option3": "C. Kathopanishad","option4": "D. Kenopanishad","answer": "c"},
{"question": "4. Which of the following statement(s) is/are correct regarding the Dharmasutras and the Smritis? ,I. Texts were considered as the rules and regulations for the general public and for the rulers., II. Dharmasutras and the Smritis can also be termed in the modern concept as the constitution and law books for the ancient Indian polity and society","option1":"A. Only I","option2": "B. I and II","option3": "C. Both I ; II","option4": "D. None of the above","answer": "c"},
{"question": "5. Who established the five Mathas (monasteries) Sringeri, Badrinath, Dwarka,  Puri and Kanchipuram?","option1":"A. Ramanuj","option2": "B. Ashoka","option3": "C. Shankaracharya","option4": "D. Madhav Vidhyaranya","answer": "c"},
{"question": "6. Which Veda deals with magical hymn or charms of spell?","option1":"A. Rigveda","option2": "B. Samveda","option3": "C. Atharvaveda","option4": "D. Yajurveda","answer": "c"},
{"question": "7. Which of the following statement (s) is/ are correct related to the Atharva Veda?,I. The Atharva Veda basically consists of charms and spells that were prevalent at that time in the society.,II. The Atharva Veda presents a portrait of the Vedic society. One can find an independent and parallel stream of knowledge and thought in the Atharva Veda","option1":"A. Only I","option2": "B. Only II","option3": "C. Both I ; II","option4": "D. Neither I nor II","answer": "c"},
{"question": "8. The Veda that contains charms and spells toward off evils and diseases is","option1":"A. Rigveda","option2": "B. Atharvaveda","option3": "C. Samaveda","option4": "D. Yajurveda","answer": "b"},
{"question": "9. Who wrote the famous Kural which in verse deals with many aspects of life and Sanatana Dharma?","option1":"A. Thiruvalluvar","option2": "B. Avvaiyar","option3": "C. Shankaracharya","option4": "D. Rishi Agastya","answer": "a"},
{"question": "10. The system of philosophy with which the name of Kapila is prominently associated is","option1":"A. Purva Mimamsa","option2": "B. Sankhya","option3": "C. Nyaya","option4": "D. Uttara Mimamsa","answer": "b"},
{"question": "11. Which of the following Vedas is not a part of Vedatrayi?","option1":"A. Rig Veda","option2": "B. Yajur Veda","option3": "C. Sama Veda","option4": "D. Atharva Veda","answer": "d"},
{"question": "12. Which is known as book of Melody?","option1":"A. Rigveda","option2": "B. Samveda","option3": "C. Atharvaveda","option4": "D. Yajurveda","answer": "b"},
{"question": "13. The Veda, which is partly a prose work, is","option1":"A. Atharvaveda","option2": "B. Samaveda","option3": "C. Yajurveda","option4": "D. Rigveda","answer": "c"},
{"question": "14. Which statement (s) is/are correct about Ancient Indian literature? ,I. Bramhanas and Aryankas followed by philosophical doctrines of Upanishads, II. Bramhanas are detailed explanation about Vedic literature and instructions","option1":"A. Only I","option2": "B. Only II","option3": "C. Both I ; II","option4": "D. Neither I nor II","answer": "c"},
{"question": "15. Which of the following statements is/are correct regarding the Vedic literature I. Vedic literature, mainly the four Vedas i.e. Rig, Yajur, Sama and Atharva Vedas, are entirely in Samskrt language, which can be called the Vedic language.,II. The vocabulary of Vedic literature contains a wide range of meaning and at times different in grammatical usages","option1":"A. Only I","option2": "B. Only II","option3": "C. Both I ; II","option4": "D. None of the above","answer": "c"},
{"question": "16. Which of the following deals with concepts about origin of universe, death and birth, material and spiritual world?","option1":"A. Rig Vedas","option2": "B. Atharva Vedas","option3": "C. Aryankas","option4": "D. Upanishads","answer": "d"},
{"question": "17. Which Indian literature is a collection of 1028 hymns written in Vedic Sanskrit?","option1":"A. Rig Vedas","option2": "B. Sama Vedas","option3": "C. Bramhanas","option4": "D. Aryankas","answer": "a"},
{"question": "18. Who among the following occupied the supreme position in the Later Vedic pantheon?","option1":"A. Indra","option2": "B. Prajapati","option3": "C. Agni","option4": "D. Varuna","answer": "b"},
{"question": "19. Consider the following statement (s) is/are correct related to the literature of Sanatana Dharma? I. The earliest known literature of Sanatana Dharma was the Rig Veda which is a collection of 1048 hymns in Vedic Sanskrit., II. Most of the hymns are in praise of different Vedic deities and were intended for recitation at the Yajnas or sacrifices","option1":"A. Only I","option2": "B. Only II","option3": "C. Both I and II","option4": "D. Neither I nor II","answer": "c"},
{"question": "20. Where is the longest corridor of the temple?","option1":"A. Shreerangam","option2": "B. Madurai","option3": "C. Tiruchendur","option4": "D. Rameshwaram","answer": "d"},
{"question": "21. Which is a treatise on the science of governance?","option1":"A. Mahabharata","option2": "B. Ramayana","option3": "C. Kautilya’s Arthashastra","option4": "D. Chandrawati Ramayana","answer": "c"},
{"question": "22. Which of the following hymns in Sanatana Dharma is known as Apaurusheya?","option1":"A. Vedas","option2": "B. Bramhanyas","option3": "C. Upanishads","option4": "D. Aranyakas","answer": "a"},
{"question": "23. Upanishads are books on","option1":"A. Politics","option2": "B. Philosophy","option3": "C. Medicine","option4": "D. Social life","answer": "b"},
{"question": "24. Which one of the following is not correctly matched?","option1":"A. Kali yuga – 432,000 years","option2": "B. Dwapara yuga – 864,000 years","option3": "C. Tretha yuga : 1,296,000 years","option4": "D. Krta yuga : 4,320,000 years","answer": "d"},
{"question": "25. Sanatana Dharma is :","option1":" a. The Eternal Righteous Duties","option2": " b. a monolithic religion","option3": " c. only practiced in India","option4": " d. a religion that began in the first centuries of the Common Era","answer": "a"},
{"question": "26. Which of these describes atman (that is jeevaatmaa)?","option1":" a. a way of being in the world","option2": " b. one's eternal soul or self","option3": " c. the ritual of death","option4": " d. the karma each person takes on","answer": "b"},
{"question": "27. The repeating pattern of rebirth-death-rebirth continues because of ","option1":" a. one's karma determining an individual's destiny","option2": " b. God","option3": " c. moksha","option4": " d. trimurti","answer": "a"},
{"question": "28. The essential realization that leads to moksha is _________.","option1":" a. one's dharma","option2": " b. one's karma determining an individual's destiny","option3": " c. when there is a proper relationship between God and atman (jeeva) through love to God (i.e., Bhakti or devotion)","option4": " d. the oneness of God and nature","answer": "c"},
{"question": "29. Which of the four Purusha Arthas indicates salvation or getting rid off the cycle of rebirth-death-rebirth?","option1":" a. Dharma Artha ","option2": " b. Artha Artha ","option3": " c. Kama Artha, ","option4": " d. Moksha Artha ","answer": "d"},
{"question": "30 Sanatana Dharma presuppose the authority of what texts?","option1":" a. the Upanishads","option2": " b. the Ramayana","option3": " c. the Mokshas","option4": " d. the Vedas","answer": "d"},
{"question": "31. How many are the parts of Vedas ? ","option1":" a. 4","option2": " b. 6","option3": " c. 8","option4": " d. 1","answer": "a"},
{"question": "32. The Laws of Manu contain which of these?","option1":" a. the philosophic writings of Manu","option2": " b. the only treatise on the Vedas","option3": " c. legal and moral treatises","option4": " d. the Hindu creation myth","answer": "c"},
{"question": "33. Did Mahatma Gandhi strongly rely on Sanatana Dharma ?","option1":"a. Yes","option2": "b. No","option3": "","option4": "","answer": "a"},
{"question": "34. In the Bhagavad-Gita, Arjuna's charioteer advises him to join the battle without a desire for the results of the action, for it is Arjuna's _________ as a warrior to fight.","option1":" a. dharma","option2": " b. karma","option3": " c. moksha","option4": " d. samsara","answer": "a"},
{"question": "35. What is the name for lines of poetry by the ninth-century poet Andaal, a devotee-poet of Bhagwan Krishna,  for capturing in verse her experiences of the divine?","option1":" a. sacred knowledge","option2": " b. secret sorrows","option3": " c. secret garden","option4": " d. Thiruppaavai, Naachiyaar Thirumozhi","answer": "d"},
{"question": "36. Which text includes instructions on how to correctly conduct the ritual of cremation so the deceased can journey to his or her ancestors?","option1":" a. Upanishads","option2": " b. Itihaasaas","option3": " c. Rig-Veda and Garuda Puraanam","option4": " d. the Yoga Sutra","answer": "d"},
{"question": "37. Who created the school of philosophy called Advaita Vedanta?","option1":" a. Adi Shankara","option2": " b. Krishna","option3": " c. Shiva","option4": " d. Gandhi","answer": "a"},
{"question": "38. The meaning and use of Om is explained is explained by _________.","option1":" a. the Vedas","option2": " b. Upanishads","option3": " c. the Sutras","option4": " d. the Ramayana","answer": "b"},
{"question": "39. In which holy verses texts are deities portrayed as intimately involved in the affairs of humans, sometimes appearing to devotees to deliver rewards, punishments, or warnings?","option1":" a. the Puranas","option2": " b. the Vedas","option3": " c. the Upanishads","option4": " d. the Ramayana","answer": "a"},
{"question": "40. Sanata Dharma boasts of no single creed, ruling body, founder, founding narrative, or sacred text.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "41. In Sanata Dharma there is no contradiction in worshiping many deities while asserting the oneness of God.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "42. Sanatana Dharma or Sanatana Hinduism is a monotheistic religion.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "b"},
{"question": "43. Atman is one's eternal soul or self.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "44. Ultimate liberation from samsara is known as Bramhan.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "b"},
{"question": "45. The most common form of devotion is called bhakti, devotion to a particular deity.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "46. Sanatana Dharma followers (Hindus) revere the Vedas, even though the majority of adherents are ignorant of their content.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "47. Arjuna is advised to throw down his sword as a signal of nonviolence, at the battle at Kurukshetra.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "b"},
{"question": "48. Krishna teaches about karma-marga in the Bhagavad Gita.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "49. The Sanatana Dharma followers (Hindus) view of bhaktiis that to love one of the finite manifestations of God is to love the infinite God of everything .","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "50. Sanatana Dharma followers (Hindus)  agree that the cosmos formed itself before time began.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "b"},
{"question": "51. The Bhagavad Gita is contained within the Mahabharata.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "52. In Ramayana, Rama is the incarnation of the God Vishnu.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "53. In the Puranas, deities are portrayed as intimately involved in the affairs of humans, sometimes appearing to devotees to deliver rewards, punishments, or warnings.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "54. Worship of the deity or a spiritual teacher at a home shrine is one of the most significant ways in which Sanatana Dharma followers (Hindus)   express their devotion.","option1":" a. True","option2": " b. False","option3": "","option4": "","answer": "a"},
{"question": "55. Rama was","option1":" a. A prince","option2": "  b. A priest","option3": "  c. A sage","option4": "  d. A philosopher","answer": "a"},
{"question": "56. The word karma refers to","option1":"  a. Bad things that happen","option2": "  b. The fruit of action","option3": "  c. The result of previous mistakes","option4": "  d. Action","answer": "d"},
{"question": "57. Bramhan is","option1":"  a. The God of Time","option2": "  b. The God of Creation","option3": "  c. The all-pervasive one supreme consciousness","option4": "  d. A priest","answer": "c"},
{"question": "58. Number of Species (bodies) available as choice for the soul can occupy.","option1":"  a. One","option2": "  b. Ten","option3": "  c. one lakh","option4": "  d. 84,00,000 (8.4 Millions) ","answer": "d"},
{"question": "59. Who Is The Origin Of All Living Beings? ","option1":"  a. Nature","option2": "  b. the leaders","option3": "  c. forefathers","option4": "  d. Bhagwan, the Parabramham","answer": "d"},
{"question": "60. Which of the following is considered as one of the eighteen puranas  ","option1":"  a. Bhagavatam","option2": "  b. Ramayanam","option3": "  c. Bhaja Govindam","option4": "  d. Mahabharatam","answer": "a"},
{"question": "61. In the Ramayana Rama went to the forest for fourteen years __________.","option1":"  a. To kill demons","option2": "  b. To protect sages","option3": "  c. Because he was banished","option4": "  d. To serve the gods","answer": "c"},
{"question": "62. Sanatana Dharma Followers (Hindus) will perform their own last rites while still living","option1":"  a. When they take sannyasi vows and become a monk","option2": "  b. When they are widowed","option3": "  c. As an act of worship for Yama, Lord of the Dead","option4": "  d. To act as a guide to help a deceased loved one cross over to a favorable rebirth","answer": "a"},
{"question": "63. How old is the Sanatana Dharma  ","option1":"  a. 5000 years.","option2": "  b. 10000 years","option3": "  c. one lakh crore year (one trillion)","option4": "  d. 155.52 lakh crore (trillion) years","answer": "d"},
{"question": "64. In the Bhagavad Gita, taking up the path of devotion one","option1":"  a. Offers up the fruits of one’s action to God and recites the names of Bhagwan Krishna always","option2": "  b. Performs worship three times a day","option3": "  c. feeds poor","option4": "  d. Studies the scriptures with a love in one’s heart","answer": "a"},
{"question": "65. The size of the atman (jeevatma or soul) is: ","option1":"  a. an inch","option2": "  b. a foot","option3": "  c. 1/10,000th of the tip of the hair ","option4": "  d. size of the full-stop","answer": "c"},
{"question": "66. As per Sanatana Dharma, when one dies in the mode of ignorance (tamo guna),","option1":"  a. he takes birth in the animal kingdom.","option2": "  b. he  attains mukti","option3": "  c. he takes birth in pious people families Navaratri","option4": "  d. he goes to parama patam","answer": "a"},
{"question": "67. We are in _____ years of this ____th Kali Yuga  ","option1":"  a. 5122 year of 28th Kali Yuga","option2": "  b. 2022 year of Kali Yuga.","option3": "  c. 2022 b.c.e.","option4": "  d. 2022 AD","answer": "a"},
{"question": "68. The word Kalpam means - ","option1":"  a. 1000 chatur yugaas","option2": "  b. 2000 chatur yugaas","option3": "  c. 1000 kali yugaas","option4": "  d. 2000 chatur yugaas","answer": "a"},
{"question": "69. The universe consists of how many worlds (lokas)","option1":"  a.  1","option2": "  b. 3","option3": "  c. 7","option4": "  d. 14","answer": "d"},
{"question": "70. How many time the Srivaikuntam (Parama Padam - abode of Bhagwan) is bigger ?  ","option1":"  a. 3 times bigger than the universe of 14 lokas  ","option2": "  b. 3 times bigger than the our mother earth  ","option3": "   c. Smaller than universe","option4": "  d. None of the above ","answer": "a"},
{"question": "71 What is the word ' Dhakshinaayanam' refers to :  ","option1":"  a. when the sun travels towards the south on the celestial sphere ","option2": "  b. when the sun travels towards the north on the celestial sphere ","option3": "  c. when the sun travels towards the centre on the celestial sphere  ","option4": "  d. All of the above","answer": "a"},
{"question": "72. Gandhi referred the following as spiritual dictionary","option1":"  a. Vedas","option2": "  b. Bhagavad Gita","option3": "  c. Great souls","option4": "  d. Freedom fighters","answer": "b"},
{"question": "73. Teachings on karma and reincarnation were first presented in the","option1":"  a. Vedas","option2": "  b. Bramhanas","option3": "  c. Upanishads","option4": "  d. Bhagavad Gita","answer": "c"},
{"question": "74. What is the meaning of Shukla Paksha","option1":"  a. 15 days from No moon day to Full Moon day","option2": "  b. No moon Day","option3": "  c. full Moon day","option4": "  d. 15 days from Full moon day to No Moon day","answer": "a"},
{"question": "75. Which of the following is considered as practical approach to the teachings in Bhagavad Geeta to attain renunciation ?","option1":" a. Reading the Puranas","option2": " b. reciting the Vedas","option3": " c. studying the Upanishads","option4": " d. reciting Sri Vishnu Sahasranamam","answer": "d"},
{"question": "76.  The famous mostly recited verse beginning with ' Om  saha naavavatu' appears in which Upanishad? ","option1":" a. kena upanishad","option2": " b. kada upanishad","option3": " c. mundaka upanishad","option4": " d. maandookya upanishad","answer": "a"},
{"question": "77.  What is the motto inscribed in the VISVAS Logo ? ","option1":" a. satyameva jayate","option2": " b. aham bramhaasmi","option3": " c. yogakshemam vahaamyaham","option4": " d. dharmo rakshati rakshitaha","answer": "d"},


]