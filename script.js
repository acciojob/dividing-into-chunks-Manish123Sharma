const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (currentSum + val <= n) {
      currentChunk.push(val);
      currentSum += val;
    } else {
      // If current chunk is not empty, push it to the result
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      // Start a new chunk with the current value
      currentChunk = [val];
      currentSum = val;
    }
  }

  // Push the last chunk if it has any values
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
	
};

const n = prompt("Enter n: ");

alert(JSON.stringify(divide(arr, n)));
