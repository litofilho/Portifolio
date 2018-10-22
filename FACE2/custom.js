$(window).on('load', function() {

  //Esconde Filtro
  $(".fht-cell").hide()

  //insere botão filtro
  $(".sortable").parent().prepend("<button class='btn btn-light filtro' type='button' title='Filtrar Coluna'><i class='fa fa-search'></i> </button>");


  //tooltip init
  $(".filter-show-clear").tooltip({
    trigger: 'hover'
  });
  $("th.bs-checkbox").tooltip({
    trigger: 'hover',
    placement: 'top',
    title: "Selecionar Todos"
  });
  $(".filtro").tooltip({
    trigger: 'hover',
    title: "Filtrar Coluna"
  });

  //Select All
  $(".bs-checkbox input").change(function() {
    var check = $(this).prop("checked")
    if (check)
      $("#remove").prop("disabled", false)
    else
      $("#remove").prop("disabled", true)
  })

  //esconde e mostra o filtro
  $(".filtro").click(function() {
    var filtro = $(this).parents("th").find(".fht-cell");
    if (filtro.is(":hidden")) {
      filtro.fadeIn("fast");
    } else {
      filtro.fadeOut("fast");
    }
  });

  //troca o icone do menu ao expandir
  $(".menu .item a").click(function(){
    if ($(this).attr('aria-expanded') == "false"){
      $(this).children("i").removeClass("fa-plus-square").addClass("fa-minus-square")
    }
    else{
      $(this).children("i").removeClass("fa-minus-square").addClass("fa-plus-square")
    }
  })

  //marca radio ao clicar na row e habilita botão selecionar
  $('#tbLista2 tbody tr').click(function() {
      $(this).find('td input[type=radio]').prop('checked', true);
      $("#selecionar-tb").prop( "disabled", false )
  });

  //mostra card-tiss
  $("#selecionar-tb").click(function(){
    $('td input[type=radio]').each(function(){
        
    });

    $('#card-tiss').collapse()
  })


});
