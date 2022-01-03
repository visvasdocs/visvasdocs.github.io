var oldIndex;
var newQuoteIndex;
var shlokas;
var shlokas_12, shlokas_15;

function loadWords() {
	if(window.localStorage.getItem("bg-chapter") != '')  { document.getElementById('chapters').value = window.localStorage.getItem("bg-chapter") };
	determineChapter()
	nextQuote();
}

function nextQuote() {
	determineChapter();
	randomize();
	var strword = document.getElementById("word");
	strword.innerHTML = "Tell: " + shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number;
}
function nextParagraph() {
	determineChapter();
	randomize();
	var strword = document.getElementById("word");
	strQuestionArray = shlokas[newQuoteIndex].verse.split(",");
	strQuestion = strQuestionArray[Math.floor((Math.random()*strQuestionArray.length))];
	strword.innerHTML = 'Which one where?: ' + strQuestion;
}
function showAll() {
	determineChapter();
	var bgtable = document.getElementById("bgtable");
	var strFullTableContents = '<table class="table table-striped  text-black"><thead><tr><th>#</th><th>Shlokam</th></tr></thead><tbody>';
	
	shlokas.forEach(function(obj) { 
		console.log(obj.id);
		strFullTableContents = strFullTableContents + '<tr><td>' + obj.shloka_number + '</td><td>' + obj.verse + '</td></tr>';
	});
	strFullTableContents = strFullTableContents + '</tbody></table>';
	
	bgtable.innerHTML = strFullTableContents;
}

//JS: helper Functions
function determineChapter() {
	var cmbChapter = document.getElementById("chapters");
	if (cmbChapter.value == 12) shlokas = shlokas_12;
	if (cmbChapter.value == 15) shlokas = shlokas_15;
	window.localStorage.setItem("bg-chapter", cmbChapter.value);
}
function randomize() {
	var answer = document.getElementById("answer");
	answer.innerHTML = "";
	do{
		newQuoteIndex = Math.floor(Math.random() * shlokas.length);
	} while ((newQuoteIndex == oldIndex));
	oldIndex = newQuoteIndex;
}
function showAnswer() {
	var answer = document.getElementById("answer");
	//shlokas[newQuoteIndex].verse.replace("
	var strAnswer = shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number + "<br/><br>" + 
		shlokas[newQuoteIndex].verse + "<br>";
	answer.innerHTML = strAnswer;
}

