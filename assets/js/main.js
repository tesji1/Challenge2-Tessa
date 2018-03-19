
    // var hours = today.getHours(); // om te testen van de tijden in het console en dan moet var hours in de function startTime in commands.
function startTime() {
    var today = new Date();
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var hours = today.getHours(); // variable voor uren
    var minutes = today.getMinutes(); // variable voor minuten
    var seconds = today.getSeconds(); // variable voor seconden
    var day = dayArray[today.getDay()]; // variable voor de dagen pakt dagArray de juiste dag van vandaag
    var dayNumber = today.getDate(); // variable voor de dag in getal
    var month = monthArray[today.getMonth()]; // variable voor de maanden pakt maandArray van de juiste maand
    var year = today.getFullYear(); // variable voor de jaar 
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('mineClock').innerHTML = hours + ":" + minutes + ":" ; // uren en minuten
    document.getElementById('sec').innerHTML = seconds ; // seconden
    var time = setTimeout(startTime, 1000); // tijd per seconden

    // de dag maand en jaar toont hij op mijn scherm van id dayMonthYear
    document.getElementById('dayMonthYear').innerHTML = day + " " + dayNumber + " " + month + " " + year; // dag, dag in getal, maand en jaar
        
        // if hours om verschillende tijden met verschillende afbeeldingen en elementen te laten zien
        // is het 2 uur of hoger laat dit zien // is het 6 uur of lager dit zien
    if (hours >= 2 && hours <= 6) {
        
        document.body.background = "assets/img/night.jpg"; // achtergrond night.jpg wordt in de body getoont
        document.getElementById("greeting").innerHTML = "Good night,"; // laat good night zien
        document.getElementById("sun").style.display = "none"; // laat de sun animatie niet zien
        document.getElementById("moon").style.display = "initial"; // laat de moon animatie zien 
        document.getElementById("mineClock").style.color = "#fff"; // font kleur van de klok
        document.getElementById("sec").style.color = "#fff"; // font kleur voor de seconden wordt wit getoont
        document.getElementById("dayMonthYear").style.color = "#fff"; // font kleur van dag maand jaar wordt wit getoont
        document.getElementById("greeting").style.color = "#fff"; // laat greeting in witte font zien
            
        
    }
        // is het 7.00 of hoger laat dit zien // is het 12 uur of lager laat dit zien
    if ( hours >= 7 && hours <= 12) {
    
        document.body.background = "assets/img/morning3.jpg"; // laat background morning3.jpg zien
        document.getElementById("greeting").innerHTML = "Good morning,"; // laat good morning zien
        document.getElementById("mineClock").style.color = "#745848"; // laat de font in een bruine kleur zien voor de klok
        document.getElementById("sec").style.color = "#745848"; // laat de seconden in bruine font zien 
        document.getElementById("dayMonthYear").style.color = "#745848"; // laat dag maand jaar in bruine font zien
        document.getElementById("greeting").style.color = "#745848"; // laat greeting tekst in een bruine kleur zien
        document.getElementById("sun").style.display = "initial"; // toont de zon animatie
        document.getElementById("moon").style.display = "none"; // laat de moon animatie niet zien
            
        
    }
            // als het 13.00 uur is of hoger laat dit zien // is het 17.00 of lager laat dit zien
    if (hours >= 13 && hours <= 17) {
        
        document.body.background = "assets/img/day2.jpg"; // laat de day2.jpg background zien
        document.getElementById("greeting").innerHTML = "Good day,"; // laat de greeting good day zien
        document.getElementById("sun").style.display = "initial"; // laat de zon anmiatie zien
        document.getElementById("moon").style.display = "none"; // laat de moon animatie niet zien
        document.getElementById("mineClock").style.color = "#fff"; // toont de font kleur van de klok in het wit
        document.getElementById("sec").style.color = "#fff"; // toont de seconden van de font van de seconden wit
        document.getElementById("dayMonthYear").style.color = "#fff"; // laat dag maand jaar in witte font zien
        document.getElementById("greeting").style.color = "#fff";     // laat de greeting teskt good day in het wit zien
    }
    // is het 18.00 of 0.00 of hoger laat dit zien // is het 23 uur of 1.00 of lager laat dit zien
    if (hours >= 18 && hours <= 23 || hours >= 0 && hours <= 1) {
        document.body.background = "assets/img/evening.jpg"; // dat de evening background zien
        document.getElementById("greeting").innerHTML = "Good afternoon,"; // greeting afternoon zien
        document.getElementById("sun").style.display = "none"; // laat de zon animatie niet zien
        document.getElementById("moon").style.display = "initial"; // laat de moon animatie zien
        document.getElementById("mineClock").style.color = "#fff"; // toont de klok font in het wit
        document.getElementById("sec").style.color = "#fff"; // toont de seconden font in het wit
        document.getElementById("dayMonthYear").style.color = "#fff"; // toont de dag maand jaar in witte font
        document.getElementById("greeting").style.color = "#fff"; // toont greeting tekst in witte font
    }

} // einde function startTime


function checkTime(i) { // dit is voor wanneer het onder de 10 is dan zet het nog een 0 voor zodat er altijd 2 cijfers naast elkaar staan dus 00 ipv 0
    if (i < 10) {i = "0" + i};  // voegt een 0 toe bij < 10
    return i;
} // einde function checkTime




// tweemax animatie 
// aantal seconden wordt geanimeerd 
var timeline = new TimelineMax({repeat : -1});
           timeline.from ('#sec', 0.5, { top: -10, ease: Bounce.easeOut})
            .to ('#sec', 0.5, { opacity: 0});  

// tweenmax sun animatie
var sun = document.getElementById('sun');
TweenMax.to (sun, 50, {
    left: '100%',
    repeat:-1,
    yoyo:true,
    ease: Linear.easeInOut,
});

//sun opacity animatie
var sunOpacity = document.getElementById('sun');
TweenMax.to (sun, 1, {
    opacity: 0.3,
    repeat: -1,
    ease: Linear.easeInOut,
    yoyo: true,

});

//tweenmax moon animatie
var moon = document.getElementById('moon');
TweenMax.to (moon, 50, {
    left: '100%',
    opacity: 0.3,
    rotation: 360,
    repeat:-1,
    yoyo:true,
    ease: Linear.easeInOut,
});

//tweenmax moon opacity animatie
var moonOpacity = document.getElementById('moon');
TweenMax.to (moon, 1, {
    opacity: 0.3,
    repeat: -1,
    ease: Linear.easeInOut,
    yoyo: true,

});
// tweenmax logo opacity effect animatie
var logo = document.getElementById('logo');
TweenMax.to (logo, 5, {
    opacity: 0.3,
    yoyo:true,
    repeat: -1,
    ease: Linear.easeInOut,
});
