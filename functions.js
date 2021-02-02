/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
let greet = (person) => {

  console.log(`Hello ${person}`);


  }

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
let isOdd = (n) => {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }

}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
let oddsSmallerThan = (n) => {
 
  return parseInt(n/2);

  }

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
let squareOrDouble = (n) => {
  if (n%2 != 0){
    return n*n;
  } else if (n%2 === 0) {
    return n*2
  }
}

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
