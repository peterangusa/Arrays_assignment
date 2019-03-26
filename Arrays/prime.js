// import { shuffle } from "shuffler";

const shuffle = require("./shuffler.js");

// returns true is number is a prime and false if nor
var isPrime = (num) => {
	for(var i = 2; i < num; i++)
    	if(num % i === 0) return false;
  	return num > 1;
}

// final function
// function to return true if prime and false if not
let primes = (min, max) => {
	var finePrimes = [];

	for (var i = min; i <= max; i++) {
		isPrime(i)? finePrimes.push(i) : null;
	}

	return finePrimes;
}

let sortAll = (arr) => {

	let swapped;
	let size = arr.length -1;

	do {
		swapped = false;

		for (let i = 0; i < size; i++) {
			//
			if (arr[i] > arr[i+1]) {
				const temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped=true;
			}
		}
	} while(swapped);
	return arr;
}

console.log(primes(0,100));
console.log('\n--------- shuffled items -----------\n');
console.log(shuffle(primes(0,100)));
console.log('\n--------- reordered items ----------\n');
console.log(sortAll(shuffle(primes(0,100))));
