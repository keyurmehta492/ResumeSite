//$('.carousel').carousel();


/*------------Navbar Transition------------------*/
$(document).on('scroll',function(){
  if($(document).scrollTop() > 50) {
    $('nav').removeClass("large").addClass("small")
  } else {
    $('nav').removeClass("small").addClass("large")
  }
})


/*-------------move to pages------------------*/
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

/*----------Active Page--------------------*/

function active(){
    $('.navbar-nav li a').click(function(){
         $('.navbar-nav li a').removeClass("active");
		 $(this).addClass("active");
        
    });

}

$(window).on("load", active);

/*-----------Intro Adjectives--------------------*/


function dataWord () {

  $("[data-words]").attr("data-words", function(i, d){
    var $self  = $(this),
        $words = d.split("|"),
        tot    = $words.length,
        c      = 0; 

    // CREATE SPANS INSIDE SPAN
    for(var i=0; i<tot; i++) 
		$self.append($('<span/>',{text:$words[i]}));

    // COLLECT WORDS AND HIDE
    $words = $self.find("span").hide();

    // ANIMATE AND LOOP
    (function loop(){
      $self.animate({ width: $words.eq( c ).width() });
      $words.stop().fadeOut().eq(c).fadeIn().delay(1000).show(10, loop);
      c = ++c % tot;
    }());
    
  });

}

$(window).on("load", dataWord);

/*----------------On Load animate----------------------*/




/*---------------Disabled submit butto------------------------*/

$("input[type='text'], input[type='email'], textarea[id='message']").on("keyup", function(){
    if($("input[id='email']").val() != "" &&
	   $("input[id='name']").val() != "" &&
	   $("input[id='title']").val() != "" &&	   
	   $("textarea").val() != ""
	  ) 
	   {
        $("button[type='submit']").removeAttr("disabled");
    } else {
        $("button[type='submit']").attr("disabled", "disabled");
    }
});