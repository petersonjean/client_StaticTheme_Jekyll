
    $(document).ready(function(){
      $('.parallax').parallax();
      
      var options = [
      {selector: '.parallax', offset: 50, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#staggered-test', offset: 205, callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500 );
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
    
    
        
