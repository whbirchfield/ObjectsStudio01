// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(ranEntryNumbers) {
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
  let  numberSelected = Math.floor(Math.random() * ranEntryNumbers.length);
    if (randomNumbers.includes(ranEntryNumbers[numberSelected])){
      numberSelected = Math.floor(Math.random() * ranEntryNumbers.length);  
    } else{
    randomNumbers.push(ranEntryNumbers[numberSelected]);
    }
  }return randomNumbers;
}

// Code your buildCrewArray function here:
let crewArray = [];
function buildCrewArray (randomPicks, animalsList){

  let crewMember = '';
  i = 0;
  while (i<randomPicks.length){
  crewMember = animalsList.find(element => element.astronautID === randomPicks[i])
  crewArray.push(crewMember.name);
  //console.log(crewMember);
  i++;
  }
 return crewArray;
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function(hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function(hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function(hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function(hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function(hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function(hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements: 

console.log(selectRandomEntry(idNumbers) + '\n');

buildCrewArray(selectRandomEntry(idNumbers), animals);

console.log(`${crewArray[0]}, ${crewArray[1]}, and ${crewArray[2]} are going to space!`);