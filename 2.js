var oldIndex;
var newQuoteIndex;
var shlokas;
var shlokas_12, shlokas_15, shlokas_16, shlokas_1;

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
	if (cmbChapter.value == 16) shlokas = shlokas_16;
	if (cmbChapter.value == 1) shlokas = shlokas_1;
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
	var strAnswer = shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number + "<br/>" + 
		shlokas[newQuoteIndex].verse;
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


shlokas_16 = [
{"verse": "श्रीभगवानुवाच । अभयं सत्त्वसंशुद्धि: , र्ज्ञानयोग व्यवस्थितिः । , दानं दमश्च यज्ञश्च , स्वाध्या यस्तप आर्जवम् ॥ १६-१॥ 16.1","chapter_number":16,"shloka_number": 1},
{"verse": "Ahimsaa अहिंसा सत्य मक्रोध: , thyaaगः शान्तिर पैशुनम् । , दया भूतेष्व लोलुप्त्वं , मार्दवं ह्रीर चापलम् ॥ १६-२॥ 16.2","chapter_number":16,"shloka_number": 2},
{"verse": "Thejah तेजः(h) क्षमा धृतिः शौचm , aद्रोहो नातिमानिता ।,  भवन्ति सम्पदं दैवीm , aभिजातस्य भारत ॥ १६-३॥ 16.3","chapter_number":16,"shloka_number": 3},
{"verse": "dhambho  दम्भो दर्पोऽभिमानश्च , क्रोधः पारुष्यमेव च ।, अज्ञानं(agnaanam) चाभि जातस्य , पार्थ सम्पदमासुरीम् ॥ १६-४॥ 16.4","chapter_number":16,"shloka_number": 4},
{"verse": "Dhaiveem दैवी सम्पद्वि मोक्षाय , निबन्धायासुरी मता ।, मा शुचः सम्पदं दैवीm , aभिजातोऽसि पाण्डव ॥ १६-५॥ 16.5","chapter_number":16,"shloka_number": 5},
{"verse": "Dhwow द्वौ भूतसर्गौ लोकेऽस्मिn, दैव आसुर एव च ।,  दैवो विस्तरशः प्रोक्त: , आसुरं पार्थ मे शृणु ॥ १६-६॥ 16.6","chapter_number":16,"shloka_number": 6},
{"verse": "Pravruthin  प्रवृत्तिं च निवृत्तिं च , जना न विदुरासुराः ।,  न शौचnनापि चाचार: , न सत्यं तेषु विद्यते ॥ १६-७॥ 16.7","chapter_number":16,"shloka_number": 7},
{"verse": "Asathya असत्य मप्रतिष्ठं ते , जगदाहुर नीश्वरम् ।, अपरस्पर सम्भूतं , किमन्यत्काम हैतुकम् ॥ १६-८॥ 16.8","chapter_number":16,"shloka_number": 8},
{"verse": "Yethaam एतां दृष्टिम वष्टभ्य , नष्टात्मानोऽल्प बुद्धयः ।, प्रभवन्त्युग्र कर्माणः , क्षयाय जगतोऽहिताः ॥ १६-९॥ 16.9","chapter_number":16,"shloka_number": 9},
{"verse": "Kaama  काममाश्रित्य दुष्पूरं , दम्भमान मदान्विताः ।,  मोहाद्गृहीत्वा सद्ग्राहाn, प्रवर्तन्तेऽ शुचिव्रताः ॥ १६-१०॥ 16.10","chapter_number":16,"shloka_number": 10},
{"verse": "Chinthaa चिन्ता मपरिमेयां च , प्रलयान्ता मुपाश्रिताः ।, कामोपभोग परमा: , एतावदिति निश्चिताः ॥ १६-११॥ 16.11","chapter_number":16,"shloka_number": 11},
{"verse": "Aashaa  आशापाश शतैर्बद्धाः , कामक्रोध परायणाः ।, ईहन्ते कामभोगार्थm, aन्यायेनार्थ सञ्चयान् ॥ १६-१२॥ 16.12","chapter_number":16,"shloka_number": 12},
{"verse": "Idhamadhya  इदमद्य मया लब्धm , eमं प्राप्स्ये मनोरथम् । , इदमस्तीद मपिमे , भविष्यति पुनर्धनम् ॥ १६-१३॥ 16.13","chapter_number":16,"shloka_number": 13},
{"verse": "Asow  असौ मया हतः शत्रु: ,- हनिष्ये चापरानपि । , ईश्वरोऽहमहं भोगी , सिद्धोऽहं बलवान्सुखी ॥ १६-१४॥ 16.14","chapter_number":16,"shloka_number": 14},
{"verse": "Aadyo  आढ्योऽभिजन वानस्मि , कोऽन्योऽस्ति सदृशो मया ।, यक्ष्ये दास्यामि मोदिष्ये , इत्यज्ञानवि मोहिताः ॥ १६-१५॥ 16.15","chapter_number":16,"shloka_number": 15},
{"verse": "Aneka अनेकचित्त विभ्रान्ता: , मोहजालस मावृताः ।, प्रसक्ताः कामभोगेषु  ,पतन्ति नरकेऽशुचौ ॥ १६-१६॥ 16.16","chapter_number":16,"shloka_number": 16},
{"verse": "Aathma आत्म सम्भाविताः स्तब्धा: , धनमान मदान्विताः । ,यजन्ते नामयज्ञैस्ते , दम्भेनावि धिपूर्वकम् ॥ १६-१७॥ 16.17","chapter_number":16,"shloka_number": 17},
{"verse": "Ahankaram अहङ्कारं बलं दर्पं , कामं क्रोधं च संश्रिताः ।, मामात्म परदेहेषु , प्रद्विषन्तोऽभ्य सूयकाः ॥ १६-१८॥ 16.18","chapter_number":16,"shloka_number": 18},
{"verse": "thaanaham तानहं द्विषतः क्रूराn , संसारेषु नराधमान् । , क्षिपाम्य जस्र मशुभाn , आसुरीष्वेव योनिषु ॥ १६-१९॥ 16.19","chapter_number":16,"shloka_number": 19},
{"verse": "Aasureem आसुरीं योनिमापन्ना: , मूढा जन्मनि जन्मनि । , मामप्राप्यैव कौन्तेय , ततो यान्त्यधमां गतिम् ॥ १६-२०॥ 16.20","chapter_number":16,"shloka_number": 20},
{"verse": "thrividham त्रिविधं नरकस्येदं , द्वारं नाशनमात्मनः ।,  कामः क्रोधस्तथा लोभ: , thaस्मादेतत्त्रयं त्यजेत् ॥ १६-२१॥ 16.21","chapter_number":16,"shloka_number": 21},
{"verse": "Yethair  एतैर्विमुक्तः कौन्तेय , तमोद्वारै स्त्रिभिर्नरः । , आचरत्यात्मनः श्रेय: , thaतो याति परां गतिम् ॥ १६-२२॥ 16.22","chapter_number":16,"shloka_number": 22},
{"verse": "Yash यः शास्त्रविधि , मुत्सृज्य वर्तते कामकारतः ।, न स सिद्धिम वाप्नोति , न सुखं न परां गतिम् ॥ १६-२३॥ 16.23","chapter_number":16,"shloka_number": 23},
{"verse": "thasmaa तस्माच्छास्त्रं प्रमाणं ते , कार्याकार्यव्य वस्थितौ ।,  ज्ञात्वा शास्त्रविधानोक्तं , कर्म कर्तुमि हार्हसि ॥ १६-२४॥ 16.24","chapter_number":16,"shloka_number": 24},
];

