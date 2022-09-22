const notChristmasUrl = "https://64.media.tumblr.com/tumblr_lwj1l53IIe1r7zaoqo1_500.gif";
const christmasUrl = "https://media3.giphy.com/media/SKYdQIhApyXwk/giphy.gif"
const imgBackground = document.getElementById("background");
function xmasDay() {
    var today = new Date();
    var xmas = new Date("December 24, " + today.getFullYear());

    //if its dec 25, then it point to next yr, rather 
    //than display negative days till it hits jan. 
    if (today > xmas) {
        xmas.setYear(today.getFullYear() + 1);
    }

    var day = 60 * 60 * 1000 * 24;
    //calcs the days left
    var timeLeft = (xmas.getTime() - today.getTime());
    var l_daysLeft = timeLeft / day;
    var daysLeft = Math.floor(l_daysLeft);
    //hours left
    var l_hoursLeft = (l_daysLeft - daysLeft) * 24;
    var hoursLeft = Math.floor(l_hoursLeft);
    //minutes left 
    var l_minLeft = (l_hoursLeft - hoursLeft) * 60;
    var minsLeft = Math.floor(l_minLeft);
    //seconds
    var l_secLeft = (l_minLeft - minsLeft) * 60;
    var secLeft = Math.floor(l_secLeft);
    
    if (daysLeft === 0) {
        document.getElementById("demo").innerHTML = "Merry Christmas";
        imgBackground.src = christmasUrl;
    }
    else {
        document.getElementById("demo").innerHTML = daysLeft 
        + " days " + hoursLeft + (hoursLeft == 1 ? " hour " : " hours ") + minsLeft + " minutes " + secLeft 
        + " seconds left until Christmas"
        imgBackground.src = notChristmasUrl;
    }
}
setInterval(xmasDay,1000);