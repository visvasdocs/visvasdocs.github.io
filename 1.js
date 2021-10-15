var oldIndex;

function loadWords() {
	var strword = document.getElementById("word");
	strword.innerHTML = nextQuote();
}

function nextQuestion() {
	var strword = document.getElementById("word");
	strword.innerHTML = nextQuote();
}

function nextQuote() {
	var answer = document.getElementById("answer");
	answer.innerHTML = "";
	
	do { 
		var newQuoteIndex = Math.floor(Math.random() * words.length);
	}   while ((newQuoteIndex == oldIndex));
	oldIndex = newQuoteIndex;
	
	//Question type
	var theRandomNumber = Math.floor(Math.random() * 3) + 1;
	if(theRandomNumber == 1) {
		return "Form sentence: " + words[newQuoteIndex].word;
	} else if(theRandomNumber == 2) {
		return "Scarmbled: " + shuffle(words[newQuoteIndex].word);
	} else {
		return "Fill it with right word: <br>" + words[newQuoteIndex].fillit;
	}
	
}

function nextScramble() {
	var answer = document.getElementById("answer");
	answer.innerHTML = "";
	
	do { 
		var newQuoteIndex = Math.floor(Math.random() * words.length);
	}   while ((newQuoteIndex == oldIndex));
	oldIndex = newQuoteIndex;
	
	return "Scarmbled: " + shuffle(words[newQuoteIndex].word);
}

function showAnswer() {
	var answer = document.getElementById("answer");
	answer.innerHTML = words[oldIndex].word + "<br>" + words[oldIndex].sentence + '<br><br><i>' + words[oldIndex].meaning + "</i>";
}

function shuffle(str) {
  //var str = document.getElementById('txt');
  //var a = str.innerHTML;
  var newArr = [];
  var neww = '';
  var text = str.replace(/[\r\n]/g, '').split(' ');
  
  text.map(function(v) {
    v.split('').map(function() {
      var hash = Math.floor(Math.random() * v.length);
      neww += v[hash];
      v = v.replace(v.charAt(hash), '');
    });
    newArr.push(neww);
    neww = '';
  });
  var x = newArr.map(v => v.split('').join(' ')).join('\n');
  return x.split('').map(v => v.toUpperCase()).join('');
}