shlokas_1 = [

{"verse": "धृतराष्ट्र उवाच  धर्मक्षेत्रे कुरुक्षेत्रे,  समवेता युयुत्सव: ।  , मामका: पाण्डवाश्चैव , किमकुर्वत सञ्जय ॥ १ ॥","chapter_number":1,"shloka_number": 1},
{"verse": "सञ्जय उवाच  दृष्ट्वा तु पाण्डवानीकं, व्यूढं दुर्योधनस्तदा ।,  आचार्य मुपसङ्गम्य, राजा वचनमब्रवीत् ॥ २ ॥" "chapter_number":1,"shloka_number": 2},
{"verse": "pashyai पश्यैतां पाण्डुपुत्राणाm, aaचार्य महतीं चमूम् । , व्यूढां द्रुपदपुत्रेण, तव शिष्येण धीमता ॥ ३ ॥","chapter_number":1,"shloka_number": 3},
{"verse": "athra अत्र श‍ूरा महेष्वासा: , भीमार्जुन समा युधि । , युयुधानो विराटश्च,  द्रुपदश्च महा रथः ॥ ४ ॥","chapter_number":1,"shloka_number": 4},
{"verse": "dhrushta धृष्टकेतुश्चेकितानः , काशि राजश्च वीर्यवान् ।,  पुरुजित्कुन्ति भोजश्च, शैब्यश्च नरपुङ्गवः ॥ ५ ॥","chapter_number":1,"shloka_number": 5},
{"verse": "yudhaa युधामन्युश्च विक्रान्त:, उत्तमौजाश्च वीर्यवान् ।,  सौभद्रो द्रौपदेयाश्च,  सर्व एव महारथाः ॥ ६ ॥","chapter_number":1,"shloka_number": 6},
{"verse": "asmakam अस्माकं तु विशिष्टा ये, तान्निबोध-द्विजोत्तम ।,  नायका मम सैन्यस्य,  संज्ञार्थm तान्ब्रवीमि ते ॥ ७ ॥","chapter_number":1,"shloka_number": 7},
{"verse": "bhavaan भवान्भीष्मश्च कर्णश्च,  कृपश्च समितिंजयः ।, अश्वत्थामा विकर्णश्च, सौमदत्तिस्त थैव च ॥ ८ ॥","chapter_number":1,"shloka_number": 8},
{"verse": "anye अन्ये च बहवः श‍ूरा:, मदर्थेत्यक्त जीविताः ।,  नानाशस्त्र-प्रहरणाः , सर्वे युद्ध विशारदाः ॥ ९ ॥","chapter_number":1,"shloka_number": 9},
{"verse": "aparya अपर्याप्त‍ं तदस्माकं,  बलं भीष्माभिरक्षितम् ।,  पर्याप्त‍ं त्विदमेतेषां , बलं भीमाभिरक्षितम् ॥ १० ॥","chapter_number":1,"shloka_number": 10},
{"verse": "ayaneshu अयनेषु च सर्वेषु , यथा भागव मस्थिताः ।, भीष्म मेवाभि रक्षन्तु , भवन्तः सर्व एव हि ॥ ११ ॥","chapter_number":1,"shloka_number": 11},
{"verse": "thasya तस्य सञ्जन यन्हर्षं,  कुरुवृद्धः पितामहः ।, सिंहनादं विनद्योच्च‍ैः , शङ्खं दध्मौ प्रतापवान् ॥ १२ ॥","chapter_number":1,"shloka_number": 12},
{"verse": "thathash shanka ततः शङ्खाश्च भेर्यश्च, पणवान कगोमुखाः ।,  सहसैवाभ्य हन्यन्त,  स शब्दस्तु मुलोऽभवत् ॥ १३ ॥","chapter_number":1,"shloka_number": 13},
{"verse": "Thatha-sh shve IMP ततः श्वेतैर्ह यैर्युक्ते,  महति स्यन्दने स्थितौ ।,  माधवः पाण्डवश्चैव , दिव्यौ शङ्खौ प्रदध्मतुः ॥ १४ ॥","chapter_number":1,"shloka_number": 14},
{"verse": "paancha पाञ्चजन्यं हृषीकेश: , देवदत्तं धनञ्जयः ।,  पौण्ड्रं दध्मौ महाशङ्खं , भीमकर्मा वृकोदरः ॥ १५ ॥","chapter_number":1,"shloka_number": 15},
{"verse": "anantha अनन्तविजयं राजा,  कुन्तीपुत्रो युधिष्ठिरः । , नकुलः सहदेवश्च , सुघो षमणि पुष्पकौ ॥ १६ ॥","chapter_number":1,"shloka_number": 16},
{"verse": "kaashya काश्यश्च परमेष्वास:, शिखण्डी च महारथ: ।,  धृष्टद्युम्न‍ो विराटश्च, सात्यकिश्‍चाप राजित: ॥ १७ ॥","chapter_number":1,"shloka_number": 17},
{"verse": "drupadho द्रुपदो द्रौपदेयाश्च,  सर्वश: पृथिवीपते ।, सौभद्रश्च महाबाहु: , शङ्खान्दध्मु: पृथक्पृथक् ॥ १८ ॥","chapter_number":1,"shloka_number": 18},
{"verse": "sagosho स घोषो धार्तराष्ट्राणां , हृदयानि व्यदारयत् ।, नभश्च पृ धिवीं चैव , तुमुलोऽvyaनुनादयन् ॥ १९ ॥","chapter_number":1,"shloka_number": 19},
{"verse": "athavya vasthi अथ व्यवस्थितान्दृष्ट्वा , धार्तराष्ट्रा न्कपिध्वजः । , प्रवृत्ते शस्त्रसम्पाते , धनुरुद्यम्य पाण्डवः । ॥ २० ॥","chapter_number":1,"shloka_number": 20},
{"verse": "hrushi हृषीकेशं तदा वाक्यm , eदमाह महीपते ,  अर्जुन उवाच  सेनयोरुभयोर्मध्ये , रथं-स्थापय मेऽच्युत । ॥ २१ ॥","chapter_number":1,"shloka_number": 21},
{"verse": "yaava dhe यावदेतान्निरीक्षेऽहं योद्‍धु ,कामान वस्थितान् , कैर्मया सह योद्धव्यm , aस्मिन्‍रण समुद्यमे ॥ २२ ॥","chapter_number":1,"shloka_number": 22},
{"verse": "yothsya योत्स्य मानान वेक्षेऽहं , य एतेऽत्र समागताः । , धार्तराष्ट्रस्य दुर्बुद्धे: , र्युद्धे प्रियचि-कीर्षवः ॥ २३ ॥","chapter_number":1,"shloka_number": 23},
{"verse": "Eva muktho सञ्जय उवाच एवमुक्तो हृषीकेश:, गुडाकेशेन भारत ।,  सेन योरुभयो र्मध्ये , स्थाप यित्वा रथोत्तमम् ॥ २४ ॥","chapter_number":1,"shloka_number": 24},
{"verse": "Bheeshma भीष्मद्रोण-प्रमुखतः , सर्वेषां च महीक्षिताम् ।,  उवाच पार्थ पश्यैताn, समवेताn कुरूनिति ॥ २५ ॥ 25","chapter_number":1,"shloka_number": 25},
{"verse": "Thathraa तत्रापश्य-त्स्थितान्पार्थः , पितॄ नथ पितामहान्।, आचार्या न्मातुलान्भ्रातॄn , puत्रान्पौत्रान्सखींस्तथा। ॥ २६ ॥ 26","chapter_number":1,"shloka_number": 26},
{"verse": "Shwashu श्वश‍ुरान्सुहृ दश्चैव , सेनयोरु भयोरपि  , तान्समीक्ष्य स कौन्तेयः , सर्वान्बन्धून वस्थितान् ।27","chapter_number":1,"shloka_number": 27},
{"verse": "Krupayaa कृपया परयाविष्ट: , विषी दन्निद मब्रवीत् , अर्जुन उवाच दृष्ट्वेमं स्वजनं कृष्ण , युयुत्सुं समुपस्थितम् । 28","chapter_number":1,"shloka_number": 28},
{"verse": "Seedhanthi सीदन्ति मम गात्राणि , मुखं च परिश‍ुष्यति ,  वेपथुश्च शरीरे मे , रोमहर्षश्च जायते । 29","chapter_number":1,"shloka_number": 29},
{"verse": "Gaandeevam गाण्डीवं स्रंसते हस्ताth , त्त्वक्च‍ैव परिदह्यते ,  न च शक्न‍ोम्य वस्थातुं , भ्रमतीव च मे मनः 30","chapter_number":1,"shloka_number": 30},
{"verse": "Nimithaani-cha निमित्तानि च पश्यामि , विपरीतानि केशव ,न च श्रेयोऽनु पश्यामि , हत्वा स्वजनमाहवे । 31","chapter_number":1,"shloka_number": 31},
{"verse": "NaKaankshe न काङ्क्षे विजयं कृष्ण , न च राज्यं सुखानि च , किं नो राज्येन गोविन्द , किं भोगैर्जी वितेन वा । 32","chapter_number":1,"shloka_number": 32},
{"verse": "Yeshaa Marthe येषामर्थे काङ्‍क्षितn , न: राज्यं भोगाः सुखानि च  , त इमेऽवस्थिता युद्धे , प्राणांस्त्यक्त्वा धनानि च । 33","chapter_number":1,"shloka_number": 33},
{"verse": "Aachaaryaaf pitharaf आचार्याः पितरः पुत्रा: ,thaथैव च पितामहाः , मातुलाः श्वश‍ुराः पौत्राः , श्यालाः सम्बन्धि नस्तथा । 34","chapter_number":1,"shloka_number": 34},
{"verse": "Yethaanna Hanthu एतान्न-हन्तु मिच्छामि , घ्न‍तोऽपि मधु-सूदन  , अपि त्रैलोक्य राज्यस्य , हेतोः किं नु महीकृते । 35","chapter_number":1,"shloka_number": 35},
{"verse": "Nihathya निहत्य धार्तराष्ट्रान्नः , का-प्रीतिः स्याज्ज‍नार्दन ,  पापमेवाश्रयेदस्माn , हत्वैताना ततायिनः । 36","chapter_number":1,"shloka_number": 36},
{"verse": "Thasmaan Naarha तस्मान्नार्हा वयं हन्तुं , धार्त राष्ट्राnस्व बान्धवान् ।,  स्वजनं हिकथं हत्वा , सुखिनः स्याम माधव ॥ 37 ॥","chapter_number":1,"shloka_number": 37},
{"verse": "Yadhyap yethe यद्यप्येते न पश्यन्ति , लोभोपहतचेतसः ।, कुलक्षयकृतं दोषं , मित्रद्रोहे च पातकम् ॥ 38 ॥","chapter_number":1,"shloka_number": 38},
{"verse": "Kadhan Nagneye कधn-नज्ञेय मस्माभिः , पापादस्मa-न्निवर्तितुम् ।, कुलक्षय-कृतं दोषं , प्रपश्यद्भ‍िr र्जनार्दन ॥ 39 ॥","chapter_number":1,"shloka_number": 39},
{"verse": "Kulakshaye कुलक्षये-प्रणश्यन्ति , कुलधर्माः सनातनाः ।, धर्मे नष्टे कुलं कृत्स्नm , aधर्मोऽ भिभवत्युत ॥ 40 ॥","chapter_number":1,"shloka_number": 40},
{"verse": "Adharmaa अधर्माभिभवात्कृष्ण , प्रदुष्यन्ति कुलस्त्रियः ।, स्त्रीषु दुष्टासु वार्ष्णेय , जायते वर्णसङ्करः ॥ 41 ॥","chapter_number":1,"shloka_number": 41},
{"verse": "Sankaro Nara सङ्करो नरकायैव , कुलघ्न‍ानां कुलस्य च ।, पतन्ति पितरो ह्येषां , लुप्त पिण्डोद कक्रियाः ॥ 42 ॥","chapter_number":1,"shloka_number": 42},
{"verse": "Dhoshai Rethai दोषैरेतैः कुलघ्न‍ानां , वर्ण सङ्कर कारकैः ।, उत्साद्यन्ते जातिधर्माः , कुलधर्माश्च शाश्वताः ॥ 43 ॥","chapter_number":1,"shloka_number": 43},
{"verse": "Uthsanna उत्सन्न कुलधर्माणां , मनुष्याणां जनार्दन ।, नरके नियतं वास: , भवतीत्य नुश‍ुश्रुम ॥ 44 ॥","chapter_number":1,"shloka_number": 44},
{"verse": "Aho Batha अहो बत महत्पापं , कर्तुं व्यवसिता वयम् ।,  यद्राज्यसुख लोभेन , हन्तुं स्वजन मुद्यताः ॥ 45 ॥","chapter_number":1,"shloka_number": 45},
{"verse": "Yadhi Maamap-prathee यदि मामप्रतीकारm , aशस्त्रं शस्त्रपाणयः । , धार्तराष्ट्रा रणे हन्यु: ,thaन्मे क्षेमतरं भवेत् ॥ 46 ॥","chapter_number":1,"shloka_number": 46},
{"verse": "Eva mukthvaa सञ्जय उवाच एव मुक्त्वार्जुनः संख्ये , रथोपस्थ उपाविशत् । , विसृज्य सशरं चापं , शोकसं विग्न‍मानसः ॥ 47 ॥","chapter_number":1,"shloka_number": 47},

]