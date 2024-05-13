var clock = document.getElementById("clock");
// const form = document.querySelector("#custom");

function startClock() {
  currentTime()
  document.getElementById("heading").innerText = "404";
}

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

/* async function sendData() {
  const formData = new FormData(form);

  try {
    const response = await fetch("https://error404unreachable.github.io/clock.html", {
      method: "POST",
      body: formData,
    });
    alert(await response.json());
  } catch (e) {
    alert("Error " + e);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
}); */

function changeToBlue() {
  clock.style.textShadow = "0 0 10px #05D9FF, 0 0 20px #74EAFF, 0 0 30px #E3FAFF";
}

function changeToOrange() {
  clock.style.textShadow = "0 0 10px #ffa500, 0 0 20px #ffc04c, 0 0 30px #ffdb99";
}

function changeToWhite() {
  clock.style.textShadow = "0 0 10px #ffffff, 0 0 20px #e5e5e5, 0 0 30px #cccccc";
}

