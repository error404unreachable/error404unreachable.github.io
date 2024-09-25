var myVar = setInterval(start, 1000);
var timer = document.getElementbyId("userInput").value;

      function startTime() { 
        document.getElementById("timer").innerHTML = timer.value;
        myVar;
      } 

      function start() {
        document.getElementById("timer").innerHTML = timer.value;
        timer.value--;
        if (timer == -1){
          stop();
          document.getElementById("timerr").innerHTML = "0";  
         alert("Your timer is done...");
        }
      }

      function stop() {
        clearInterval(myVar);
      }
