// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

var divisible = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;

var firstgreater = n1 > n4;

const slowest = 1500 / 55;
const middle = 1500 / 60;
const fastest = 1500 / 75;

const leastgas = 1500 / 30;
const normalgas = 1500 / 28;
const mostgas = 1500 / 23;

//console.log ("The quickest way to get through the trip that is most cost efficient for gas is" + ${[]})

console.log(
  "Part 1\n" + "Q1: " + divisible,
  "\nQ2: " + firstgreater,
  "\nQ3: " + (((n1 - n2) * n3) % n4),
  "\nQ4",
  "\nPart 2",
  "\nQ5",
  [slowest, middle, fastest],
  [leastgas, normalgas, mostgas],
  175 / 3,
  `\nHow many gallons of fuel will you need for the entire trip? 
        \n- If travelling at 55mph, you will need ${parseFloat(
          leastgas
        ).toFixed(2)} gallons of gas 
        \n- If travelling at 60mph, you will need ${parseFloat(
          normalgas
        ).toFixed(2)} gallons of gas 
        \n- If travelling at 75mph, you will need ${parseFloat(mostgas).toFixed(
          2
        )} gallons of gas
  \nWill your budget be enough to cover the fuel expense?
        \n- The budget will be enough when travelling at or below 60mph because the price of gas when travelling at 55mph is \$${
          (1500 / 30) * 3
        } and 65mph is \$${parseFloat((1500 / 28) * 3).toFixed(
    2
  )} while 75mph is \$${parseFloat((1500 / 23) * 3).toFixed(2)}
  \nHow long will the trip take, in hours?
        \n The fastest the trip will take is ${parseFloat(
          middle
        )} hours and slowest is ${parseFloat(slowest).toFixed(2)} hours`
);
