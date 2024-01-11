
function  displayTime(){

    let dateTime = new Date(); // shows the current date and time
    let hr = dateTime.getHours();
    let mins =padZero( dateTime.getMinutes());
    let sec = padZero( dateTime.getSeconds());

    if(hr>12){
        hr = hr-12
        document.getElementById('ampm').innerHTML='PM'
    }


document.getElementById('hr').innerHTML=padZero(hr)
document.getElementById('mins').innerHTML= mins
document.getElementById('sec').innerHTML= sec


}
function padZero(num){

    return num<10 ? "0"+num: num
}



setInterval(displayTime,500)
