let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
  // 1. find the largest subarray sum starting from index 0
  let sum_array = [array[1]];
  for (let i = 1; i < array.length; i++) {
    sum_array.push(sum_array[i-1]+array[i]);
  }
  console.log(sum_array);
}

largestSubarraySum(array);
