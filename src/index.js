import Number from "./models/number.js";

const digits = {
  0: [true, true, true, true, true, true, false],
  1: [false, false, true, false, false, true, false],
  2: [true, false, true, true, true, false, true],
  3: [true, false, true, true, false, true, true],
  4: [false, true, true, false, false, true, true],
  5: [true, true, false, true, false, true, true],
  6: [true, true, false, true, true, true, true],
  7: [true, false, true, false, false, true, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true],
};

const digit1 = document.getElementById("digit-1");
const digit2 = document.getElementById("digit-2");
const digit3 = document.getElementById("digit-3");
const statusMessage = document.getElementById("status");
const btn = document.getElementById("submit");
const num = document.getElementById("number");

const digitsArr = [digit1, digit2, digit3];
const numberToGuess = await Number.getNumber();
const refresh = document.getElementById("new-game");

if (numberToGuess.value) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (parseInt(num.value)) {
      digit2.style.display = "none";
      digit3.style.display = "none";

      const numArr = num.value.split("");

      statusMessage.innerText =
        parseInt(num.value) > numberToGuess.value
          ? "É Menor"
          : parseInt(num.value) < numberToGuess.value
          ? "É Maior"
          : "Você acertou!!!!";

      numArr.forEach((digit, idx) => {
        digitsArr[idx].style.display = "block";

        digits[digit].forEach((el, index) => {
          digitsArr[idx].children[index + 1].style.fill = "#DDD";

          if (el)
            digitsArr[idx].children[index + 1].style.fill =
              parseInt(num.value) === numberToGuess.value
                ? "#32BF00"
                : "#262A34";

          if (parseInt(num.value) === numberToGuess.value) {
            statusMessage.style.color = "#32BF00";
            num.disabled = true;
            btn.disabled = true;
            refresh.style.display = "flex";
            digit1.parentElement.style.marginBottom = "56px";
          }
        });
      });

      refresh.addEventListener('click', () => {
        window.location.reload()
      })
      
      num.value = "";
    }
  });
} else {
  statusMessage.innerText = "ERRO";
  statusMessage.style.color = "#CC3300";
  num.disabled = true;
  btn.disabled = true;
  refresh.style.display = "flex";
  digit1.parentElement.style.marginBottom = "56px";

  `${numberToGuess.StatusCode}`.split("").forEach((digit, idx) => {
    digitsArr[idx].style.display = "block";

    digits[digit].forEach((el, index) => {
      digitsArr[idx].children[index + 1].style.fill = "#DDD";

      if (el) digitsArr[idx].children[index + 1].style.fill = "#CC3300";
    });
  });
}
