/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
const KEYS = {
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
  "ENTER": 13,
  //added wasd for player 2
  "W": 87,
  "A": 65,
  "S": 83,
  "D": 68
}
var walker1 = {
  x: 0,
  y: 0,
  xSpeed: 0,
  ySpeed: 0,
  it: false
}
//added player 2
var walker2 = {
  x: 450,
  y: 450,
  xSpeed: 0,
  ySpeed: 0,
  it: false
}
  // one-time setup
  var collided = false
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  //var collisionInverval = setInterval(handlePlayerCollision, 1000/5)
  $(document).on('keydown', handleKeyDown);                           // handles the pressing of different keys
  $(document).on('keyup', handleKeyUp);                               // handles the lifting of different keys

  //handles what happens when the players are clicked
  $("#walker1").on('click', handleWalker1Click);
  $("#walker2").on('click', handleWalker2Click);

  //deciding who is "it" at the start of the game
  var randomNum = Math.random() * 2;
  if(randomNum > 1) {
    walker1.it = true
  } else {
    walker2.it = true
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionWalker();
    wallCollision();
    handlePlayerCollision();
    setColors();
    redrawWalker();
  }
  
  /* 
  Called in response to events.
  */
  // decides what direction the players go
  function handleKeyDown(event) {
    if(event.which === KEYS.LEFT) {
      walker1.xSpeed = -5
    }
    if(event.which === KEYS.UP) {
      walker1.ySpeed = -5
    }
    if(event.which === KEYS.RIGHT) {
      walker1.xSpeed = 5
    }
    if(event.which === KEYS.DOWN) {
      walker1.ySpeed = 5
    }
    if(event.which === KEYS.A) {
      walker2.xSpeed = -5
    }
    if(event.which === KEYS.W) {
      walker2.ySpeed = -5
    }
    if(event.which === KEYS.D) {
      walker2.xSpeed = 5
    }
    if(event.which === KEYS.S) {
      walker2.ySpeed = 5
    }
  }
  //checks when the keys are lifted to see when to stop
  function handleKeyUp(event) {
    if(event.which === KEYS.LEFT) {
      if(walker1.xSpeed !==5) {
        walker1.xSpeed = 0
      }
    }
    if(event.which === KEYS.UP) {
      if(walker1.ySpeed !==5) {
      walker1.ySpeed = 0
      }
    }
    if(event.which === KEYS.RIGHT) {
      if(walker1.xSpeed !==-5) {
        walker1.xSpeed = 0
      }
    }
    if(event.which === KEYS.DOWN) {
      if(walker1.ySpeed !==-5) {
        walker1.ySpeed = 0
      }
    }
    if(event.which === KEYS.A) {
      if(walker2.xSpeed !==5) {
        walker2.xSpeed = 0
      }
    }
    if(event.which === KEYS.W) {
      if(walker2.ySpeed !==5) {
        walker2.ySpeed = 0
      }
    }
    if(event.which === KEYS.D) {
      if(walker2.xSpeed !==-5) {
        walker2.xSpeed = 0
      }
    }
    if(event.which === KEYS.S) {
      if(walker2.ySpeed !==-5) {
        walker2.ySpeed = 0
      }
    }
  }
   /*
   These 2 handle click functions are just here for the points, it will only change color 
   for 1 frame then change to the color they should be
   */
  //checks when the 1st walker is clicked
  function handleWalker1Click() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    console.log(randomColor)
    $("#walker1").css("background-color", randomColor);
  }

  //checks when the 2nd walker is clicked
  function handleWalker2Click() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $("#walker2").css("background-color", randomColor);
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  //checks who is it, then swaps them
  function changeIt() {
    if(collided === true) {
      if (walker1.it === true) {
        walker1.it = false
        walker2.it = true
      } else {
        walker1.it = true
        walker2.it = false
      }
    }
  }

  //changes the players values to show where to be next
  function repositionWalker() {
    walker1.x += walker1.xSpeed
    walker1.y += walker1.ySpeed
    walker2.x += walker2.xSpeed
    walker2.y += walker2.ySpeed
  }  


  //stops the players from walking through walls
  function wallCollision() {
    if(walker1.x < 0) {
      walker1.x = 0
    }
    if(walker1.x > $("#board").width()-50) {
      walker1.x = $("#board").width()-50
    }
    if(walker1.y <= 0) {
      walker1.y = 0
    }
    if(walker1.y >= $("#board").height()-50) {
      walker1.y = $("#board").height()-50
    }
    if(walker2.x < 0) {
      walker2.x = 0
    }
    if(walker2.x > $("#board").width()-50) {
      walker2.x = $("#board").width()-50
    }
    if(walker2.y <= 0) {
      walker2.y = 0
    }
    if(walker2.y >= $("#board").height()-50) {
      walker2.y = $("#board").height()-50
    }
  }

  //moves the players
  function redrawWalker() {
    $("#walker1").css("left", walker1.x);
    $("#walker1").css("top", walker1.y);
    $("#walker2").css("left", walker2.x);
    $("#walker2").css("top", walker2.y);
  }

  function collisionTimeoutDelay() {
    collided = false
  }

  //changes who is it when they make contact
  function handlePlayerCollision() {
    if(walker2.x <= walker1.x+50 && walker2.y <= walker1.y+50 && walker1.x <= walker2.x + 50 && walker1.y <= walker2.y + 50) {
      collided = true
      setTimeout(collisionTimeoutDelay, 1000)
      changeIt()
    }
  }

  //sets the player's colors respectively
  function setColors() {
    if(walker1.it === true) {
      $("#walker1").css("background-color", "#FF0000")
      $("#walker2").css("background-color", "#00FF00")
    }
    if(walker2.it === true) {
      $("#walker2").css("background-color", "#FF0000")
      $("#walker1").css("background-color", "#00FF00")
    }
  }

  //would end game if ever called(its not)
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
