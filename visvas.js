function allocate(isShuffle) {   
	var txtNames = document.getElementById('names').value;
	var objallocation = document.getElementById('allocation'); 
	var text = '';
	
	//Devotees 
	var splittedLines = txtNames.split('\n');
	var curatedLines = [];
	for (let i = 0; i < splittedLines.length; i++) {
		if (splittedLines[i].trim()  != "") {
			curatedLines.push(splittedLines[i].trim());
		}
	}
	if (curatedLines.length == 0) {
		alert('There are no people to allocate!');
		return;
	}
	//Randomize
	if(isShuffle) shuffle(curatedLines);
	
	if (curatedLines.length < 20) {
		curatedLines = makeItTwenty(curatedLines);
		peopleForDhyanam = 2;
	} else peopleForDhyanam = 3;

	var devoteeCounter = 0;
	
	var total = 22 + 108 + 33;
	var totalDevotees = (curatedLines.length - 1 - peopleForDhyanam);
	var perpersonApprox = Math.round(total / totalDevotees);
	console.log(perpersonApprox + ' per person approx.');
	
	var peopleForPoorvaangam = Math.ceil(22 / perpersonApprox);
	var peopleForPhalashruti = Math.ceil(33 / perpersonApprox);
	peopleForShlokas = totalDevotees - (peopleForPhalashruti + peopleForPoorvaangam)
	
	txtPledgePrayer = 'Starting Prayer: ' + '\n' + 'Pledge: ' + '\n\n';
	//===================================================================================================
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForPoorvaangam; devoteeCounter = nEnd;
	txtPoorvangam = assignShlokas(22, nStart, nEnd, curatedLines, 'Poorvangam');
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + 1; devoteeCounter = nEnd;
	txtNyasaa = fillDahses25("Nyasa: ") + curatedLines[nStart] + '\n';
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForDhyanam; devoteeCounter = nEnd;
	txtDhyaaanam = assignDhyaanam(peopleForDhyanam, nStart, curatedLines);
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForShlokas; devoteeCounter = nEnd;
	txtShlokam = assignShlokas(108, nStart, nEnd, curatedLines, 'Shlokam');
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForPhalashruti; devoteeCounter = nEnd;
	txtPhalashruti = assignShlokas(33, nStart, nEnd, curatedLines, 'Phalashruti');
	//===================================================================================================
	txtEndingPrayer = 'Ending Prayer: ' + '\n';
	
	objallocation.value = txtPledgePrayer + txtPoorvangam + '\n' + txtNyasaa + '\n' + txtDhyaaanam + '\n' + txtShlokam + '\n' + txtPhalashruti + '\n' + txtEndingPrayer;
}

function assignShlokas(nShlokas, nStart, nEnd, curatedLines, shlokamName) {
	
	var totalPeople = nEnd - nStart;
	var perpersonShlokasDecimal = nShlokas / totalPeople
	//console.log(totalPeople + ' ppl with ' + perpersonShlokasDecimal + ' each');
	
	var startShloka = 1;
	var text = '';
	var counter = nStart;
	var nPending = 0;
	
	for (let i = 1; i <= totalPeople; i++) {		
		nResultant = nPending + perpersonShlokasDecimal;
		//console.log(i + '...' + shlokamName + '.s resultant '+ nResultant)
		nTotalShlokas = Math.floor(nResultant);
		nPending = nResultant - nTotalShlokas;
		endShlokaNumber = startShloka + nTotalShlokas-1;
		if (i != totalPeople) {
			makeText = fillDahses25(shlokamName + ": " + startShloka + "-" + endShlokaNumber + '-[' + (endShlokaNumber-startShloka+1) + ']')+ curatedLines[counter] + "\n";
			startShloka = endShlokaNumber + 1;
			counter++;
			text = text + makeText;
		} else {
			makeText = fillDahses25(shlokamName + ": " + startShloka + "-" + nShlokas + '-[' + (nShlokas-startShloka+1) + ']' )+ curatedLines[counter] + "\n";
			text = text + makeText;
		}
	}
	return text;
}

function assignDhyaanam(peopleForDhyanam, nStart, curatedLines) {
	makeText = fillDahses25("Dhyaanam: 1-3") + curatedLines[nStart] + "\n";
	if(peopleForDhyanam == 2) {
		makeText = makeText + fillDahses25("Dhyaanam: 4-8") + curatedLines[nStart+1] + "\n";
	} else {
		makeText = makeText + fillDahses25("Dhyaanam: 4-5") + curatedLines[nStart+1] + "\n";
		makeText = makeText + fillDahses25("Dhyaanam: 6-8") + curatedLines[nStart+2] + "\n";
	}
	return makeText;
}

function loadPeople() {
	var objNames = document.getElementById('names'); 
	text = '';
	for (let i = 1; i <= 40; i++) {
		text += i + 'person' + '\n'
	}
	objNames.value =  text
}

function makeItTwenty(curatedLines) {
	total = curatedLines.length
	if (total < 20) loopThrough = Math.ceil(20 / curatedLines.length);
	var curatedLinesNew = [];
	
	for (i = 0; i < loopThrough; i++) {
		for (ctr = 0; ctr < curatedLines.length; ctr++) {
			curatedLinesNew.push(curatedLines[ctr].trim());
		}
	}
	return curatedLinesNew;
}

function fillDahses25(word) {
	currentLength = word.length
	dashesNeeded = 25 - currentLength;
	strDash = '';
	for (i = 1; i <= dashesNeeded; i++) {
		strDash += '-';
	}
	return word + strDash;
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function copyToClipboard(object) {
  var copyText = document.getElementById(object);
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied. You can now paste in your group.");
}

function clearNames() {
  document.getElementById('names').value = '' ;
}
