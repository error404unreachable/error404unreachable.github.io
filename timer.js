 var myVar;
      var timer = document.getElementById("userInput");
      var countDownSeconds;
      function startTime(){ 
        myVar = setInterval(start, 1000);
        getTime();
      } 

      function start(){
        countDownSeconds--;
        document.getElementById("timer").innerHTML = time;
        setTime();
        if (countDownSeconds == -1){
          stop();
          document.getElementById("timer").innerHTML = 00:00:00;  
         alert("Your timer is done...");
        }
      }

      function stop(){
        clearInterval(myVar);
      }

function getTime() {
 let hh = timer.getHours();
  let mm = timer.getMinutes();
  let ss = timer.getSeconds();
}

function setTime() {
 let time = hh + ":" + mm + ":" + ss;
}
