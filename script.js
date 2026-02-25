const questions = document.querySelectorAll(".questions");
questions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const symbol = btn.querySelector(".symbol");
        const answer = btn.querySelector(".question-answer")
        if (symbol.style.transform === "rotate(45deg)") {
            symbol.style.transform = "rotate(0deg)";
        } else {
            symbol.style.transform = "rotate(45deg)";
        }
        answer.classList.toggle("active");
        if (answer.classList.contains("active")) {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    });
});

