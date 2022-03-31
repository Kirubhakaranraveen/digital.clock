
function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");

    var time=new Date();

    var hrs=time.getHours();
    var mins=time.getminutes();
    var sec=time.getSeconds();
    var am_pm="Am"

    if(hrs==0){
        hrs=12;
    }

    if(hrs>12){
        hrs=hrs-12;
        am_pm="pm";
    }    
     if(hrs<10){
         hrs=0+hrs;
     }
     
     if(mins<10){
         hrs=0+hrs;
     }

    if(sec<10){
        hrs=0+hrs;
    } 
    
}
hours.innertext=hrs;
minutes.innertext=mins;
seconds.innertext=sec;
am.innertext="pm";
}
setinterval(clock,1000);

function settime(){
    var x=document.getElementById("Morning").value;
    var y=document.getElementById("afternoon").value;
    var z=document.getElementById("evening").value;
    var hour = new Date.gethour();

    if(x=hour){
        document.getElementById('imgcontainer').style.background=()
        document.getElementById('textcontainer').innertext="wake up!!";
        document.getElementById('smallbox').innertext="Good Morning !!"; 
    
    }
    if(y=hour){
        document.getElementById('imgcontainer').style.background=()
        document.getElementById('textcontainer').innertext="let's Have some Lunch!!";
        document.getElementById('smallbox').innertext="Good Afternoon !!"; 
    
    }
    if(z=hour){
        document.getElementById('imgcontainer').style.background=()
        document.getElementById('textcontainer').innertext="GOOd Night!!";
        document.getElementById('smallbox').innertext="Good Night !!"; 
    
    }
}
