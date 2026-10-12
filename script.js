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

            console.log("Läser:", file);

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(
                    `${file} gav status ${response.status}`
                );
            }

            const data = await response.json();

            questions = questions.concat(data);

        } catch (error) {

            document.getElementById("category")
                .textContent = "Fel";

            document.getElementById("question")
                .textContent =
                `Fel i ${file}`;

            console.error(error);

            return;
        }
    }

    const today = new Date();

    const start =
        new Date(today.getFullYear(), 0, 0);

    const day =
        Math.floor(
            (today - start) / 86400000
        );

    const question =
        questions[day % questions.length];

    document.getElementById("category")
        .textContent = question.category;

    document.getElementById("question")
        .textContent = question.question;
}

loadQuiz();
