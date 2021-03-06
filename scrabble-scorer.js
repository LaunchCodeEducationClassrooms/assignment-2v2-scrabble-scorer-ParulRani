// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word="";
function initialPrompt() {
   console.log("Let's play some scrabble!");
    word=input.question("Enter a word: ");
   
};

let simpleScore=function(word)
{
let score=0;
for(let i=0;i<word.length;i++)
{
  score++;
}
return score;
};

let vowelBonusScore=function(word)
{
  let score=0;
  word=word.toLowerCase();
  for(let i=0;i<word.length;i++)
  {
    if(word[i]==="a"|| word[i]==="i"|| word[i]==="o"|| word[i]==="u" || word[i]=="e")
    {
      score+=3;
    }
    else
    score++;
  }
  return score;
};

let scrabbleScore=function(word)
{
let score=0;
word=word.toLowerCase();
for(let i=0;i<word.length;i++)
{
  for(let key in newPointStructure)
  {
    if(word[i]==key)
    {
      score+=newPointStructure[key];
    }
  }
}
  return score;
};

const scoringAlgorithms = [
  Object({name:"Simple Score",description:"Each letter is worth 1 point.",scoringFunction: simpleScore}),
  Object({name:"Bonus Vowels",description:"Vowels are 3 pts, consonants are 1 pt.",scoringFunction: vowelBonusScore}),
  Object({name:"Scrabble",description:"The traditional scoringalgorithm.",scoringFunction: scrabbleScore})];

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");
  let whichAlgo=input.question("Enter 0, 1, or 2: ");
  whichAlgo=Number(whichAlgo);
  let score;
  while(typeof whichAlgo!="number" || whichAlgo<0 || whichAlgo>2)
  {
    whichAlgo=input.question("Enter 0, 1, or 2: ")
  whichAlgo=Number(whichAlgo);
  }
  if(whichAlgo==0)
  {
   console.log(`algorithm name: ${scoringAlgorithms[0].name}`);
   console.log(`scorerFunction result: ${scoringAlgorithms[0].scorerFunction(word)}`);
  }
  if(whichAlgo==1)
  {
   console.log(`algorithm name: ${scoringAlgorithms[1].name}`);
   console.log(`scorerFunction result: ${scoringAlgorithms[1].scorerFunction(word)}`);
  }
  if(whichAlgo==2)
  {
   console.log(`algorithm name: ${scoringAlgorithms[2].name}`);
   console.log(`scorerFunction result: ${scoringAlgorithms[2].scorerFunction(word)}`);
  }
  return whichAlgo;
}

function transform(oldPointStructure) {
  let letters={};
  let newStruct={};
  let index="";
  
  //console.log(oldPointStructure);
  for(let key in oldPointStructure)
  {
  
    for(let i=0;i<oldPointStructure[key].length;i++){
      index=(oldPointStructure[key][i]).toLowerCase();
      newStruct[index]=Number(key);
    }
    
  }
  return newStruct;
};
let newPointStructure=transform(oldPointStructure);
function runProgram() {
   initialPrompt();
   scorerPrompt();
   
//console.log("Scrabble scoring values for");
//console.log("letter a: ", newPointStructure.a);
//console.log("letter j: ", newPointStructure.j);
//console.log("letter z: ", newPointStructure["z"]);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

