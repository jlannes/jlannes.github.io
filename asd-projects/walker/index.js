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
  "ENTER": 13
}
var walker = {
  x: 0,
  y: 0,
  xSpeed: 0,
  ySpeed: 0
}
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
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
    redrawWalker();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEYS.LEFT) {
      walker.xSpeed = -5
    } else if(event.which === KEYS.UP) {
      walker.ySpeed = -5
    } else if(event.which === KEYS.RIGHT) {
      walker.xSpeed = 5
    } else if(event.which === KEYS.DOWN) {
      walker.ySpeed = 5
    }
  }

  function handleKeyUp(event) {
    if(event.which === KEYS.LEFT) {
      walker.xSpeed = 0
    } else if(event.which === KEYS.UP) {
      walker.ySpeed = 0
    } else if(event.which === KEYS.RIGHT) {
      walker.xSpeed = 0
    } else if(event.which === KEYS.DOWN) {
      walker.ySpeed = 0
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function wallCollision() {
    if(walker.x < 0) {
      walker.x = 0
    } else if(walker.x > $("#board").width()-50) {
      walker.x = $("#board").width()-50
    } else if(walker.y <= 0) {
      walker.y = 0
    } else if(walker.y >= $("#board").height()-50) {
      walker.y = $("#board").height()-50
    }
  }

  function repositionWalker() {
    walker.x += walker.xSpeed
    walker.y += walker.ySpeed
  }
  
  function redrawWalker() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
