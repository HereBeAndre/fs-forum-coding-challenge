function majorityElement(array) {
  let count = 1;
  let candidate = array[0];

  for (let i = 1; i < array.length; i++) {
    const item = array[i];

    if (count === 0) {
      candidate = item;
    }

    if (candidate === current) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// Do not edit the line below.
exports.majorityElement = majorityElement;
