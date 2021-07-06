function colorClock(){
    var date = new Date();
  
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    if (hours < 9) {
      hours = '0' + hours;
    }
  
    if (minutes < 9) {
      minutes = '0' + minutes;
    }
  
    if (seconds < 9) {
      seconds = '0' + seconds;
    }
  
    var clockFace = hours + ':' + minutes + ':' + seconds;
    var hexColor = '#' + hours + minutes + seconds;
  
    document.getElementById('clock').innerHTML = clockFace;
    /*a setTimeout = előre megírt metódus, bizonyos idő elteltével lefuttat egy megadott kódot*/
    document.body.style.background = hexColor;
    setTimeout(function(){
      colorClock();
      
    }, 1000);
  }
  
  colorClock(); /*itt hívom meg a colorClock function-t, amivel kezdődik a kódblokk*/
  
  /*function functionName(parameters){          (így néz ki egy funkció megadása)
    
  }
  */
  