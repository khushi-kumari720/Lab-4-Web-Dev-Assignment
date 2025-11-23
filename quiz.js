const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Which language runs in the browser?", answer: "javascript" },
    { question: "What does CSS stand for?", answer: "cascading style sheets" },
    { question: "HTML is used for?", answer: "structure" },
    { question: "What color is the sky?", answer: "blue" },
    { question: "How many days are in a week?", answer: "7" },
    { question: "What is the opposite of hot?", answer: "cold" },
    { question: "Which animal is known as the king of the jungle?", answer: "lion" },
    { question: "How many letters are in the English alphabet?", answer: "26" }
];

function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {

        let userInput = prompt(quizQuestions[i].question);

        if (!userInput) userInput = "";

        userInput = userInput.toLowerCase().trim();

        if (userInput === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Incorrect! Correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Finished! Your Score: " + score + " / " + quizQuestions.length);
}

runQuiz();