//================Shlokas
shlokas_15 = [
{"verse": "श्रीभगवानुवाच  ऊर्ध्वमूलमध:शाखm , aश्वत्थं प्राहुरव्ययम्  , छन्दांसि यस्य पर्णानि , यस्तं वेदस वेदवित् ","chapter_number":15,"shloka_number": 1},
{"verse": "धश्चोर्ध्वं प्रसृतास्तस्य शाखा: , गुणप्रवृद्धा विषयप्रवाला: ,  अधश्च मूलान्यनु सन्त तानि , कर्मानु बन्धीनि मनुष्य लोके ","chapter_number":15,"shloka_number": 2},
{"verse": "न रूपम स्येह तथोपलभ्यते , नान्तो न चादिर्न च सम्प्र तिष्ठा । , अश्वत्थ मेनं सुविरूढ मूलm , aसङ्ग शस्त्रेण दृढेन छित्त्वा ॥ ३ ॥","chapter_number":15,"shloka_number": 3},
{"verse": "तत: पदं तत्परि मार्गितव्यं , यस्मिन्गता न निवर्तन्ति भूय: ।  , तमेव चाद्यं पुरुषं प्रपद्ये , यत: प्रवृत्ति: प्रसृता पुराणी ॥ ४ ॥","chapter_number":15,"shloka_number": 4},
{"verse": "निर्मानमोहा जितसङ्गदोषा: , अध्यात्मनित्या विनिवृत्तकामा: । , द्वन्द्वैर्वि मुक्ता: सुखदु:खसंज्ञै: , gaच्छन्त्यमूढा: पदमव्ययं तत् ॥ ५ ॥","chapter_number":15,"shloka_number": 5},
{"verse": "न तद्भ‍ासयते सूर्य: , न शशाङ्को न पावक: । , यद्ग‍त्वा न निवर्तन्ते , तद्धाम परमं मम ॥ ६ ॥","chapter_number":15,"shloka_number": 6},
{"verse": "ममैवांशो जीवलोके , जीवभूत: सनातन: । ,  मन:षष्ठा नीन्द्रियाणि , प्रकृतिस्थानि कर्षति ॥ ७ ॥","chapter_number":15,"shloka_number": 7},
{"verse": "शरीरं यदवाप्‍नोति , यच्च‍ाप्युत्क्राम तीश्वर: । , गृहीत्वैतानि स-ai-याति , वायुर्गन्धानि वाशयात् ॥ ८ ॥","chapter_number":15,"shloka_number": 8},
{"verse": "श्रोत्रं चक्षु: स्पर्शनं च , रसनं घ्राणमेव च । , अधिष्ठाय मनश्चायं , विषयानुप सेवते ॥ ९ ॥","chapter_number":15,"shloka_number": 9},
{"verse": "उत्क्रामन्तं स्थितं वाऽपि , भुञ्जानं वा गुणान्वितम् । , विमूढा नानुपश्यन्ति , पश्यन्ति-ज्ञानचक्षुष: ॥ १० ॥","chapter_number":15,"shloka_number": 10},
{"verse": "यतन्तो योगिनश्चैनं , पश्यन्त्यात्मन्य वस्थितम् । , यतन्तोऽप्य कृतात्मान: , नैनं पश्यन्त्यचेतस: ॥ ११ ॥","chapter_number":15,"shloka_number": 11},
{"verse": "यदादित्यगतं तेज: , जगद्भ‍ासयतेऽखिलम् । , यच्च‍न्द्रमसि यच्च‍ाग्न‍ौ , तत्तेजो विद्धि मामकम् ॥ १२ ॥","chapter_number":15,"shloka_number": 12},
{"verse": "गामाविश्य च भूतानि , धारयाम्य हमोजसा । , पुष्णामि चौषधी: सर्वा: , सोमो भूत्वा रसात्मक: ॥ १३ ॥","chapter_number":15,"shloka_number": 13},
{"verse": "अहं वैश्वानरो भूत्वा , प्राणिनां देहमाश्रित: । , प्राणा पान समायुक्त: , पचाम्यन्नं चतुर्विधम् ॥ १४ ॥","chapter_number":15,"shloka_number": 14},
{"verse": "सर्वस्य चाहं हृदि सन्निविष्ट: , मत्त: स्मृतिर्ज्ञान मपोहनं च । , वेदैश्च सर्वैरहमेव वेद्य: , वेदान्तकृद्वेद विदेव चाहम् ॥ १५ ॥","chapter_number":15,"shloka_number": 15},
{"verse": "द्वाविमौ पुरुषौ लोके , क्षरश्चाक्षर एव च ।, क्षर: सर्वाणि भूतानि , कूटस्थोऽक्षर उच्यते ॥ १६ ॥","chapter_number":15,"shloka_number": 16},
{"verse": "उत्तम: पुरुषस्त्वन्य: , परमात्मे त्युदाहृत: । ,  यो लोकत्र यमाविश्य , बिभर्त्यव्यय ईश्वर: ॥ १७ ॥","chapter_number":15,"shloka_number": 17},
{"verse": "यस्मात्क्षर मतीतोऽहm , aक्षरादपि चोत्तम: ।, अतोऽस्मि लोके वेदे च , प्रथित: पुरुषोत्तम: ॥ १८ ॥","chapter_number":15,"shloka_number": 18},
{"verse": "यो मामेव मसम्मूढ: , जानाति पुरुषोत्तमम् । , स सर्वविद्भ‍जति मां , सर्व भावेन भारत ॥ १९ ॥","chapter_number":15,"shloka_number": 19},
{"verse": "इति गुह्यतमं शास्त्रm , eदमुक्तं मयानघ । , एतद्‍बुद्ध्वा बुद्धिमान्स्याth , कृतकृत्यश्च भारत ॥ २० ॥","chapter_number":15,"shloka_number": 20},
];

