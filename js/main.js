
    $(document).ready(function(){
      $('.parallax').parallax();
      
      var options = [
      {selector: '.parallax', offset: 50, callback: function(el) {
        $('.parallax img').addClass("fadeIn animated");
      } },
      {selector: '.section', offset: 205, callback: function(el) {
        $('.section h4').addClass("fadeInUp animated");
      } },
      {selector: '.section', offset: 300, callback: function(el) {
        $('.section .col .s12 .m6 .offset-l1').addClass("fadeInRight animated");
      } },
      {selector: '#staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);
    });
    
    
        
