document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        console.log("You clicked the form and pressed the enter button!")
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
          if (e.code === "Enter") {
      let input = inputField.value;
      console.log(`I typed '${input}'`)
    }
  });
});

function () {

//remove all characters except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

// 'tell me a story' -> 'tell me story'
// 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
}

function compare(triggerArray, replyArray, text) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

//compare arrays
//then search keyword
//then random alternative

  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
  
  document.getElementById("chatbot").innerHTML = product;
    speak(product);

    //clear input value
    document.getElementById("input").value = "";
}

const robot = ["How do you do, fellow human", "I am not a bot"];

document.addEventListener("DOMContentLoaded", () => {
...
    if (e.code === "Enter") {
        let input = document.getElementById("input").value;
        document.getElementById("user").innerHTML = input;
        output(input);    
     }
  });
});
