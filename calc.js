document.addEventListener("DOMContentLoaded", function () {
  let inp = document.querySelector("#inpu");
  let add = document.querySelector(".add");
  let sub = document.querySelector(".sub");
  let mult = document.querySelector(".mult");
  let div = document.querySelector(".div");
  let equal = document.querySelector(".equal");
  let clear = document.querySelector(".clear");
  let operator = "";
  let firstValue = null;
  let secondValue = null;
  let isSecondValue = false; // flag to know when to capture second number
  let btns = document.querySelectorAll('.b0, .b1, .b2, .b3, .b4, .b5, .b6, .b7,.b8,.b9');

  inp.value = "";

  for (let btn of btns) {
    btn.addEventListener("click", function () {
      inp.value += this.innerText;
    });
  }

  function operatorClick(op) {
    if (inp.value === "" || isSecondValue) return;

    firstValue = Number(inp.value);
    operator = op;
    isSecondValue = true;
    inp.value += operator;
  }

  add.addEventListener("click", () => operatorClick("+"));
  sub.addEventListener("click", () => operatorClick("-"));
  mult.addEventListener("click", () => operatorClick("×"));
  div.addEventListener("click", () => operatorClick("÷"));

  equal.addEventListener("click", function () {
    if (!operator || !isSecondValue) return;

    let parts = inp.value.split(operator);
    if (parts.length < 2 || parts[1] === "") return;

    secondValue = Number(parts[1]);

    let result = calculate(firstValue, secondValue, operator);
    inp.value = result;

    firstValue = result;
    secondValue = null;
    operator = "";
    isSecondValue = false;
  });

  let cross = document.querySelector(".cross");
  cross.addEventListener("click", function () {
    inp.value = inp.value.slice(0, -1);
  })

  clear.addEventListener("click", function () {
    inp.value = "";
    firstValue = null;
    secondValue = null;
    operator = "";
    isSecondValue = false;
  });

  function calculate(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b === 0 ? "Error" : a / b;
      default:
        return b;
    }
  }
});
