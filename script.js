let operator = "";
let previousValue = "";
let currentValue = "";
let currentNumber = "";

document.addEventListener("DOMContentLoaded", function () {
  let clear = document.querySelector(".btn-clear");
  let equals = document.querySelector(".equals");
  let decimal = document.querySelector(".decimal");

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let previousNumber = document.querySelector(".previous");
  let currentNumber = document.querySelector(".current");
  // currentNumber.textContent = 0;
  numbers.forEach((numbers) =>
    numbers.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);

      currentNumber.textContent = currentValue;
    })
  );
  decimal.addEventListener("click", function (e) {
    handleDecimal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key >= 0 && e.key <= 9) {
      handleNumber(e.key);
      currentNumber.textContent = currentValue;
    } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "*" ||
      e.key === "/"
    ) {
      handleOperator(e.key);
      currentNumber.textContent = currentValue;
      previousNumber.textContent = previousValue + "" + operator;
      currentNumber.textContent = currentValue;
    } else if (e.key === "=") {
      operate();
      previousNumber.textContent = " ";

      currentNumber.textContent = previousValue;
      console.log(e.key);
    } else if (e.key === ".") {
      handleDecimal();
      console.log(e.key);
    }
  });
  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousNumber.textContent = previousValue + "" + operator;
      currentNumber.textContent = currentValue;
    })
  );
  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousNumber.textContent = null;
    currentNumber.textContent = null;
  });
  equals.addEventListener("click", function () {
    operate();
    previousNumber.textContent = " ";

    currentNumber.textContent = previousValue;
  });
});
function handleDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}

function handleNumber(num) {
  if (currentValue.length <= 10) {
    currentValue += num;
  }
}
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "×") {
    previousValue *= currentValue;
  } else {
    if (currentValue != 0) {
      previousValue /= currentValue;
    } else {
      previousValue = "undefined";
    }
  }
}
previousValue = roundNumber(previousValue);
previousValue = previousValue.toString();
currentValue = currentValue.toString();
console.log(previousValue);

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}
function nightMode() {
  var element = document.body;
  element.classList.toggle("night-mode");
}
