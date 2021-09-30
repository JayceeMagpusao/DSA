// 001 max-value
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

// 002 is prime
const isPrime = (n) => {
  if (n < 2) return false
  
  for (let i = 2; i < n; i++){
    isFactor = n % i === 0
    
    if (isFactor) {
      return false
    }
  }
  return true
};

// 003 uncompress
const uncompress = (s) => {
  let numbers = "0123456789";
  let newString = "";
  let i = 0;
  let j = 0;
  
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      let num = Number(s.slice(i, j));
      
      for (let count = 0; count < num; count += 1){
        newString += s[j];
      }
      j += 1;
      i = j;
    }
  }
  return newString;
};

// 004 compress
const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      i = j;
    }
  }
  
  return result.join('');
};