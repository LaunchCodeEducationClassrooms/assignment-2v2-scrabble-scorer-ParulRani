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
   //console.log(oldScrabbleScorer(word)); 
   //scrabbleScore(word);
   //scorerPrompt();  
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
    if(word[i]==="a"|| word[i]==="i"|| word[i]==="o"|| word[i]==="u")
    {
      score=score+3;
    }
    else
    score++;
  }
  return score;
};

let scrabbleScore=function(word)
{
newPointStructure=transform(oldPointStructure);
let score=0;
word=word.toLowerCase();
for(let i=0;i<word.length;i++)
{
  for(let key in newPointStructure)
  {
    if(word[i]==key)
    {
      score+=Number(newPointStructure[key]);
    }
  }
}
  return score;
};

const scoringAlgorithms = [
  {name:"Simple Score",description:"Each letter is worth 1 point.", scorerFunction:function(word1)
  {
    return simpleScore(word1);
    }
  },
  {name:"Bonus Vowels",description:"Vowels are 3 pts, consonants are 1 pt.",scorerFunction:function(word1)
  {
    return vowelBonusScore(word1);
    }},
  {name:"Scrabble",description:"The traditional scoring algorithm.",scorerFunction:function(word1)
  {
    return scrabbleScore(word1);
    }}];

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
      newStruct[index]=key;
    }
    
  }
  return newStruct;
};

//let newPointStructure = {a:1,e:1,i:1,o:1,u:1,l:1,n:1,r:1,s:1,t:1,
//d:2,g:2,b:3,c:3,m:3,p:3,f:4,h:4,v:4,w:4,m:4,k:5,j:8,x:8,q:10,z:10};
let newPointStructure={};
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

