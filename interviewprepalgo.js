function countRepeats(str) {
  let newString = str.split(/[^a-z]/gi);
  const words = {};
  for (let i = 0; i < newString.length; i++) {
    const word = newString[i];
    if (words[word]) {
      words[word] += 1;
    } else {
      words[word] = 1;
    }
  }
  console.log(words);
}

/* countRepeats(
  'Hello there, how are you? Can you tell me how to get to the nearest Starbucks?'
); */

// Correct but worst
function max(arr) {
  for (const itemA of arr) {
    let isMax = true;

    for (const itemB of arr) {
      if (itemA < itemB) {
        isMax = false;
      }
    }

    if (isMax) {
      return itemA;
    }
  }
}

// Same time complexity, but faster running
function max(arr) {
  for (const itemA of arr) {
    let isMax = true;

    for (const itemB of arr) {
      if (itemA < itemB) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      return itemA;
    }
  }
}

// Best because you only iterate once through the algorithm

function max(arr) {
  if (arr.length === 0) {
    return null;
  }

  let currentMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item > currentMax) {
      currentMax = item;
    }
  }
  return currentMax;
}
