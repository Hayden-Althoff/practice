const array1: Array<number> = [4, 5, 23, 18, 9, -5];
const array2: Array<number> = [18, 74, 88, 3, 7, 44];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);


//wordle
let secWord: string = 'spoke';
let guess: string = 'scope';
let result: string = '';

const attempts: Array<string> = ['rains', 'shout', 'scope', 'spoke'];

for(const word of attempts){
  const result = checkWord(word, 'spoke');
  console.log(result);
}

function checkWord( secret: string, guess: string ): string{
  let result: string = '';
  let letter1: string;
  let letter2: string;
  for( let i: number = 0; i < secret.length; i += 1) {
    letter1 = secret[i];
    letter2 = guess[i];
    if (letter1 === letter2){
      result = result + "c";
    }
    else if (letter1 !== letter2 && secret.includes(letter2)){
      result = result + 'p';
    }
    else {
      result = result + 'a';
    }
  }

  return result;
}



//candidate
type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

let edUnderwood: Candidate = { name: "Edward Underwood", votes: [192, 147, 186, 114, 267], funding: 58182890};
let roseOlsen: Candidate = { name: "Rose Olsen", votes: [48, 90, 12, 21, 13], funding: 78889263};
let leonardWillis: Candidate = { name: "Leonard Willis", votes: [206, 312, 121, 408, 382], funding: 36070689};
let nateTaylor: Candidate = { name: "Nathaniel Taylor", votes: [37, 21, 38, 39, 29], funding: 6317921937};

//I couldnt figure out the syntax for adding member functions or I would have included all of this in the Candidate type
let euTotal: number = getTotal( edUnderwood.votes );
let roTotal: number = getTotal( roseOlsen.votes );
let lwTotal: number = getTotal( leonardWillis.votes );
let ntTotal: number = getTotal( nateTaylor.votes );
let overallTotal: number = euTotal + roTotal + lwTotal + ntTotal;
let euPercentage: number = euTotal / overallTotal;
let roPercentage: number = roTotal / overallTotal;
let lwPercentage: number = lwTotal / overallTotal;
let ntPercentage: number = ntTotal / overallTotal;
let euSpent: number = edUnderwood.funding / euTotal;
let roSpent: number = roseOlsen.funding / roTotal;
let lwSpent: number = leonardWillis.funding / lwTotal;
let ntSpent: number = nateTaylor.funding / ntTotal;


console.log(`Edward Underwood -- ${euTotal} -- ${euPercentage}`);
console.log(`Rose Olsen -- ${roTotal} -- ${roPercentage}`);
console.log(`Leonard Willis -- ${lwTotal} -- ${lwPercentage}`);
console.log(`Nathaniel Taylor -- ${ntTotal} -- ${ntPercentage}`);

function getTotal( arry: Array<number>): number{
  let total: number = 0;
    for(let i: number = 0; i < arry.length; i += 1){
      total = total + arry[i];
    }
    return total;
}










function merge (arr1: Array<number>, arr2: Array<number>): Array<number>{
  let arr3: Array<number> = [];
  let position: number = 0;
    for(let i: number = 0; i < arr1.length; i += 2){
      arr3[i] = arr1[position];
      arr3[i + 1] = arr2[position];
      position += 1;
    }
    return arr3;
}


