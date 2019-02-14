(function () {
  var Question = function (question, answers, cAnswer) {
    this.question = question,
      this.answers = answers,
      this.cAnswer = cAnswer
  };

  Question.prototype.displayQuestion = function () {
    console.log(`Q : ${this.question}?`);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(`${i + 1}: ${this.answers[i]}?`);
    }
  }

  Question.prototype.checkAnswer = function (ans) {
    if (ans == this.cAnswer) {
      score += 1;
      console.log('Correct!');
      displayScore(score, '');
      chooseQuestion();
    } else if (ans == 'exit') {
      console.log('Game End');
      displayScore(score, ' Your final ');
    } else {
      console.log('Wrong Answer. Try Again :)');
      displayScore(score, '');
      chooseQuestion();
    }
  }

  let score = 0;
  const q1 = new Question('Inside which HTML element do we put the JavaScript?', ['<js>', '<scripting>', '<javascript>', '<script>'], 4);
  const q2 = new Question('Which of the following function of Array object removes the last element from an array?', ['pop', 'push', 'join', 'map'], 1);
  const q3 = new Question('Which built-in method returns the length of the string?', ['size', 'length', 'index'], 2);
  const q4 = new Question('Can you assign a anonymous function to a variable?', ['True', 'False'], 1);

  let questionLists = [q1, q2, q3, q4];
  chooseQuestion();

  function chooseQuestion() {
    let selectQuestion = Math.floor(Math.random() * questionLists.length);
    questionLists[selectQuestion].displayQuestion();
    let ans = prompt("Enter your Answer");
    questionLists[selectQuestion].checkAnswer(ans);
  }

  function displayScore(score, final) {
    console.log(`*****${final} Score is ${score} ******`);
  }

})();