/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
/*
ITERATE over the array from i = 0 to i = length - 1
 ITERATE over the array from j = length - 1 to j = i + 1
   IF array[j]'s value < array[j - 1]'s value
     swap array[j] and array[j - 1]
*/
async function bubbleSort(array) {
  console.log("bubbleSort attempted to run")
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = array.length - 1; j > i + 1; j--) {
      if (array[j].value <= array[j - 1].value) {
        swap(array, j, j - 1)
        updateCounter(bubbleCounter);
        await sleep();
      }
    }
  }
}

// TODO 3: Implement quickSort
/*
FUNCTION quickSort(array, left, right):
  IF (right - left) > 0:
    index = partition(array, left, right)
    IF left < (index - 1):
      quickSort(array, left, index - 1)
    IF index < right:
      quickSort(array, index, right)
*/
async function quicksort(array, left, right) {
  console.log("quicksort attempted to run")
  if ((right - left) > 0) {
    var index = await partition(array, left, right)
    if (left < index - 1) {
      await quicksort(array, left, index - 1)
    }
    if (index < right) {
      await quicksort(array, index, right)
    }
  }
}

// TODOs 4 & 5: Implement partition
/* 
FUNCTION partition (array, left, right):
  pivot = select a pivot
  WHILE left < right:
    WHILE array[left] < pivot { left++ }
    WHILE array[right] > pivot { right-- }
    IF left < right:
      swap array[left] and array[right]
  
  RETURN left + 1
*/
async function partition(array, left, right) {
  console.log("partition attempted to run")
  var pivot = array[Math.floor((right + left)/2)].value;
  while (left < right) {
    while (array[left].value <= pivot) {
      left++
    }
    while (array[right].value >= pivot) {
      right--
    }
    if (left < right) {
      swap(array, left, right)
      updateCounter(quicksort)
      await sleep()
    }
  }
  return left + 1;
}
// TODO 1: Implement swap
function swap(array, i, j) {
  console.log("swap attempted to run")
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
  drawSwap(array, i, j)
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
  return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
  let element1 = array[i];
  let element2 = array[j];

  let temp = parseFloat($(element1.id).css("top")) + "px";

  $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
  $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
  $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}