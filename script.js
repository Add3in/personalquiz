async function loadQuiz() {
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
        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(
                    `${file} gav HTTP-status ${response.status}`
                );
            }

            const data = await response.json();

            questions = questions.concat(data);

        } catch (error) {

            document.getElementById("category").textContent =
                "FEL";

            document.getElementById("question").textContent =
                `${file}: ${error.message}`;

            console.error(error);

            return;
        }
    }

    if (questions.length === 0) {
        document.getElementById("category").textContent =
            "FEL";

        document.getElementById("question").textContent =
            "Inga frågor hittades.";

        return;
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
}

loadQuiz();
