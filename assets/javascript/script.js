
//nav and scroll (suppoesed to scroll, for some reason it refuses)
$(document).ready(function(){
    $('.slide-section').click(function(e){
        let linkHref = $(this).attr('href');

        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);


        e.preventDefault();
    });
});


//________________________Click listeners for projects_______________________________//

// opens new tab for trails and tunes project page

//trails and tunes repo
$('#git-1').click(function() {
    window.open('https://github.com/BryantAB/WordGuessGame');
});


//sushi trivia repo
$('#git-2').click(function() {
    window.open('https://github.com/BryantAB/TrivaGame');
});

//word guess repo
$('#git-3').click(function() {
    window.open('https://github.com/BryantAB/GiphyApi');
});

//train time repo
$('#git-4').click(function() {
    window.open('https://github.com/BryantAB/clicky-game');
});

//train time repo
$('#git-5').click(function() {
    window.open('https://github.com/BryantAB/friend-finder');
});
$('#git-6').click(function() {
    window.open('https://github.com/BryantAB/Google-Books');

});

