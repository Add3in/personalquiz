fetch("questions.json")
  .then(response => response.json())
  .then(data => {

    const today = new Date();

    const startOfYear = new Date(
      today.getFullYear(),
      0,
      0
    );

    const diff =
      today - startOfYear;

    const dayOfYear = Math.floor(
      diff / 86400000
    );

    const quiz =
      data[dayOfYear % data.length];

    document.getElementById("question")
      .textContent = quiz.question;

    document.getElementById("category")
      .textContent = quiz.category;

  })
  .catch(error => {

    console.error(error);

    document.getElementById("question")
      .textContent =
        "Kunde inte läsa frågebanken.";

    document.getElementById("category")
      .textContent =
        "Fel";

  });
