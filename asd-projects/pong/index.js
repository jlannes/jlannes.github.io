/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEYS = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83
  }
  // Game Item Objects
  var wallLeft = {
    "id": $("#wallLeft"),
    "x": 30,
    "y": 0,
    "xVelocity": 0,
    "yVelocity": 0,
  }
  var wallRight = {
    "id": $("#wallRight"),
    "x": 390,
    "y": 0,
    "xVelocity": 0,
    "yVelocity": 0,
  }
  var ball = {
    "id": $("#ball"),
    "x": 200,
    "y": 200,
    "xVelocity": Math.ceil(Math.random()*10 - 5),
    "yVelocity": Math.ceil(Math.random()*10 - 5),
  }

  
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    checkForCollisions()
    redrawEverything()
    movePaddles()
    moveBall()
    nextRound()
    velocityCheck()
    endCheck()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEYS.UP) {
      wallRight.yVelocity = -5
    }
    if(event.which === KEYS.DOWN) {
      wallRight.yVelocity = 5
    }
    if(event.which === KEYS.W) {
      wallLeft.yVelocity = -5
    }
    if(event.which === KEYS.S) {
      wallLeft.yVelocity = 5
    }
  }
  function handleKeyUp(event) {
    if(event.which === KEYS.UP) {
      if(wallRight.yVelocity !==5) {
      wallRight.yVelocity = 0
      }
    }
    if(event.which === KEYS.DOWN) {
      if(wallRight.yVelocity !==-5) {
        wallRight.yVelocity = 0
      }
    }
    if(event.which === KEYS.W) {
      if(wallLeft.yVelocity !==5) {
        wallLeft.yVelocity = 0
      }
    }
    if(event.which === KEYS.S) {
      if(wallLeft.yVelocity !==-5) {
        wallLeft.yVelocity = 0
      }
    }
  }

  //lil extra variables for points
  var p1sc = 0
  var p2sc = 0
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  //redraws all the objects so you can see them moving
  function redrawEverything() {
    $("#wallLeft").css("left", wallLeft.x);
    $("#wallLeft").css("top", wallLeft.y);
    $("#ball").css("left", ball.x);
    $("#ball").css("top", ball.y);
    $("#wallRight").css("left", wallRight.x);
    $("#wallRight").css("top", wallRight.y);
  }
  
  //moving the paddles
  function movePaddles() {
    wallLeft.y += wallLeft.yVelocity
    wallRight.y += wallRight.yVelocity
  }

  //moving the paddles
  function moveBall() {
    ball.y += ball.yVelocity
    ball.x += ball.xVelocity
  }

  //checks if anything collides with any other object
  function checkForCollisions() {
    if(ball.x<0) {
      ball.x = 0
      ball.xVelocity *= -1
    }
    if(ball.x>420) {
      ball.x = 420
      ball.xVelocity *= -1
    }
    if(ball.y<0) {
      ball.yVelocity *= -1
    }
    if(ball.y>420) {
      ball.yVelocity *= -1
    }
    if(wallLeft.y < 0) {
      wallLeft.y = 0
    }
    if(wallLeft.y > 360) {
      wallLeft.y = 360
    }
    if(wallRight.y < 0) {
      wallRight.y = 0
    }
    if(wallRight.y > 360) {
      wallRight.y = 360
    }
    if(ball.x < wallLeft.x+20 && ball.y > wallLeft.y && ball.y < wallLeft.y + 80) {
      ball.xVelocity *= -1
      ball.xVelocity += 1
    }
    if(ball.x > wallRight.x-20 && ball.y > wallRight.y && ball.y < wallRight.y + 80) {
      ball.xVelocity *= -1
      ball.xVelocity -= 1
    }
  }

  //once the ball hits the left or right wall, it resets its position and speed
  function nextRound() {
    if(ball.x < wallLeft.x) {
      p2sc += 1
      $("#p2sc").text("P2: " + p2sc)
    }
    if(ball.x > wallRight.x+20) {
      p1sc += 1
      $("#p1sc").text("P1: " + p1sc)
    }
    if(ball.x < wallLeft.x || ball.x > wallRight.x+20) {
      ball.x = 200
      ball.y = 200
      ball.xVelocity = Math.ceil(Math.random()*10 - 5)
      ball.yVelocity = Math.ceil(Math.random()*10 - 5)
    }
  }

  //checking if the speed is less than 1, then sets it to 1
  function velocityCheck(){
    if(ball.xVelocity < 1 && ball.xVelocity > -1) {
      ball.xVelocity = 1
    }
    if(ball.yVelocity < 1 && ball.yVelocity > -1) {
      ball.yVelocity = 1
    }
  }

  //checks whether the game should end or not
  function endCheck() {
    if(p1sc > 10) {
      endGame(1)
    } 
    if(p2sc > 10) {
      endGame(2)
    }
  }

  //ends the game, saying who won
  function endGame(player) {
    $("<h1>PLAYER " + player + " WINS</h1>").appendTo("body")
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
