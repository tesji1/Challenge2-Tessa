// function startTimeHour() {
//     var HourToday = new Date();
//     var hours2 = toda
// }


    // var hours = today.getHours(); // om te testen van de tijden in het console
function startTime() {
    var today = new Date();
    var maandArray = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
    var dagArray = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var hours = today.getHours();
        var minutes = today.getMinutes();
    var seconds = today.getSeconds(); // variable voor seconden
    var dag = dagArray[today.getDay()]; // variable voor de dagen pakt dagArray de juiste dag van vandaag
    var dag2 = today.getDate(); // variable voor de dag in getal
    var maand = maandArray[today.getMonth()]; // variable voor de maanden pakt maandArray van de juiste maand
    var jaar = today.getFullYear(); // variable voor de jaar 
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('mijnKlok').innerHTML =
    hours + ":" + minutes + ":" ;
    document.getElementById('sec').innerHTML =
    seconds ;
    var time = setTimeout(startTime, 1000); // tijd per seconden

 


    document.getElementById('dagMaandJaar').innerHTML = dag + " " + dag2 + " " + maand + " " + jaar; // dag, dag in getal, maand en jaar
        
        
        if (hours >= 4 && hours <= 6) {
        
            document.body.background = "assets/img/night.jpg";
            document.getElementById("greeting").innerHTML = "Good night,";
            document.getElementById("mijnKlok").style.color = "white";
            
        
    }
        if ( hours >= 7 && hours <= 12) {
        
            document.body.background = "assets/img/morning2.jpg";
            document.getElementById("greeting").innerHTML = "Good morning,";
            document.getElementById("mijnKlok").style.color = "white";
            
        
    }

        if (hours >= 13 && hours <= 17) {
        
            document.body.background = "assets/img/day2.jpg";
            document.getElementById("greeting").innerHTML = "Good day,";
            document.getElementById("mijnKlok").style.color = "white";
            
        
    }

    if (hours >= 18 && hours <= 23 || hours >= 0 && hours <= 3) {
        document.body.background = "assets/img/evening.jpg";
        document.getElementById("greeting").innerHTML = "Good afternoon,";
        document.getElementById("mijnKlok").style.color = "white";
    }

}


function checkTime(i) { // dit is voor wanneer het onder de 10 is dan zet het nog een 0 voor zodat er altijd 2 cijfers naast elkaar staan dus 00 ipv 0
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}






var timeline = new TimelineMax({repeat : -1});
           timeline.from ('#sec', 0.5, { top: -10, ease: Bounce.easeOut})
            .to ('#sec', 0.5, { opacity: 0});  



//tweenmax code for animation voorbeeld van deb
var moonAnimate = document.getElementById('moon');
TweenMax.to (moonAnimate, 10, {
    left: 400,
});

// var startTime = 0;
// var timeline = new TimelineMax({repeat : -1});

// function updateStopwatch(){
//     var currentTime = new Date();
//     var milliSeconds = currentTime.getTime() - startTime.getTime();

//     seconds = Math.round(milliSeconds/1000);

//     document.getElementById('stopwatch').innerHTML = seconds;
    
// }

// document.getElementById('startTime').onload = function(){
//     startTime = new Date();

       
            
// }
