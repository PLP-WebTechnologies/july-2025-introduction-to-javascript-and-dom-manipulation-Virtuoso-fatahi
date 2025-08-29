// Variable declarations and conditionals (Part 1)
let name = "Shola Jackson"; // string
const dob = 1985; // number
let isMarried = false;

// Conditionals

// A if statement that determines if a person is eligibile to vote.
let age = 19;

if (age >= 18) {
          console.log("You can vote!");
} else {
          console.log("You are not eligible to vote!");
}

// A conditional that check the student's grade
let score = 59;

if (score >= 90) {
          console.log("Grade A");
          
} else if (score >= 80) {
          console.log("Grade B");
          
} else if (score >= 70) {
          console.log("Grade C");
          
} else if (score >= 60) {
          console.log("Grade D");
          
} else {
          console.log("Fail");
          
}

// At least 2 custom functions (Part 2)

// A function that changes the content of an element
const changeText = () => {
  if (header.textContent != "Welcome to PLP Software Enginnering Program!") {

// At least 3 DOM interactions (Part 4)
    header.textContent = "I'm a Software Enginner.";
    header.style.color = "blue";
  } else {
    header.textContent = "I'm a Graphic Designer.";
    header.style.color = "red";
  }
};

// A function that multiplies two numbers
function multipleNumber (numOne, numTwo) {
          return numOne * numTwo;
}

let result = multipleNumber(7,9);
console.log(`The result is ${result}.`);


// At least 2 loop examples (Part 3)
 
// A for in loop that list the items in fruits array
let fruits = ["apple", "banana", "carrot", "dates", "guava"];

for (fruit in fruits) {
          console.log(`I love ${fruits[fruit]}.`);
}

// A while loop that count numbers less than 10
let count = 5

while (count < 10) {
          let answer = `The number is ${count}`;
          count++;
          console.log(answer);
          
}

