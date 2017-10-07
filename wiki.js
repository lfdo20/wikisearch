var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=jsonp&origin=*&format=json&limit=10&search="
var searchWord = ''

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$('document').ready(function(){

    //  animações de cores

      $("#searchWord").focus();

      var random = Math.floor((Math.random()*colors.length));
    cor = colors[random];

    $("body").animate({
          backgroundColor: cor

          }, 1000);
    $(".cor").animate({
          color: cor

          }, 1000);

  // Detecção de tecla

  $('body').keyup(function(e){
    if(e.keyCode == 13) {
    searcher(e);
    }
    else if (e.keyCode == 27){
     erase();
    }
    });

  // função para fazer a pesquisa

      function searcher(e){
    searchWord = $("#searchWord").val();

    var searchfull = url + searchWord

    $('.container').delay(100).animate({
          marginTop: 50,

       }, 500);

      $('.search').delay(300).css({
          borderBottom: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
       }, );


    $.getJSON(searchfull, function(data){
      console.log(data);
        $('.results').empty();
        for (i=0; i < data[1].length; i++ ){

          $('.results').append("<a class='lin' target='_blank' href=" + data[3][i] + "> <div class='list'> <h3>"  +  data[1][i] + "</h3> <h6>" + data[2][i] + "</h6> </div></a>");


       };
    });

      }



    // Função para limpar a busca no esc

    function erase(){


      $("#searchWord").val('');
     $('.results').delay(100).empty().animate({

       }, 1000);
     $('.container').delay(100).animate({
          marginTop: 200,

       }, 500);

      $('.search').delay(300).css({
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderBottom: '5px solid white'
       }, 1000);

    }

});
