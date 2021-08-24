var strCsv = '';
var curatedLinesRolled  = [];

function allocate(strStyle) {
	strCsv = 'Shlokam,Start,End,Count,Devotee Name,Backup Chanter' + '\n\n';
	var txtNames = document.getElementById('names').value;
	var objallocation = document.getElementById('allocation'); 
	var text = '';
	var isRemovedVISVAS = false;
	
	//Names - remove spaces and new lines
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
	if (curatedLines[0].toUpperCase() == 'VISVAS') { 
		curatedLines = removeVISVAS(curatedLines);
		isRemovedVISVAS = true;
	}
	
	//Randomize / Making big / Rolling
	if(strStyle == 'random') shuffle(curatedLines);
	if(strStyle == 'roll') {
		if (curatedLinesRolled.length == 0) { console.log('no rolled'); rollNames(curatedLines, true); }
		else { console.log(curatedLinesRolled); rollNames(curatedLinesRolled, true); curatedLines = Array.from(curatedLinesRolled); }
	}	
	if (curatedLines.length < 20) {
		curatedLines = makeItTwenty(curatedLines);
		peopleForDhyanam = 2;
	} else peopleForDhyanam = 3;
	if(isRemovedVISVAS) { curatedLines = addVISVAS(curatedLines); }
	
	//==========================================================================================
	
	//Start Processing
	var devoteeCounter = 0;
	
	var total = 22 + 108 + 33;
	var totalDevotees = (curatedLines.length - 1 - peopleForDhyanam);
	var perpersonApprox = Math.round(total / totalDevotees);
	console.log(perpersonApprox + ' per person approx.');
	
	var peopleForPoorvaangam = Math.ceil(22 / perpersonApprox);
	var peopleForPhalashruti = Math.ceil(33 / perpersonApprox);
	peopleForShlokas = totalDevotees - (peopleForPhalashruti + peopleForPoorvaangam)
	
	var strStartingPrayerPerson = getRandomName(curatedLines);
	var strPledgePerson = getRandomName(curatedLines);
	txtPledgePrayer = '*Om Namo Narayana* \n' + 'Starting Prayer: ' + strStartingPrayerPerson + '\n' + 'Pledge: ' + strPledgePerson + '\n\n';
	strCsv = strCsv + 'Starting Prayer: ,,,,' + strStartingPrayerPerson + '\n' + 'Pledge: ,,,,' + strPledgePerson + '\n\n';
	//===================================================================================================
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForPoorvaangam; devoteeCounter = nEnd;
	txtPoorvangam = assignShlokas(22, nStart, nEnd, curatedLines, 'Poorvangam');
	strCsv = strCsv + '\n';
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + 1; devoteeCounter = nEnd;
	txtNyasaa = fillDahses25("Nyasa: ") + curatedLines[nStart] + '\n';
	strCsv = strCsv + 'Nyasa' + ',,,,' + curatedLines[nStart] + "\n\n";
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForDhyanam; devoteeCounter = nEnd;
	txtDhyaaanam = assignDhyaanam(peopleForDhyanam, nStart, curatedLines);
	strCsv = strCsv + '\n';
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForShlokas; devoteeCounter = nEnd;
	txtShlokam = assignShlokas(108, nStart, nEnd, curatedLines, 'Shlokam');
	strCsv = strCsv + '\n';
	
	nStart = devoteeCounter;  nEnd = devoteeCounter + peopleForPhalashruti; devoteeCounter = nEnd;
	txtPhalashruti = assignShlokas(33, nStart, nEnd, curatedLines, 'Phalashruti');
	strCsv = strCsv + '\n';
	
	//===================================================================================================
	var strEndingPrayerPerson = getRandomName(curatedLines);
	txtEndingPrayer = 'Ending Prayer: ' + strEndingPrayerPerson + '\n';
	strCsv = strCsv + 'Ending Prayer: ,,,,' + strEndingPrayerPerson + '\n';
	
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
		nTotalShlokas = Math.floor(nResultant);
		nPending = nResultant - nTotalShlokas;
		endShlokaNumber = startShloka + nTotalShlokas-1;
		if (i != totalPeople) {
			makeText = fillDahses25(shlokamName + ": " + startShloka + "-" + endShlokaNumber + '-[' + (endShlokaNumber-startShloka+1) + ']')+ curatedLines[counter] + "\n";
			strCsv = strCsv + shlokamName + ',' + startShloka + ',' + endShlokaNumber + ',' + '-[' +  (endShlokaNumber-startShloka+1) + '],' + curatedLines[counter] + "\n";
			
			startShloka = endShlokaNumber + 1;
			counter++;
			text = text + makeText;
		} else {
			makeText = fillDahses25(shlokamName + ": " + startShloka + "-" + nShlokas + '-[' + (nShlokas-startShloka+1) + ']' )+ curatedLines[counter] + "\n";
			strCsv = strCsv + shlokamName + ',' + startShloka + ',' + nShlokas + ',' + '-[' +  (nShlokas-startShloka+1) + '],' + curatedLines[counter] + "\n";
			text = text + makeText;
		}
	}
	return text;
}

