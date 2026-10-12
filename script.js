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
        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const text = await response.text();

            let data;

            try {
                data = JSON.parse(text);
            } catch (jsonError) {

                document.getElementById("category")
                    .textContent = "JSON-FEL";

                document.getElementById("question")
                    .textContent =
                    `${file}: ${jsonError.message}`;

                return;
            }

            questions = questions.concat(data);

        } catch (error) {

            document.getElementById("category")
                .textContent = "FEL";

            document.getElementById("question")
                .textContent =
                `${file}: ${error.message}`;

            return;
        }
    }

    const today = new Date();

    const start = new Date(
        today.getFullYear(),
        0,
        0
    );

    const day = Math.floor(
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
