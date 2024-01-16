
class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
      this.questions = questions;
      this.timeLimit = timeLimit;
      this.timeRemaining = timeRemaining;
      this.correctAnswers = 0;
      this.currentQuestionIndex = 0;
    }
    getQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    moveToNextQuestion() {
      this.currentQuestionIndex++;
    }
    shuffleQuestions() {
      const shuffled = [];
      while (this.questions.length) {
        const random = Math.floor(Math.random() * this.questions.length);
        shuffled.push(this.questions.splice(random, 1)[0]);
      }
      this.questions = shuffled;
    }
    checkAnswer(answer) {
      if (this.getQuestion().answer === answer) {
        this.correctAnswers++;
      }
    }
  hasEnded() {
      return this.currentQuestionIndex === this.questions.length;
    }
    
    filterQuestionsByDifficulty(difficulty) {
      if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
        const filteredQuestions = this.questions.filter(question => question.difficulty === difficulty);
        return filteredQuestions;
      }
    }
  
    averageDifficulty() {
      const totalDifficulty = this.questions.reduce((acc, question) => acc + question.difficulty, 0);
      const averageDifficulty = totalDifficulty / this.questions.length;
      return averageDifficulty;
    }
  }
    