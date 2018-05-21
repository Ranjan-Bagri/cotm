let refresh = () => {
     let d = new Date();
     let dt = d.getHours().toString();
     let m = d.getMinutes().toString();
     let y = d.getSeconds().toString();
     let cOtD = "#"+((dt<10)?"0"+dt:dt)+((m<10)?"0"+m:m)+((y<10)?"0"+y:y);
    document.body.style.backgroundColor=cOtD;
   document.getElementById("txt").innerHTML = `The Color of this Moment is ${cOtD}`;
}
setInterval(refresh, 1000);