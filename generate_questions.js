const categories = {
  "Allmänbildning": 150,
  "Geografi": 75,
  "Historia": 75,
  "Naturvetenskap": 75,
  "IT": 50,
  "Microsoft 365": 50,
  "Skola och pedagogik": 50,
  "Hjärngympa": 25
};

const questionBank = [];

// Exempel
const templates = {
  "IT": [
    "Vad står API för?",
    "Vad står DNS för?",
    "Vad står VPN för?",
    "Vad används en brandvägg till?",
    "Vad är skillnaden mellan RAM och lagring?"
  ],
  "Microsoft 365": [
    "Vad används SharePoint främst till?",
    "Vad används OneDrive till?",
    "Vilken app används för digitala möten?",
    "Vad används Microsoft Forms till?",
    "Vad används Planner till?"
  ],
  "Geografi": [
    "Vilket land har längst kustlinje i världen?",
    "Vilken är Europas längsta flod?",
    "Vilket land gränsar till flest länder?",
    "Vilken huvudstad ligger vid Donau?",
    "Vilken ö är världens största?"
  ]
};

for (const [category,count] of Object.entries(categories)) {
  const questions = templates[category] || [];

  for(let i=0;i<count;i++) {
    questionBank.push({
      category,
      question: questions[i % questions.length] + ` (${i + 1})`
    });
  }
}

console.log(JSON.stringify(questionBank,null,2));
``
