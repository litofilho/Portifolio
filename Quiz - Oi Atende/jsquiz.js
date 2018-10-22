(function() {
  var questions = [{
    question: "Quais os 3 maiores estados do Brasil?",
    choices: ["Tocantis", "Pará", "Rio de Janeiro", "São Paulo", "Amazonas","Mato Grosso","Bahia", "Rio Grande do Sul"],
    correctAnswer: [1,4,5],
  }, {
    question: "Qual animal se desenvolve somente no bioma dos pampas? ",
    choices: ["Bode", "Tucano", "Javali", "Jaguatirica"],
    correctAnswer: 3
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  function next(){
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (selections[questionCounter].length == undefined){
        if (isNaN(selections[questionCounter])) {
          alert('Marque ao menos uma alternativa para continuar');
        } else {
          questionCounter++;
          displayNext();
        }
      }else{
        if (isNaN(selections[questionCounter][0])) {
          alert('Marque ao menos uma alternativa para continuar');
        } else {
          questionCounter++;
          displayNext();
        }
      }
    });
  }
  next();
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<span class="numero-questao">'+(index + 1) +'</span>'+'<span class="numero-questao2">/2</span>');
    qElement.append(header);
    
    var question = $('<span class="label-questao">').append(questions[index].question);
    qElement.append(question);
    
    var button= $('<button class="btn-next2" disabled id="next"><a>Próxima >>></a></button>')

    if(questions[index].correctAnswer.length>1){

      var checkbox=createCheckbox(index);
      qElement.append(checkbox);

    }else{

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);}

    if(questions.length==index+1){
      $('#next').click(function () {
        $(".questaum").text('Agradecemos sua partipação!');
      });
    }
     if(questions.length>1){
       qElement.append(button);
     }
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer"value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Creates a list of the answer choices as radio inputs-----
  function createCheckbox(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="checkbox" name="answer"  value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    //selections[questionCounter] = +$('input[name="answer"]:checked').val();
    if (questions[questionCounter].correctAnswer.length == undefined){
      selections[questionCounter] = +$('input[name="answer"]:checked' ).val();
    }else{
      selections[questionCounter] = [];
      $('input[name="answer"]:checked').each(function(){
        selections[questionCounter].push($(this).attr('value'));
      });
    }
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        $("#question input").change(function () {
          if($(this).prop('checked'))
            $(this).addClass('selected')
          else
            $(this).removeClass('selected')
      
          if($('.selected').length > 0)
            $('#next').prop("disabled", false)
          else
            $('#next').prop("disabled", true)      
        }) ;

        next();
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
    
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i].length == undefined){
        if (selections[i] == questions[i].correctAnswer) {
          numCorrect++;
        }
      }else{
        for(var j = 0; j < selections[i].length; j++){
          if(selections[i][j] == questions[i].correctAnswer[j]){
            if(j == questions[i].correctAnswer.length-1){
              numCorrect++;
            }
          }else{
            break;
          }
        }
      }
    }
    
    score.append('Voce acertou ' + numCorrect + ' de ' +
                 questions.length + ' questões!');

    $('#container').append('')             
    createGabarito();
    return score;
  }
 
  function createGabarito() {
    for(var i in questions ){

    var qElement = $('<div class="question">');
    
    var header = $('<span class="numero-questao">'+'</span>'+'<span class="numero-questao2"></span>');
    qElement.append(header);
    
    var question = $('<span class="label-questao">').append(questions[i].question);
    qElement.append(question);

    if(questions[i].correctAnswer.length>1){

      var checkbox=createCheckbox(i);
      qElement.append(checkbox);

    }else{

    var radioButtons = createRadios(i);
    qElement.append(radioButtons);}

    if(questions.length==i+1){
      $('#next').click(function () {
        $(".questaum").text('Agradecemos sua partipação!');
      });
      
      $("#next a").text("Enviar respostas");
    }
    $('#container').append(qElement)
      $('input').each(function(){
        $(this).prop('disabled',true);
      });
   }

   for(var i in questions ){
     if(questions[i].correctAnswer.length>1){

     for (var j in questions[i].correctAnswer){
      $('.question').eq(i).find('input').eq(questions[i].correctAnswer[j]).prop('checked', true);
      $('.question').eq(i).find('input').eq(questions[i].correctAnswer[j]).closest('li').css('color','green');
     }
    }else{
      $('.question').eq(i).find('input').eq(questions[i].correctAnswer).prop('checked', true);
      $('.question').eq(i).find('input').eq(questions[i].correctAnswer).closest('li').css('color','green');
      }
    }
  }

})();

$(document).ready(function(){    
  $("#question input").change(function () {
    if($(this).prop('checked'))
      $(this).addClass('selected')
    else
      $(this).removeClass('selected')

    if($('.selected').length > 0)
      $('#next').prop("disabled", false)
    else
      $('#next').prop("disabled", true)      
  }) ;
});