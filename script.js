function time(){
    var date=new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var seconds=date.getSeconds();

    if(hour<10)
        hour="0"+hour;
    if(minute<10)
        minute="0"+minute;
    if(seconds<10)
        seconds="0"+seconds;
    document.getElementById('time').innerHTML="Time:"+hour+":"+minute+":"+seconds;
    t=setTimeout("time()",500);

}

window.onscroll = function() {myFunction()};

var navigationbar=document.getElementById("navbar1");
var sticky=navigationbar.offsetTop;

function myFunction(){
    if(window.pageYOffset>sticky){
        navigationbar.classList.add("sticky");
    }else
        navigationbar.classList.remove("sticky");

}