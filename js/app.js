$(document).ready(function() {
    
    var now = new Date();
    var hrs = now.getHours();
    var msg = "";


    if (hrs >  0) msg = "Good Morning!";     
    if (hrs > 12) msg = "Good Afternoon!";    
    if (hrs > 17) msg = "Good Evening!";    


    $('.two').append(msg);
    
});