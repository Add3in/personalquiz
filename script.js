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

    const start =
        new Date(today.getFullYear(), 0, 0);

    const day =
        Math.floor(
            (today - start) / 86400000
        );

const seed =
    today.getFullYear() * 1000 + day;

const random =
    Math.abs(
        Math.sin(seed) * 10000
    );

const index =
    Math.floor(
        random % questions.length
    );

const question =
    questions[index];

    const icons = {
        "Geografi": "🌍",
        "Historia": "🏛️",
        "Naturvetenskap": "🔬",
        "IT": "💻",
        "Microsoft 365": "📘",
        "Pedagogik": "🍎",
        "Hjärngympa": "🧩",
        "Allmänbildning": "🧠"
    };

    document.getElementById("category")
        .textContent =
        `${icons[question.category] || "❓"} ${question.category}`;

    document.getElementById("question")
        .textContent =
        question.question;
}

loadQuiz();
