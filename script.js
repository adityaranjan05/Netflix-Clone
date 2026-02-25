const showAnswer = (button) => {
    let symbol = button.querySelector(".symbol");
    let answer = button.querySelector(".question-answer");
    if (symbol.innerHTML === "+") {
        symbol.innerHTML = "×";
        answer.style.display ="block";
    } else {
        symbol.innerHTML = "+";
        answer.style.display = "none";
    }
}