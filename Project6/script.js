var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']
var index = 0;

setInterval(function rotateColor(){
    document.querySelector("body").style.backgroundColor = colors[index]; index++;
    if (index >= colors.length){
        index = 0;
    }
}, 1000);


function time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours == 0){
        hours == 12;
    }
    if (hours > 12){
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;

}

time();
setInterval(time, 1000); 