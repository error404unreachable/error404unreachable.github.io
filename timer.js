 var myVar;
 const sound = new Audio("Alarm.wav");
      var timer = document.getElementById("userInput");
      var countDownSeconds;

      function startTime(){ 
        myVar = setInterval(start, 1000);
        document.getElementById("timer").innerHTML = timer.value;
        countDownSeconds = timer.value;
       sound.play().then(() => { // pause directly
    sound.pause();
  });
      } 

      function start(){
        countDownSeconds--;
        document.getElementById("timer").innerHTML = countDownSeconds;
        if (countDownSeconds == -1){
          stop();
          document.getElementById("timer").innerHTML = "0";  
         playAudio();
        }
      }

      function stop(){
        clearInterval(myVar);
      }

function playAudio() { 
  sound.play(); 
} 
