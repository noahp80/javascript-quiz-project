
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
        const difficultysetting = difficulty.filter(this.questions => 
            return difficultysetting); 
        };
    
      
  }