shlokas_12 = [
{"verse": "अर्जुन उवाच एवं सततयुक्ता ये , भक्तास्त्वां पर्युपासते ।, ये चाप्यक्षरमव्यक्तं , तेषां के योगवित्तमा: ॥ १ ॥ 1","chapter_number":12,"shloka_number": 1},
{"verse": "श्रीभगवानुवाच मय्यावेश्य मनो ये मां, नित्ययुक्ता उपासते । , श्रद्धया परयोपेता: , ते मे युक्ततमा मता: ॥ २ ॥ 2","chapter_number":12,"shloka_number": 2},
{"verse": "ये त्वक्षर मनिर्देश्यम , aव्यक्तं पर्युपासते । , सर्वत्रगमचिन्त्यं च , कूटस्थमचलं ध्रुवम् ॥ ३ ॥ 3","chapter_number":12,"shloka_number": 3},
{"verse": "सन्नियम्येन्द्रियग्रामं , सर्वत्र समबुद्धय: । , ते प्राप्‍नुवन्ति मामेव , सर्वभूतहिते रता: ॥ ४ ॥ 4","chapter_number":12,"shloka_number": 4},
{"verse": "क्ल‍ेशोऽधिक तरस्तेषाम्  , aव्यक्ता सक्त चेतसाम् ।, अव्यक्ता हि गतिर्दु:खं , देहवद्भ‍िर वाप्यते ॥ ५ ॥ 5","chapter_number":12,"shloka_number": 5},
{"verse": "ये तु सर्वाणि कर्माणि , मयि सन्न्यस्य मत्परा: ।, अनन्येनैव योगेन मां , ध्यायन्त उपासते ॥ ६ ॥ 6","chapter_number":12,"shloka_number": 6},
{"verse": "तेषामहं समुद्धर्ता , मृत्युसंसार सागरात् । , भवामि न चिरात्पार्थ , मय्यावेशित चेतसाम् ॥ ७ ॥ 7","chapter_number":12,"shloka_number": 7},
{"verse": "मय्येव मन आधत्स्व , मयि बुद्धिं निवेशय ।,  निवसिष्यसि मय्येव , अत ऊर्ध्वं न संशय: ॥ ८ ॥ 8","chapter_number":12,"shloka_number": 8},
{"verse": "अथ चित्तं समाधातुं , न शक्न‍ोषि मयि स्थिरम् ।,  अभ्यास योगेन तत:  , मामिच्छाप्‍तुं धनञ्जय ॥ ९ ॥ 9","chapter_number":12,"shloka_number": 9},
{"verse": "अभ्यासेऽप्य-समर्थोऽसि , मत्कर्मपरमो भव ।,  मदर्थमपि कर्माणि , कुर्वन्सिद्धिम वाप्स्यसि ॥ १० ॥ 10","chapter_number":12,"shloka_number": 10},
{"verse": "अथैत दप्यशक्तोऽसि , कर्तुं मद्योगमाश्रित: ।, सर्वकर्म फलत्यागं , तत: कुरु यतात्मवान् ॥ ११ ॥ 11","chapter_number":12,"shloka_number": 11},
{"verse": "श्रेयो हिज्ञानमभ्यासाth , ज्ज्ञानाद्ध्यानं विशिष्यते ।,  ध्यानात्कर्मफलत्याग:  , thyaगाच्छान्ति रनन्तरम् ॥ १२ ॥ 12","chapter_number":12,"shloka_number": 12},
{"verse": "अद्वेष्टा  सर्वभूतानां , मैत्र: करुण एव च ।,  निर्ममो निरहङ्कार: , समदु:खसुख:क्षमी ॥ १३ ॥ 13","chapter_number":12,"shloka_number": 13},
{"verse": "सन्तुष्ट: सततं योगी , यतात्मा दृढनिश्चय: ।,  मय्यर्पितम नोबुद्धि: , र्यो मद्भ‍क्त: स मे प्रिय: ॥ १४ ॥ 14","chapter_number":12,"shloka_number": 14},
{"verse": "यस्मान्नो द्विजते लोक: , लोकान्नोद्विजते च य: । , हर्षामर्ष भयोद्वेगै: , र्मुक्तो य: स च मे प्रिय: ॥ १५ ॥ 15","chapter_number":12,"shloka_number": 15},
{"verse": "अनपेक्ष: श‍ुचिर्दक्ष:  , उदासीनो गतव्यथ: ।,  सर्वारम्भ परित्यागी , यो मद्भ‍क्त: स मे प्रिय: ॥ १६ ॥ 16","chapter_number":12,"shloka_number": 16},
{"verse": "यो न हृष्यति न द्वेष्टि , न शोचति न काङ्‍क्षति ।, श‍ुभाश‍ुभ परित्यागी , भक्तिमान्य: स मे प्रिय: ॥ १७ ॥ 17","chapter_number":12,"shloka_number": 17},
{"verse": "सम: शत्रौ च मित्रे च , तथा मानापमानयो: ।, शीतोष्ण सुखदु:खेषु , सम: सङ्ग विवर्जित: ॥ १८ ॥ 18","chapter_number":12,"shloka_number": 18},
{"verse": "तुल्य निन्दास्तु तिर्मौनी , सन्तुष्टो येन केनचित् ।, अनिकेत: स्थिरमति: , र्भक्तिमान्मे प्रियो नर: ॥ १९ ॥ 19","chapter_number":12,"shloka_number": 19},
{"verse": "ये तु धर्माya मृतमिदं , यथोक्तं पर्युपासते । ,  श्रद्दधाना मत्परमा: , भक्तास्तेऽ तीव मे प्रिया: ॥ २० ॥ 20","chapter_number":12,"shloka_number": 20},
];
