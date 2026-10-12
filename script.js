async function loadQuiz() {
    try {

        const files = [
            "allmanbildning.json",
            "geografi.json",
            "historia.json",
            "naturvetenskap.json",
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

        const startOfYear = new Date(
            today.getFullYear(),
            0,
            0
        );

        const dayOfYear = Math.floor(
            (today - startOfYear) / 86400000
        );

        const question =
            questions[dayOfYear % questions.length];

        document.getElementById("category").textContent =
            question.category;

        document.getElementById("question").textContent =
            question.question;

    } catch (error) {

        console.error(error);

        document.getElementById("category").textContent =
            "Fel";

        document.getElementById("question").textContent =
            "Kunde inte läsa frågebanken.";
    }
}

loadQuiz();
``
