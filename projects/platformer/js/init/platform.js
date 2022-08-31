(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE
    //Notes- bottom is y-670, player can jump y-80, x-250 

    // example:

    //Ground

    createPlatform(0, 550, 3)
    createPlatform(0, 450, 3)
    createPlatform(0, 350, 3)
    createPlatform(0, 250, 3)
    createPlatform(0, 150, 3)
    createPlatform(0, 50, 3)

    //Walls

    createPlatform(875, 0, 0.1, 30)
    createPlatform(800, 0, 0.1, 30)
    createPlatform(700, 0, 0.1, 30)
    createPlatform(600, 0, 0.1, 30)
    createPlatform(500, 0, 0.1, 30)
    createPlatform(400, 0, 0.1, 30)
    createPlatform(300, 0, 0.1, 30)
    createPlatform(200, 0, 0.1, 30)
    createPlatform(100, 0, 0.1, 30)
    createPlatform(0, 0, 0.1, 30)
    //Stopping the player from going to the bottom of the screen
    createPlatform(0, 660, 3, 1.5)

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
