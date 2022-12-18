const readlineSync = require("readline-sync");

let score = 0;

let questions = [
  {
    question:
      "Which team is known as orange army ? (type IPL team name example: MI) ",
    answer: "SRH",
  },
  {
    question:
      "Which team is known as yellow army ? (type IPL team name example: MI) ",
    answer: "CSK",
  },
  {
    question:
      "Which crickerter is also a singer ? (type Player's name in caps; example: DHONI) ",
    answer: "BRAVO",
  },
  {
    question:
      "How many times have CSK won the IPL trophy) ? (type a number; example: 5) ",
    answer: "4",
  },
  {
    question:
      "In 2022, which team won the IPL ? (type IPL team name example: MI) ",
    answer: "GT",
  },
];

const welcome = () => {
  const userName = readlineSync.question("What's your name ? ");
  console.log(`Welcome ${userName} to IPL Quiz ?`);
};

const letsPlay = () => {
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const ans = readlineSync.question(currentQuestion.question);
    console.log(ans, "ANSWER");
    if (ans.toString() === currentQuestion.answer) {
      console.log("correct !");
      score += 1;
    } else {
      console.log("wrong!");
    }

    console.log(`current Score: ${score}`);
    console.log("---------------------------");
  }
};

const displayScores = () => {
  console.log(`Yay, you scored: ${score}`);
};

welcome();
letsPlay();
displayScores();
