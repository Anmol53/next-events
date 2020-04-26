function timeLeftCalculator(start, end, htmlId){
  var contestStart = new Date(start).getTime();
  var contestEnd = new Date(end).getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var startTime = contestStart - now;
    var endTime = contestEnd - now;

    var days = Math.floor(startTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((startTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((startTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((startTime % (1000 * 60)) / 1000);

    var daysE = Math.floor(endTime / (1000 * 60 * 60 * 24));
    var hoursE = Math.floor((endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesE = Math.floor((endTime % (1000 * 60 * 60)) / (1000 * 60));
    var secondsE = Math.floor((endTime % (1000 * 60)) / 1000);
    var timeLeftToStart = "";
    if(days > 0){
      timeLeftToStart +=  + days + " Days ";
    }
    if(hours > 0){
      timeLeftToStart +=  + hours + " Hours ";
    }
    if(minutes > 0){
      timeLeftToStart +=  + minutes + " Minutes ";
    }
    if(seconds > 0){
      timeLeftToStart +=  + seconds + " Seconds ";
    }
    var timeLeftToEnd = "";
    if(daysE > 0){
      timeLeftToEnd +=  + daysE + " Days ";
    }
    if(hoursE > 0){
      timeLeftToEnd +=  + hoursE + " Hours ";
    }
    if(minutesE > 0){
      timeLeftToEnd +=  + minutesE + " Minutes ";
    }
    if(secondsE > 0){
      timeLeftToEnd +=  + secondsE + " Seconds ";
    }
    document.getElementById(htmlId).innerHTML = "<b>Contest starts in:</b> <anm> " + timeLeftToStart + " </anm>";
    if (endTime < 0) {
      clearInterval(x);
      document.getElementById(htmlId).innerHTML = "<b>Contest Ended</b>";
    }
    if (startTime < 0 && endTime > 0) {
      document.getElementById(htmlId).innerHTML = "<anm>Ongoing Contest</anm> </br> <b>Ends in:</b> <anm> " +  timeLeftToEnd + " </anm>";
    }
  }, 1000);
}
