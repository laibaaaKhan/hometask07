"use strict";

let operation = prompt("What operation do you want to perform? (+, -, *, /)");
let firstNumber = Number(prompt("Enter the first number"));
let secondNumber = Number(prompt("Enter the second number"));

// function add(a, b) {
//   if ((a) || (b)) {
//     console.log("Not a valid number");
//   } else {
//     console.log("Answer: ", a + b);
//   }
// }

// function subtract(a, b) {
//   if ((a) || (b)) {
//     console.log("Not a valid number");
//   } else {
//     console.log("Answer: ", a - b);
//   }
// }

// function multiply(a, b) {
//   if ((a) || (b)) {
//     console.log("Not a valid number");
//   } else {
//     console.log("Answer: ", a * b);
//   }
// }

// function divide(a, b) {
//   if ((a) || (b)) {
//     console.log("Not a valid number");
//   } else if (b === 0) {
//     console.log("Cannot divide by zero.");
//   } else {
//     console.log("Answer: ", a / b);
//   }
// }

function add(a, b) {
  if (a && b) {
    console.log("Answer: ", a + b);
  } else {
    console.log("Not a valid number");
  }
}

function subtract(a, b) {
  if (a && b) {
    console.log("Answer: ", a - b);
  } else {
    console.log("Not a valid number");
  }
}

function multiply(a, b) {
  if (a && b) {
    console.log("Answer: ", a * b);
  } else {
    console.log("Not a valid number");
  }
}

function divide(a, b) {
  if (a && b) {
    console.log("Answer: ", a / b);
  } else if (b === 0) {
    console.log("Cannot divide by zero.");
  } else {
    console.log("Not a valid number");
  }
}

switch (operation) {
  case "+":
    add(firstNumber, secondNumber);
    break;
  case "-":
    subtract(firstNumber, secondNumber);
    break;
  case "*":
    multiply(firstNumber, secondNumber);
    break;
  case "/":
    divide(firstNumber, secondNumber);
    break;
  default:
    console.log("Not a valid operation");
}
