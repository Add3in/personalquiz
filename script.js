fetch("questions.json")
.then(r => r.json())
.then(data => {

    const today = new Date();

    const start =
        new Date(today.getFullYear(),0,0);

    const diff =
        today - start;

    const day =
        Math.floor(diff / 86400000);

    const quiz =
        data[day % data.length];

    document.getElementById("question")
        .textContent = quiz.question;

    document.getElementById("category")
        .textContent = quiz.category;
});
