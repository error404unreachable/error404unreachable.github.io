startTimer() {
  var m = document.getElementById("input");
  setTimeout(endTimer(), m*60*1000);
}

endTimer() {
  alert("Your timer is up...");
}
