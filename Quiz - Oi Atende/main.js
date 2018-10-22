function habilitaButton(){
  $('.op input').click(function(){
    var select = $('.ativo .op input:checked').length
    if(select > 0){
      $('.ativo .btn-prox').removeClass('disabled');
      $('.ativo .btn-submit').removeClass('disabled');
    } else {
      $('.ativo .btn-prox').addClass('disabled');
      $('.ativo .btn-submit').addClass('disabled');
    }
  });
}

function proximaQuestao(){
  $('.quiz .btn-prox').click(function(){
    if(!$(this).hasClass('disabled')){
      var questao = $(this).parents('.questao').attr('id').split('-');
      var prox = parseInt(questao[1]) + 1;
      prox = '#qt-'+prox;
      $(this).parents('.questao').fadeOut('fast');
      $(this).parents('.questao').removeClass('ativo');
      $(prox).fadeIn('slow');
      $(prox).addClass('ativo');
    }
  });
}

function trocaButton(){
  $('.questao').each(function(){
    var questao = $(this).attr('id').split('-');
    var prox = parseInt(questao[1]) + 1;
    prox = '#qt-'+prox;
    if($(prox).length < 1){
      $(this).find('.btn-prox').hide();
      $(this).find('.btn-submit').show();
    }
  })
}

function mostraRespostas(){
  $('.btn-submit').click(function(){
    $('.coluna.col-12').append($('.quiz').html());
    $('.quiz').html('<div class="resultado"> Você acertou 1 de 3 questões</div>');
    $('.questao').each(function(){
      $(this).show();
      $(this).find('.acao').hide()
      $(this).find('.numero').hide()
      //$(this).find('.enunciado').prepend('certo')
    })

  })
}

$(document).ready(function(){
  habilitaButton();
  proximaQuestao();
  trocaButton();
  mostraRespostas();
})
