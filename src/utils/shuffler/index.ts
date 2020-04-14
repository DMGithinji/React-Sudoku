
/**
 * An array shuffling algorithm (Fisher-Yates shuffle algorithm
 * To read more, see: https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
 * @param array 
 */
function shuffle(array: any[]) {


  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there are remaining items to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;

    // ...and swap with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

export default shuffle;