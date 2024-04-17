// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
//changes the image back to what it was before
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
//adds the fiter when the button is pressed
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  // applyFilter(reddify)
  // applyFilterNoBackground(decreaseBlue)
  // applyFilterNoBackground(increaseGreenByBlue)
  smudge()

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
//applies a filter to the whole image
function applyFilter(filterFunction) {
for(var r = 0; r < image.length; r++) {
  for(var c = 0; c < image[r].length; c++) {
    var rgbString = image[r][c]
    var rgbNumbers = rgbStringToArray(rgbString)
    filterFunction(rgbNumbers)
    rgbString = rgbArrayToString(rgbNumbers)
    image[r][c] = rgbString
  }
}
}

// TODO 7: Create the applyFilterNoBackground function
//adds a filter that doesnt affect the background
function applyFilterNoBackground(filterFunction) {
  for(var r = 0; r < image.length; r++) {
    for(var c = 0; c < image[r].length; c++) {
      var rgbString = image[r][c]
      if(rgbString !== image[0][0]) {
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
      }
      image[r][c] = rgbString
    }
  }
  }

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  return(num > 255 ? 255 : num < 0 ? 0 : num)
}

// TODO 3: Create reddify function
//sets red to 200 
function reddify(array) {
  array[RED] = 200
}

// TODO 6: Create more filter functions
//lower the amount of blue in the pixels
function decreaseBlue(array) {
  keepInBounds(array[BLUE] -= 50)
}
//increases the amount of green in the pixels by the amount of blue
function increaseGreenByBlue(array) {
  keepInBounds(array[GREEN] += array[BLUE])
}
// CHALLENGE code goes below here
//moves red over from the right to the left
function smudge() {
  for(var r = 0; r < image.length; r++) {
    for(var c = 0; c < image[r].length-1; c++) {
      var rgbString = image[r][c]
      var rgbStringNext = image[r][c+1]
      var rgbNumbers = rgbStringToArray(rgbString)
      var rgbNumbersNext = rgbStringToArray(rgbStringNext)
      keepInBounds(rgbNumbers[RED] += rgbNumbersNext[RED]/2)
      rgbString = rgbArrayToString(rgbNumbers)
      image[r][c] = rgbString
    }
  }
}