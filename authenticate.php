<?php 
$pass = $_POST['password'];
if ($pass == "0000"){
  echo "Password is Valid";
  header("Location: https://www.error404unreachable.github.io/now/main.html");
  exit()
}
  else {
  echo "Password Invalid";
    header("Location: https://www.school.district196.org");
    exit()
  }
