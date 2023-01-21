const array1: Array<number> = [4, 5, 23, 18, 9, -5, 77, 84];
const array2: Array<number> = [18, 74, 88, 3, 7];

function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const arr3: Array<number> = [];
  let position: number = 0;
  for (let i: number = 0; i < arr1.length + arr2.length; i += 2) {
    arr3[i] = arr1[position];
    if (i < arr2.length * 2) {
      arr3[i + 1] = arr2[position];
    }
    // sets the i variable back on track with the bigger list.
    else {
      i -= 1;
    }

    position += 1;
  }
  return arr3;
}

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

// wordle

function checkWord(secret: string, guess: string): string {
  let result: string = '';
  let letter1: string;
  let letter2: string;
  for (let i: number = 0; i < secret.length; i += 1) {
    letter1 = secret[i];
    letter2 = guess[i];
    if (letter1 === letter2) {
      result += 'c';
    } else if (letter1 !== letter2 && secret.includes(letter2)) {
      result += 'p';
    } else {
      result += 'a';
    }
  }
  return result;
}

let result: string = '';

const attempts: Array<string> = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  result = checkWord(word, 'spoke');
  console.log(result);
}

// candidate
type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const edUnderwood: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};
const roseOlsen: Candidate = { name: 'Rose Olsen', votes: [48, 90, 12, 21, 13], funding: 78889263 };
const leonardWillis: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};
const nateTaylor: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

const candidatesArray: Array<Candidate> = [edUnderwood, roseOlsen, leonardWillis, nateTaylor];

function getTotal(arry: Array<number>): number {
  let total: number = 0;
  for (let i: number = 0; i < arry.length; i += 1) {
    total += arry[i];
  }
  return total;
}

function printTotals(candidates: Array<Candidate>): void {
  let totalVotes: number = 0;
  for (let i: number = 0; i < candidates.length; i += 1) {
    totalVotes += getTotal(candidates[i].votes);
  }
  for (let i: number = 0; i < candidates.length; i += 1) {
    const total: number = getTotal(candidates[i].votes);
    console.log(
      `${candidates[i].name} -- ${total} -- ${(
        (getTotal(candidates[i].votes) / totalVotes) *
        100
      ).toFixed(2)}%`
    );
  }
}

printTotals(candidatesArray);
