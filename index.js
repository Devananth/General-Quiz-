var readlineSync = require("readline-sync")
var chalk = require("chalk");
console.log(chalk.bgYellow("Hello ! Welcome to the CLI World\n"))

score = 0

if (readlineSync.keyInYN("Are you interested in having fun for few minutes ?\n")) {
  console.log("\nOkay ! Then let's play a fun quiz game !\n");
  console.log(chalk.bgBlue.underline("Rules:\n"), "1.If your answer is correct 2 points will be added\n 2.If your answer is wrong 1 point will be reduced")
  console.log("\nHave fun , Let's get started ! ! ! \n");

  questions = [
    {
      quiz: "How many players play in a cricket team ?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      quiz: "In which company does SUNDAR PICHAI work ?",
      options: ["Google", "Microsoft", "Amazon", "Apple"],
      answer: "Google"
    },
    {
      quiz: "Where does the Indian Premier League 2020 conducted?",
      options: ["Dubai", "Chennai", "Australia", "Mumbai"],
      answer: "Dubai"
    },
    {
      quiz: "Who won the IPL 2020 trophy ?",
      options: ["MI", "CSK", "DC", "RCB"],
      answer: "MI"
    },
    {
      quiz: "In Which year does INDIA goes in LOCKDOWN ?",
      options: ["2016", "2018", "2019", "2020"],
      answer: "2020"
    },
  ]

  function ask(question, options, answer) {
    console.log(chalk.bgGrey(question));

    var userAnswer = readlineSync.keyInSelect(options);

    console.log()

    if (options[userAnswer] === answer) {
      score += 2;
      console.log(chalk.bgBlue("Wow ! Correct answer +2"));
    }
    else {
      score -= 1;
      console.log(chalk.red("Oops ! Wrong answer -1\n"));
      console.log("Correct answer is ", chalk.underline.red(questions[i].answer));

    }

    console.log(chalk.bgWhite.black("\nCurrent Score : "), score, "\n");
  }

  for (var i = 0; i < questions.length; i++) {
    ask(questions[i].quiz, questions[i].options, questions[i].answer);

    console.log("+==============================================+\n");
  }

  highScorers = [{ Name: "Vikram", Score: 10 }, { Name: "Jith", Score: 10 }];

  console.log(chalk.underline.blue("HIGHSCORERS"));

  for (var i = 0; i < highScorers.length; i++) {
    console.log(highScorers[i]);
  }

  console.log("\nIf you have scored higher than the topScorer send me a screenshot and I will update your name in list\n");
}

console.log(chalk.bgYellow("\nThanks , for checking out the link ! Have a good day !\n"))
