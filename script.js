async function loadQuiz() {
    const files = [
        "allmanbildning.json",
        "geografi.json",
        "historia.json",
        "natur.json",
        "it.json",
        "m365.json",
        "pedagogik.json",
        "hjarngympa.json"
    ];

    let questions = [];

    for (const file of files) {
        const response = await fetch(file);
        const data = await response.json();
        questions = questions.concat(data);
    }

    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const day = Math.floor((today - start) / 86400000);

    const question =
        questions[day % questions.length];

    document.getElementById("category").textContent =
        question.category;

    document.getElementById("question").textContent =
        question.question;
}

loadQuiz();
