function startTime()
{
	// Date
	var today = new Date();
	var year = today.getFullYear();
	var day = today.getDay();
	var month = today.getMonth();
	var d = today.getDate();
	var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	// Date End

	// Time
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var a = "AM";
	if(h==0)
	{
		h=12;
		a="AM";
	}
	else if(h>0 && h<12)
	{
		a="AM";
	}
	else if(h>=12)
	{
		h=h-12;
		a="PM";
	}

	if(h<10)
	{
		h = "0" + h;
	}
	if(m<10)
	{
		m = "0" + m;
	}
	if(s<10)
	{
		s = "0" + s;
	}
	var myDate = document.getElementById("DateDisplay");
	myDate.textContent = ""+days[day]+ ", " +d+ " " +months[month]+ " " +year;
	myDate.innerText = ""+days[day]+ ", " +d+ " " +months[month]+ " " +year;
	var myClock = document.getElementById("clockDisplay");
	myClock.textContent = ""+h+ ":" +m+ ":" +s+ " " +a;
	myClock.innerText = ""+h+ ":" +m+ ":" +s+ " " +a;

	setTimeout("startTime()",1000);
}
startTime();
