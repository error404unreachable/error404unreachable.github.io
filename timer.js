 var myVar;
      var timer = document.getElementById("userInput");
      var countDownSeconds;
      function startTime(){ 
        myVar = setInterval(start, 1000);
        document.getElementById("timer").innerHTML = timer.value;
        countDownSeconds = timer.value;
      } 

      function start(){
        countDownSeconds--;
        document.getElementById("timer").innerHTML = countDownSeconds;
        if (countDownSeconds == -1){
          stop();
          document.getElementById("timer").innerHTML = "0";  
        }
      }

      function stop(){
        clearInterval(myVar);
      }
