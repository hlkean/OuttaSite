$(document).ready(function() {
    
    
    var now = new Date();
    var hrs = now.getHours();
    var msg = "";


    if (hrs >  0) msg = "Good Morning!";     
    if (hrs > 12) msg = "Good Afternoon!";    
    if (hrs > 17) msg = "Good Evening!";    


    $('.two').append(msg);
    
$('.Project').hover(
    function(mouseIn){
    $(this).animate({borderTopRightRadius: "40px"},  500)},
    function(mouseOut){
    $(this).animate({borderTopRightRadius: "0px"},  200)}
);

        

//Begin Magnific JS
    
    $.magnificPopup.open({
  items: {
    src: 'img/HenDiggity.png'
  },
  type: 'image'
});
     
    
    $('#resume').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    $('#persona').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


$("#video").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
 });
    
$("#edge").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('#frogg').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});