var words = [{'word': 'ABBESS', 'sentence': 'The Abbess managed the entire school so well', 'meaning': 'A woman incharge - convent', 'fillit': 'The _____ managed the entire school so well'}, 

{'word': 'DEFICIENCY', 'sentence': 'His eyes – paining – deficiency of Vitamin C', 'meaning': 'Not having enough', 'fillit': 'His eyes – paining – _____ of Vitamin C'}, 

{'word': 'FOE', 'sentence': 'We don’t harm even our foe', 'meaning': 'Enemy', 'fillit': 'We don’t harm even our _____'}, 

{'word': 'GALLON', 'sentence': 'Put 3 gallons of gas in my Car', 'meaning': 'Measuring Volume', 'fillit': 'Put 3 _____s of gas in my Car'}, 

{'word': 'ABANDON', 'sentence': 'Due to rain, the circus is abandoned', 'meaning': 'To leave a place / person forever', 'fillit': 'Due to rain, the circus is _____ed'}, 

{'word': 'JUVENILE', 'sentence': 'I like to read Juvenile stories – interesting they are!', 'meaning': 'Relating to young person / children / not adult', 'fillit': 'I like to read _____ stories – interesting they are!'}, 

{'word': 'HATCHERY', 'sentence': 'Seashore had a hatchery of fish eggs ', 'meaning': 'Place where large number of eggs (fish eggs)', 'fillit': 'Seashore had a _____ of fish eggs '}, 

{'word': 'KERNEL', 'sentence': 'The Kernel of coconut is Sweet', 'meaning': 'Part of the nut inside the shell', 'fillit': 'The _____ of coconut is Sweet'}, 

{'word': 'INAUGURATE', 'sentence': 'VIVA was inaugurated on October', 'meaning': 'To put something into action officially', 'fillit': 'VIVA was _____d on October'}, 

{'word': 'LETHARGIC', 'sentence': 'After coming from school, I am lethargic to write my homework', 'meaning': 'Having little energy, unable to do anything', 'fillit': 'After coming from school, I am _____ to write my homework'}, 

{'word': 'JOURNALIST', 'sentence': 'I watch Arnab Goswami Journalist news who questions our MLAs', 'meaning': 'Person who writes news stories', 'fillit': 'I watch Arnab Goswami _____ news who questions our MLAs'}, 

{'word': 'MONETARY', 'sentence': 'I can upload youtube videos for monetary benefit too', 'meaning': 'Relating to money', 'fillit': 'I can upload youtube videos for _____ benefit too'}, 

{'word': 'KIBOSH', 'sentence': 'Kavya and her friends Kiboshed my art class with such a noise', 'meaning': 'Spoil / destroy', 'fillit': 'Kavya and her friends _____ed my art class with such a noise'}, 

{'word': 'BANDIT', 'sentence': 'Bandits stole all the gold jewels from my friend’s house', 'meaning': 'Thieves', 'fillit': '_____s stole all the gold jewels from my friend’s house'}, 

{'word': 'NICHE', 'sentence': 'For me, cricket is my niche game I am comfortable', 'meaning': 'Job / position that is suitable for someone', 'fillit': 'For me, cricket is my _____ game I am comfortable'}, 

{'word': 'LETHAL', 'sentence': 'Snake poison is lethal to humans and other animals and die', 'meaning': 'Extremely dangerous', 'fillit': 'Snake poison is _____ to humans and other animals and die'}, 

{'word': 'OBSCURE', 'sentence': 'Many elders don’t know how Insulin works', 'meaning': 'Not known to many people', 'fillit': 'Many elders don’t know how Insulin works'}, 

{'word': 'MELODY', 'sentence': 'Old songs are always melodious', 'meaning': 'Music tune so soft', 'fillit': 'Old songs are always melodious'}, 

{'word': 'PAGAN', 'sentence': 'I am not Pagan and worship Hindu Gods sincerely', 'meaning': 'One who worships many Gods / all religion', 'fillit': 'I am not _____ and worship Hindu Gods sincerely'}, 

{'word': 'NUPTIAL', 'sentence': 'I saw my Parent’s nuptial celebrations ', 'meaning': 'Relating to marriage', 'fillit': 'I saw my Parent’s _____ celebrations '}, 

{'word': 'QUEUE', 'sentence': 'Cinema Theatres and Temples have long queues and its boring to stand', 'meaning': 'Line of people', 'fillit': 'Cinema Theatres and Temples have long _____s and its boring to stand'}, 

{'word': 'OMELETTE', 'sentence': 'I used to like only Chicken omelette for getting more energy', 'meaning': 'Mixing egg yolk and making dish', 'fillit': 'I used to like only Chicken _____ for getting more energy'}, 

{'word': 'REFUTE', 'sentence': 'I refuted with my friend who showed the wrong way', 'meaning': 'Prove a person is wrong', 'fillit': 'I _____d with my friend who showed the wrong way'}, 

{'word': 'PARDON', 'sentence': 'It is good to forgive our own friends if they do mistakes unknowingly', 'meaning': 'To forgive', 'fillit': 'It is good to forgive our own friends if they do mistakes unknowingly'}, 

{'word': 'WORTHY', 'sentence': 'Harry Potter’s movie is worthy of watching for its imagination', 'meaning': 'Deserving respect ', 'fillit': 'Harry Potter’s movie is _____ of watching for its imagination'}, 

{'word': 'QUENCH', 'sentence': 'After a long play, I quenched my thirst with Rasna juice', 'meaning': 'Satisfy thirst', 'fillit': 'After a long play, I _____ed my thirst with Rasna juice'}, 

{'word': 'ZEALOUS', 'sentence': 'I was zealous and waiting for the Inside Out movie last month', 'meaning': 'Enthusiastic / eager', 'fillit': 'I was _____ and waiting for the Inside Out movie last month'}, 

{'word': 'RACISM', 'sentence': 'Everyone are humans and we treat them as our friends and don’t follow racism', 'meaning': 'To believe some races of people is better than others - unfair', 'fillit': 'Everyone are humans and we treat them as our friends and don’t follow _____'}, 

{'word': 'VALIANT', 'sentence': 'Saatvik showed valiant effort to save the kid from the barking dog', 'meaning': 'Very brave', 'fillit': 'Saatvik showed _____ effort to save the kid from the barking dog'}, 

{'word': 'UTENSIL', 'sentence': 'I would like to watch utensils as fast as my parents in night', 'meaning': 'Vessel in kitchen', 'fillit': 'I would like to watch _____s as fast as my parents in night'}, 

{'word': 'WOE', 'sentence': 'The Bengaluru city traffic woes are unbearable and well known', 'meaning': 'Great problems / troubles', 'fillit': 'The Bengaluru city traffic _____s are unbearable and well known'}, 

{'word': 'ZONE', 'sentence': 'My Vibgyor friends come from various Bangalore Zones to school based on their distance from home', 'meaning': 'An area', 'fillit': 'My Vibgyor friends come from various Bangalore _____s to school based on their distance from home'}, 

{'word': 'SUMMON', 'sentence': 'Following my friends behaviour in class, my principal summoned all of us to her room', 'meaning': 'To order someone to come', 'fillit': 'Following my friends behaviour in class, my principal _____ed all of us to her room'}, 

{'word': 'X-RAY', 'sentence': 'X-Rays in hospital is used to see our bones and its strength / Weaknesses', 'meaning': 'Radiation type', 'fillit': '_____s in hospital is used to see our bones and its strength / Weaknesses'}, 

{'word': 'THRIVE', 'sentence': 'I thrive hard to clear MARS Spell Bee Exam', 'meaning': 'To grow / develop', 'fillit': 'I _____ hard to clear MARS Spell Bee Exam'}, 

{'word': 'YOKE', 'sentence': 'That Yoke on the cows neck is too heavy for me to lift', 'meaning': 'Wooden bar on cows neck to run vehicle', 'fillit': 'That _____ on the cows neck is too heavy for me to lift'}, 

{'word': 'RESIDUE', 'sentence': 'Lions leave the residue of deer for other animals to eat', 'meaning': 'Part left after main part has gone', 'fillit': 'Lions leave the _____ of deer for other animals to eat'}, 

{'word': 'PARADE', 'sentence': 'I see Military Army Parade every Independence day in TV.', 'meaning': 'Large number of people walking in direction for public celebration', 'fillit': 'I see Military Army _____ every Independence day in TV.'}, 

{'word': 'INSOLENT', 'sentence': 'His father was insolvent on his son over his continuous absence to school', 'meaning': 'Rude and not showing respect', 'fillit': 'His father was insolvent on his son over his continuous absence to school'}, 

{'word': 'CORRUPT', 'sentence': 'MLAs corrupt by using our tax money for his own benefits', 'meaning': 'Dishonestly using power to ur own advantage', 'fillit': 'MLAs _____ by using our tax money for his own benefits'}, 

{'word': 'KERCHIEF', 'sentence': 'KERCHIEF is essential when I get affected with Cold', 'meaning': 'Piece of cloth worn around', 'fillit': '_____ is essential when I get affected with Cold'}, 

{'word': 'JOIST', 'sentence': 'I observe many Joists in old houses in my Grandpa’s house', 'meaning': 'Wood in large buildings to support Ceiling ', 'fillit': 'I observe many _____s in old houses in my Grandpa’s house'}, 

{'word': 'HASTEN', 'sentence': 'We hastened ourselves to attend a Birthday function', 'meaning': 'To make something sooner', 'fillit': 'We _____ed ourselves to attend a Birthday function'}, 

{'word': 'FLUCTUATE', 'sentence': 'The electricity was fluctuating which kept lights dim and bright continuously', 'meaning': 'To keep on changing ', 'fillit': 'The electricity was fluctuating which kept lights dim and bright continuously'}, 

{'word': 'DANDLE', 'sentence': 'I liked to keep that new born child and dandle it', 'meaning': 'To hold baby and move in playful way', 'fillit': 'I liked to keep that new born child and _____ it'}, 

{'word': 'AUDIT', 'sentence': 'Every business will be audited if the shop keepers are paying tax or not.', 'meaning': 'To make official explanation of business', 'fillit': 'Every business will be _____ed if the shop keepers are paying tax or not.'}, 

{'word': 'KIDNAP', 'sentence': 'The bandits kidnapped a small child for asking / demanding more money', 'meaning': 'To take a person away and demand money', 'fillit': 'The bandits _____ped a small child for asking / demanding more money'}, 

{'word': 'MINGLE', 'sentence': 'The new child mingled so well and played during birthday party', 'meaning': 'To mix / combine', 'fillit': 'The new child _____d so well and played during birthday party'}, 

{'word': 'PARODY', 'sentence': 'These days old songs parody come in mega serials ', 'meaning': 'Writing music that copies original style ', 'fillit': 'These days old songs _____ come in mega serials '}, 

{'word': 'RIFFLE', 'sentence': 'Before going to exam, I riffle through all the books', 'meaning': 'To look quickly through book', 'fillit': 'Before going to exam, I _____ through all the books'}, 

{'word': 'TACKLE', 'sentence': 'Tackling young kids at the park is toughest job', 'meaning': 'Try to deal with', 'fillit': 'Tackling young kids at the park is toughest job'}, 

{'word': 'ORATOR', 'sentence': 'I like to be a good orator on any topic in the future', 'meaning': 'Good at public speaking', 'fillit': 'I like to be a good _____ on any topic in the future'}, 

{'word': 'SKILL', 'sentence': 'I would like to develop cooking skills being with my mother', 'meaning': 'Ability to do activity', 'fillit': 'I would like to develop cooking _____s being with my mother'}, 

{'word': 'OVAL', 'sentence': 'The Egg is shaped like oval and not a circle', 'meaning': 'Egg shaped like a cicle', 'fillit': 'The Egg is shaped like _____ and not a circle'}, 

{'word': 'MEADOW', 'sentence': 'You can play on meadow by falling quite often on grass bed', 'meaning': 'Field with grasss and often wild flowers', 'fillit': 'You can play on _____ by falling quite often on grass bed'}, 

{'word': 'HEAP', 'sentence': 'My father poured a heap of toys for me to classify and clean', 'meaning': 'Untidy pile', 'fillit': 'My father poured a _____ of toys for me to classify and clean'}, 

{'word': 'EMIT', 'sentence': 'Sun emits the sun rays that is hot and bright', 'meaning': 'To send out a beam / noise / gas', 'fillit': 'Sun _____s the sun rays that is hot and bright'}, 

{'word': 'CEREAL', 'sentence': 'Eating Cereals in the Morning gives enough nutrients', 'meaning': 'A plant which is grown to produce grain', 'fillit': 'Eating _____s in the Morning gives enough nutrients'}, 

{'word': 'ACUTE', 'sentence': 'Because of his acute heart attack, he was in Hospital Emergency', 'meaning': 'Causing severe problems or damage', 'fillit': 'Because of his _____ heart attack, he was in Hospital Emergency'}, 

{'word': 'DOME', 'sentence': 'It is common to see DOME on Muslim’s Mosques', 'meaning': 'Rounded roof on building', 'fillit': 'It is common to see _____ on Muslim’s Mosques'}, 

{'word': 'BURST', 'sentence': 'The balloons on birthday BURST one after another with large sound', 'meaning': 'To break open suddenly', 'fillit': 'The balloons on birthday _____ one after another with large sound'}, 

{'word': 'FURNISH', 'sentence': 'My friends’s mom furnished the new house with Sofa, TV, Chairs etc.', 'meaning': 'To provide with furniture', 'fillit': 'My friends’s mom _____ed the new house with Sofa, TV, Chairs etc.'}, 

{'word': 'IRONY', 'sentence': 'The Irony is that strong team Chennai lost to the weakest team Sun Risers Hyderabad', 'meaning': 'Has the opposite result', 'fillit': 'The _____ is that strong team Chennai lost to the weakest team Sun Risers Hyderabad'}, 

{'word': 'KNIGHT', 'sentence': 'British used to give Knight recognition for torturing many poor Indians during those days', 'meaning': 'British’s special honor / recognition', 'fillit': 'British used to give _____ recognition for torturing many poor Indians during those days'}, 

{'word': 'PORTABLE', 'sentence': 'This water bottle is portable during our trips outside city', 'meaning': 'Light and small to carry over', 'fillit': 'This water bottle is _____ during our trips outside city'}, 

{'word': 'UNIQUE', 'sentence': 'That child is so unique who can write in both the hands (left and right)', 'meaning': 'Existing one of its type', 'fillit': 'That child is so _____ who can write in both the hands (left and right)'}, 

{'word': 'ZEAL', 'sentence': 'I have zeal to play cricket for long long hours', 'meaning': 'Great enthu', 'fillit': 'I have _____ to play cricket for long long hours'}, 

{'word': 'RUST', 'sentence': 'That old spoon and vessels had rust on it that needs to be cleaned', 'meaning': 'Reddish brown on iron when water falls', 'fillit': 'That old spoon and vessels had _____ on it that needs to be cleaned'}, 

{'word': 'BRIM', 'sentence': 'Don’t pour milk until its brim', 'meaning': 'Top edge of container', 'fillit': 'Don’t pour milk until its _____'}, 

{'word': 'VALID', 'sentence': 'I gave valid reason to my mom why I failed in computer class', 'meaning': 'Based on truth or reason', 'fillit': 'I gave _____ reason to my mom why I failed in computer class'}, 

{'word': 'TOIL', 'sentence': 'I toiled myself to prepare for SEA exam', 'meaning': 'Hard wordk', 'fillit': 'I _____ed myself to prepare for SEA exam'}, 

{'word': 'CHARACTER', 'sentence': 'The character of a person makes him good or bad – that’s why, we like to be good', 'meaning': 'Particular qualities of person', 'fillit': 'The _____ of a person makes him good or bad – that’s why, we like to be good'}, 

{'word': 'QUERY', 'sentence': 'I ask all my queries at the end o the class only', 'meaning': 'doubt', 'fillit': 'I ask all my queries at the end o the class only'}, 

{'word': 'GROCERY', 'sentence': 'DMart is best grocery super market to purchase good items', 'meaning': 'Shop selling food used at home', 'fillit': 'DMart is best _____ super market to purchase good items'}, 

{'word': 'JOVIAL', 'sentence': 'All my 3H friends are so jovial and we talk louder between the classes', 'meaning': 'Friendly and good mood', 'fillit': 'All my 3H friends are so _____ and we talk louder between the classes'}, 

{'word': 'LAVISH', 'sentence': 'My friend Abhiram had lavish GamePad with 10-15 controls on it', 'meaning': 'More than enough / expensive', 'fillit': 'My friend Abhiram had _____ GamePad with 10-15 controls on it'}, 

{'word': 'NOVICE', 'sentence': 'I am Novice in cooking and I would like to learn that skill faster', 'meaning': 'Person who is not experienced in a job', 'fillit': 'I am _____ in cooking and I would like to learn that skill faster'}, 

{'word': 'TARGET', 'sentence': 'I have kept target myself to score 100 runs in a match', 'meaning': 'A level that u wanted to achieve', 'fillit': 'I have kept _____ myself to score 100 runs in a match'}, 

{'word': 'WHIP', 'sentence': 'That man whipped the cow to run faster', 'meaning': 'Piece of leather to hit animals', 'fillit': 'That man _____ped the cow to run faster'}, 

{'word': 'OMIT', 'sentence': 'My mam omitted few chapters for the exmas', 'meaning': 'To fail to include', 'fillit': 'My mam _____ted few chapters for the exmas'}, 

{'word': 'MEMORISE', 'sentence': 'I memorised the whole Vishnu Sahasranamam by attending many satsangs so quickly', 'meaning': 'To learn to remember exactly', 'fillit': 'I _____d the whole Vishnu Sahasranamam by attending many satsangs so quickly'}, 

{'word': 'SCAFFOLD', 'sentence': 'That Scaffold was too tall and was quite dangerous to stand at its tip and work', 'meaning': 'Temporary structure for building high parts construction', 'fillit': 'That _____ was too tall and was quite dangerous to stand at its tip and work'}, 

{'word': 'AVID', 'sentence': 'I am an avid collector of all miniature toys and cars', 'meaning': 'Extremely eager', 'fillit': 'I am an _____ collector of all miniature toys and cars'}, 

{'word': 'EXEMPT', 'sentence': 'Since I scored well in exams, I was exempted from my admission fees to join this school', 'meaning': 'To excuse someone from duty / payment', 'fillit': 'Since I scored well in exams, I was _____ed from my admission fees to join this school'}, 

{'word': 'HALT', 'sentence': 'The bus halted in all the stops to pick all my friends and reached the school in Electronics City', 'meaning': 'To stop moving', 'fillit': 'The bus _____ed in all the stops to pick all my friends and reached the school in Electronics City'}, 

{'word': 'DIVE', 'sentence': 'I am afraid to dive in water during swimming', 'meaning': 'To jump in water', 'fillit': 'I am afraid to _____ in water during swimming'}, 

{'word': 'IMPACT', 'sentence': 'The impact of bat on the ball should be high to go for a SIX', 'meaning': 'The force / of one object hitting another object', 'fillit': 'The _____ of bat on the ball should be high to go for a SIX'}, 

{'word': 'KNOT', 'sentence': 'My sister knots the cloth to make a swing and place the toy on it', 'meaning': 'A join made by tying together / rope', 'fillit': 'My sister _____s the cloth to make a swing and place the toy on it'}, 

{'word': 'FALLACY', 'sentence': 'Drinking water while eating is a fallacy and should be drunk after the meal only', 'meaning': 'An idea that lot of people think true, but false', 'fillit': 'Drinking water while eating is a _____ and should be drunk after the meal only'}, 

{'word': 'EFFLUENT', 'sentence': 'The factories were releasing colorful effluents and was making the river water dirty', 'meaning': 'Liquid waste sent out of factories', 'fillit': 'The factories were releasing colorful _____s and was making the river water dirty'}, 

{'word': 'GUSH', 'sentence': 'When the tap broke in Restroom, the water gushed out from the pipe', 'meaning': 'To flow / send quikcly', 'fillit': 'When the tap broke in Restroom, the water _____ed out from the pipe'}, 

{'word': 'BALLOT', 'sentence': 'Ballots are used to collect all votes secretly ', 'meaning': 'Secret voting', 'fillit': '_____s are used to collect all votes secretly '}, 

{'word': 'CEREMONY', 'sentence': 'My naming ceremony was in my Grandma’s house', 'meaning': 'Formal acts performed during religious occassions', 'fillit': 'My naming _____ was in my Grandma’s house'}, 

{'word': 'COLUMN', 'sentence': 'I only read sports column in newspaper', 'meaning': 'Vertical blocks in news paper to print news', 'fillit': 'I only read sports _____ in newspaper'}, 

{'word': 'HEARKEN', 'sentence': 'I hearken my Social science mam because her topics are very interesting', 'meaning': 'To listen', 'fillit': 'I _____ my Social science mam because her topics are very interesting'}, 

{'word': 'DOSAGE', 'sentence': 'A dosage of 2 tablets for fever is mentioned by doctor', 'meaning': 'Amount of medicine', 'fillit': 'A _____ of 2 tablets for fever is mentioned by doctor'}, 

{'word': 'INCENTIVE', 'sentence': 'As an incentive, my mom told she will give cotton candy if I finish homework before 2 PM.', 'meaning': 'Something that encourages', 'fillit': 'As an _____, my mom told she will give cotton candy if I finish homework before 2 PM.'}, 

{'word': 'ELITE', 'sentence': 'Elite people mostly understand the problems in our society', 'meaning': 'The richest / best educated group in society', 'fillit': '_____ people mostly understand the problems in our society'}, 

];