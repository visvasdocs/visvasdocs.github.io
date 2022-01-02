var oldIndex;
var newQuoteIndex;
var shlokas;

function loadWords() {
	nextQuote();
}

function nextQuote() {
	randomize();
	var strword = document.getElementById("word");
	strword.innerHTML = "Shloka: " + shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number;
}
function nextParagraph() {
	randomize();
	var strword = document.getElementById("word");
	strQuestionArray = shlokas[newQuoteIndex].verse.split(",");
	strQuestion = strQuestionArray[Math.floor((Math.random()*strQuestionArray.length))];
	strword.innerHTML = strQuestion;
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
	var strAnswer = shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number + "<br/><br>" + 
		shlokas[newQuoteIndex].verse + "<br>";
	answer.innerHTML = strAnswer;
}

shlokas = [
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
]