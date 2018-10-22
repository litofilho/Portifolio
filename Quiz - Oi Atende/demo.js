$(function() {
    var rules = ['q1-a,q1-b,q1-c']
    $('#submit').click(function() {
        $('#win,#fail').hide();
        if( $('input[name=q1]:checked').map(function(i,v) { return v.id; }).get().join(',') == rules[0] ) {
            $("#win").show();
         }
         else
        {   
            $("#fail").show();
        }
    });
});


function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  }

/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

// var questions = [{
//     question: "Quais os maiores estados do Brasil?",
//     choices: ["Rio de Janeiro,Acre,Pernambuco", "São Paulo, Brasília, Minas Gerais", "Rio de Janeiro,São Paulo e Bahia"],
//     correctAnswer: 3
// }, {
//     question: "What is 27*14?",
//     choices: ["485", "634", "408", "528"],
//     correctAnswer: 2
// }, {
//     question: "What is the busiest train station in the world?",
//     choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
//     correctAnswer: 1
// }, {
//     question: "What is the longest river?",
//     choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
//     correctAnswer: 0
// }, {
//     question: "What is the busiest tube station in the London?",
//     choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
//     correctAnswer: 0
// }];

// var currentQuestion = 0;
// var correctAnswers = 0;
// var quizOver = false;

// $(document).ready(function () {

//     // Display the first question
//     displayCurrentQuestion();
//     $(this).find(".quizMessage").hide();

//     // On clicking next, display the next question
//     $(this).find(".nextButton").on("click", function () {
//         if (!quizOver) {

//             value = $("input[type='radio']:checked").val();

//             if (value == undefined) {
//                 $(document).find(".quizMessage").text("Selecione uma opção");
//                 $(document).find(".quizMessage").show();
//             } else {
//                 // TODO: Remove any message -> not sure if this is efficient to call this each time....
//                 $(document).find(".quizMessage").hide();

//                 if (value == questions[currentQuestion].correctAnswer) {
//                     correctAnswers++;
//                 }

//                 currentQuestion++; // Since we have already displayed the first question on DOM ready
//                 if (currentQuestion < questions.length) {
//                     displayCurrentQuestion();
//                 } else {
//                     displayScore();
//                     //                    $(document).find(".nextButton").toggle();
//                     //                    $(document).find(".playAgainButton").toggle();
//                     // Change the text in the next button to ask if user wants to play again
//                     $(document).find(".nextButton").text("Jogar novamente?");
//                     quizOver = true;
//                 }
//             }
//         } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
//             quizOver = false;
//             $(document).find(".nextButton").text("Next Question");
//             resetQuiz();
//             displayCurrentQuestion();
//             hideScore();
//         }
//     });

// });

// // This displays the current question AND the choices
// function displayCurrentQuestion() {

//     console.log("In display current Question");

//     var question = questions[currentQuestion].question;
//     var questionClass = $(document).find(".quizContainer > .question");
//     var choiceList = $(document).find(".quizContainer > .choiceList");
//     var numChoices = questions[currentQuestion].choices.length;

//     // Set the questionClass text to the current question
//     $(questionClass).text(question);

//     // Remove all current <li> elements (if any)
//     $(choiceList).find("li").remove();

//     var choice;
//     for (i = 0; i < numChoices; i++) {
//         choice = questions[currentQuestion].choices[i];
//         $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
//     }
// }

// function resetQuiz() {
//     currentQuestion = 0;
//     correctAnswers = 0;
//     hideScore();
// }

// function displayScore() {
//     $(document).find(".quizContainer > .result").text("Resultado: " + correctAnswers + " de: " + questions.length);
//     $(document).find(".quizContainer > .result").show();
// }

// function hideScore() {
//     $(document).find(".result").hide();
// }
