const maxValue = (nums) => {
  max = -Infinity
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    
    if (num > max) {
      max = num
    }
  }
  return max
};