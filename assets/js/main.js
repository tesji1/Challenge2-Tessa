


    // var hours = today.getHours(); // om te testen van de tijden in het console
function startTime() {
    var today = new Date();
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var hours = today.getHours();
        var minutes = today.getMinutes();
    var seconds = today.getSeconds(); // variable voor seconden
    var day = dayArray[today.getDay()]; // variable voor de dagen pakt dagArray de juiste dag van vandaag
    var dayNumber = today.getDate(); // variable voor de dag in getal
    var month = monthArray[today.getMonth()]; // variable voor de maanden pakt maandArray van de juiste maand
    var year = today.getFullYear(); // variable voor de jaar 
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('mineClock').innerHTML =
    hours + ":" + minutes + ":" ; // uren en minuten
    document.getElementById('sec').innerHTML = 
    seconds ; // seconden
    var time = setTimeout(startTime, 1000); // tijd per seconden

 


    document.getElementById('dayMonthYear').innerHTML = day + " " + dayNumber + " " + month + " " + year; // dag, dag in getal, maand en jaar
        
        // if hours om verschillende tijden met verschillende afbeeldingen en elementen te laten zien
        if (hours >= 4 && hours <= 6) {
        
            document.body.background = "assets/img/night.jpg";
            document.getElementById("greeting").innerHTML = "Good night,";
            document.getElementById("sun").style.display = "none";
            document.getElementById("moon").style.display = "initial";
            document.getElementById("mineClock").style.color = "#fff";
            document.getElementById("sec").style.color = "#fff";
            document.getElementById("dayMonthYear").style.color = "#fff";
            document.getElementById("greeting").style.color = "#fff";
            
        
    }
        if ( hours >= 7 && hours <= 12) {
        
            document.body.background = "assets/img/morning3.jpg";
            document.getElementById("greeting").innerHTML = "Good morning,";
            document.getElementById("mineClock").style.color = "#745848";
            document.getElementById("sec").style.color = "#745848";
            document.getElementById("dayMonthYear").style.color = "#745848";
            document.getElementById("greeting").style.color = "#745848";
            document.getElementById("sun").style.display = "initial";
            document.getElementById("moon").style.display = "none";
            
        
    }

        if (hours >= 13 && hours <= 17) {
        
            document.body.background = "assets/img/day2.jpg";
            document.getElementById("greeting").innerHTML = "Good day,";
            document.getElementById("sun").style.display = "initial";
            document.getElementById("moon").style.display = "none";
            document.getElementById("mineClock").style.color = "#fff";
            document.getElementById("sec").style.color = "#fff";
            document.getElementById("dayMonthYear").style.color = "#fff";
            document.getElementById("greeting").style.color = "#fff";
            
        
    }

    if (hours >= 18 && hours <= 23 || hours >= 0 && hours <= 3) {
        document.body.background = "assets/img/evening.jpg";
        document.getElementById("greeting").innerHTML = "Good afternoon,"; // greeting
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "initial";
        document.getElementById("mineClock").style.color = "#fff";
        document.getElementById("sec").style.color = "#fff";
        document.getElementById("dayMonthYear").style.color = "#fff";
        document.getElementById("greeting").style.color = "#fff";
    }

}


function checkTime(i) { // dit is voor wanneer het onder de 10 is dan zet het nog een 0 voor zodat er altijd 2 cijfers naast elkaar staan dus 00 ipv 0
    if (i < 10) {i = "0" + i};  // voegt een 0 toe bij < 10
    return i;
}




// tweemax animatie 
// aantal seconden wordt geanimeerd 
var timeline = new TimelineMax({repeat : -1});
           timeline.from ('#sec', 0.5, { top: -10, ease: Bounce.easeOut})
            .to ('#sec', 0.5, { opacity: 0});  

//tweenmax sun animatie
var sun = document.getElementById('sun');
TweenMax.to (sun, 50, {
    left: '100%',
    repeat:-1,
    yoyo:true,
    ease: Linear.easeNone,
});

//tweenmax moon animatie
var moon = document.getElementById('moon');
TweenMax.to (moon, 50, {
    left: '100%',
    repeat:-1,
    yoyo:true,
    ease: Linear.easeNone,
});
