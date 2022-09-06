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
}

const digit1 = document.getElementById("digit-1")
const digit2 = document.getElementById("digit-2")
const digit3 = document.getElementById("digit-3")
const statusMessage = document.getElementById("status")
const btn = document.getElementById("submit")
const num = document.getElementById("number")

const digitsArr = [digit1, digit2, digit3]

btn.addEventListener("click", (e) => {
    e.preventDefault()

    digit2.style.display = "none"
    digit3.style.display = "none"

    const numArr = num.value.split("")

    statusMessage.innerText = parseInt(num.value) > 90 ? "É maior" : "É menor"

    numArr.forEach((digit, idx) => {
        digitsArr[idx].style.display = "block"

        digits[digit].forEach((el, index) => {
            digitsArr[idx].children[index + 1].style.fill = "#DDD"
            if (el)
                digitsArr[idx].children[index + 1].style.fill = "#262A34"
        })
    })
})