function assignDhyaanam(peopleForDhyanam, nStart, curatedLines) {
	makeText = fillDahses25("Dhyaanam: 1-3") + curatedLines[nStart] + "\n";
	strCsv = strCsv + 'Dhyaanam' + ',1,3,,' + curatedLines[nStart] + "\n";
	
	if(peopleForDhyanam == 2) {
		makeText = makeText + fillDahses25("Dhyaanam: 4-8") + curatedLines[nStart+1] + "\n";
		strCsv = strCsv + 'Dhyaanam' + ',4,8,,' + curatedLines[nStart+1] + "\n";
	} else {
		makeText = makeText + fillDahses25("Dhyaanam: 4-5") + curatedLines[nStart+1] + "\n";
		strCsv = strCsv + 'Dhyaanam' + ',4,5,,' + curatedLines[nStart+1] + "\n";
		
		makeText = makeText + fillDahses25("Dhyaanam: 6-8") + curatedLines[nStart+2] + "\n";
		strCsv = strCsv + 'Dhyaanam' + ',6,8,,' + curatedLines[nStart+2] + "\n";
	}
	return makeText;
}

function loadPeople() {
	var objNames = document.getElementById('names');
	if(window.localStorage.getItem("vsn-names") != '') 
		objNames.value = window.localStorage.getItem("vsn-names");
	else {
		text = '';
		for (let i = 1; i <= 22; i++) {
			text += i + 'person' + '\n'
		}
		objNames.value =  text
	}	
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
  var currentIndex = array.length, randomIndex;
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
function rollNames(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  
  curatedLinesRolled = Array.from(arr);
  return arr;
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

function downloadCSV() {
	var hiddenElement = document.createElement('a'); 
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(strCsv);
    hiddenElement.target = '_blank';
      
    //provide the name for the CSV file to be downloaded
    hiddenElement.download = 'VSN_Allocations.csv';
    hiddenElement.click();
}
function operateNames(strDesign) {
	var txtNames = document.getElementById('names').value;
	var objRandomnames = document.getElementById('randomnames');
	
	var splittedLines = txtNames.split('\n');
	var curatedLines = [];
	for (let i = 0; i < splittedLines.length; i++) {
		if (splittedLines[i].trim()  != "") {
			curatedLines.push(splittedLines[i].trim());
		}
	}
	if (curatedLines.length == 0) {
		alert('There are no names to randomize!');
		return;
	}
	shuffle(curatedLines);
	var text = '';
	for (let i = 0; i < curatedLines.length; i++) { text += curatedLines[i] + '\n'; }
	objRandomnames.value = text;
}

function tempSave() {
	window.localStorage.setItem("vsn-names", document.getElementById('names').value);
}

function removeVISVAS(curatedLines) {
	var curatedLinesNew = [];
	for (i = 1; i < curatedLines.length; i++) {
		curatedLinesNew.push(curatedLines[i].trim());
	}
	return curatedLinesNew;
}

function addVISVAS(curatedLines) {
	var curatedLinesNew = [];
	curatedLinesNew[0] = 'VISVAS';
	for (i = 0; i < curatedLines.length; i++) {
		curatedLinesNew.push(curatedLines[i].trim());
	}
	return curatedLinesNew;
}

function getRandomName(curatedLines) {
	var randNumber = Math.floor(Math.random() * (curatedLines.length + 1));
	return curatedLines[randNumber];
}

function sendInWhatsApp() {
	var wanumber = document.getElementById('wanumber').value;
	console.log(wanumber);
	var wanumber = wanumber.replace(/[^\d]/g, '');
	console.log(wanumber);
	if(wanumber.length == 10 ) {  location.href = "https://api.whatsapp.com/send?phone=91" + wanumber + "&text=Here is the link to register for upcoming A-Batch: https://forms.gle/Fb7XLQ45GyYNGwcQ6";  }
	else { alert('Please enter 10 digit phone number without +91 prefix.'); }
	
}
