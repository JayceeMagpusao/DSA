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

// SQLBolt part 2
SELECT * FROM movies where id = 6;

SELECT * FROM movies where year between 2000 and 2010;

SELECT * FROM movies where year not between 2000 and 2010;

SELECT * FROM movies order by year asc limit 5;

// SQLBolt part 3
SELECT * FROM movies where title like "%toy%";

SELECT * FROM movies where director = "John Lasseter";

SELECT * FROM movies where director not like "John Lasseter";

SELECT * FROM movies where title like "%WALL%";

// SQLBolt part 4

SELECT distinct director FROM movies order by director asc;

SELECT title FROM movies order by year desc limit 4;

SELECT title FROM movies order by title asc limit 5;

SELECT title FROM movies order by title asc limit 5 offset 5;

// SQLBolt simple select queries

SELECT city, population FROM north_american_cities where country = "Canada";

SELECT * FROM north_american_cities where Country = "United States" ORDER BY Latitude desc;

SELECT * FROM north_american_cities WHERE Longitude < -88 ORDER BY Longitude asc;

SELECT * FROM north_american_cities WHERE Country = "Mexico" ORDER BY Population desc LIMIT 2;

SELECT * FROM north_american_cities WHERE Country = "United States" ORDER BY Population desc LIMIT 2 OFFSET 2;

// SQLBolt Outer Joins

SELECT Distinct Building_name FROM employees
    LEFT JOIN Buildings
    ON Employees.Building = Buildings.Building_name
WHERE Building_name Is Not Null;

SELECT * FROM Buildings;

SELECT Distinct Role, building_name FROM Buildings
    LEFT JOIN Employees
    ON Buildings.Building_name = Employees.Building;

// SQLBolt A short note on NULLs

SELECT * FROM employees WHERE Building Is Null;

SELECT * FROM Buildings 
    LEFT JOIN Employees
    ON Buildings.Building_name = Employees.Building
    WHERE Building Is Null;

// SQL Bolt Queries with expressions

SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

SELECT title, Rating * 10 AS gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

SELECT title
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id
WHERE year % 2 = 0;

// SQL Bolt Queries with aggregates (Pt. 1)

SELECT * FROM employees 
ORDER BY Years_employed desc
limit 1;

SELECT role, AVG(Years_employed) FROM employees GROUP BY Role;

SELECT building, sum(Years_employed) FROM employees GROUP BY building;

// SQL Bolt Queries with aggregates (Pt. 2)

SELECT role, count(*)FROM employees
WHERE role = 'Artist';

SELECT role, count(*)FROM employees
GROUP BY role;

SELECT sum(Years_employed) FROM employees
WHERE role = "Engineer";

// SQL Bolt Order of execution of a Query

SELECT director, count(*) FROM movies
GROUP BY director;

SELECT director, sum(domestic_sales + international_sales) as Sales FROM movies
    INNER JOIN Boxoffice
    on Movies.id = Boxoffice.Movie_id
GROUP BY director;

// SQL Bolt Inserting rows

INSERT INTO Movies
VALUES (4, "Toy Story 4", "John Lasseter", 2021, 27);

INSERT INTO Boxoffice
VALUES (4, 8.7, 340000000, 270000000);

// SQL Bolt Updating rows

UPDATE Movies
SET Director = "John Lasseter"
WHERE id = 2;

UPDATE Movies
SET Year = 1999
WHERE id = 3;

UPDATE Movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE id = 11;

// SQL Bolt Deleting rows

DELETE FROM Movies
WHERE Year < 2005;

DELETE FROM Movies
WHERE Director = "Andrew Stanton"

// SQL Bolt Creating tables

CREATE TABLE database (
    name TEXT,
    version INTEGER,
    Download_count INTEGER
);

// SQL Bolt Altering tables

ALTER TABLE movies
ADD Aspect_ratio float

ALTER TABLE movies
ADD Aspect_ratio float

// SQL Bolt Dropping tables

DROP TABLE Movies

DROP TABLE Boxoffices

const uncompress = (s) => {
  let result = [];
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
};

// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/
var finalValueAfterOperations = function(operations) {
    let x = 0;
    
    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        let isInc = operation === "++X" || operation === "X++";
        let isDec = operation === "--X" || operation === "X--";
        
        if (isInc) {
            x = x + 1;
        } else if (isDec) {
            x = x - 1;
        }
    }
    return x;
};

// https://leetcode.com/problems/jewels-and-stones/submissions/
var numJewelsInStones = function(jewels, stones) {
    jewelArr = jewels.split("");
    stoneArr = stones.split("")
    let counter = 0;
    
    stoneArr.forEach(stone => {
        if(jewelArr.includes(stone))
            counter++
    });
    return counter;
};

// https://leetcode.com/problems/remove-element/submissions/
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if(num === val){
            nums.splice(i, 1);
            
            i--;
        }
    }
};

// https://leetcode.com/problems/maximum-subarray/submissions/
var maxSubArray = function(nums) {
    let currMax = 0;
    let maxSubArr = -Infinity;
    
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        
        currMax = Math.max(num, currMax + num);
        maxSubArr = Math.max(currMax, maxSubArr);
    }
    
    return maxSubArr;
};

// https://leetcode.com/problems/valid-parentheses/submissions/
var isValid = function(s) {
  const left = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      left.push(s[i]);    
    } else if (legend[left.pop()] !== s[i]) {
      return false;
    }
  }
  return left.length ? false : true;
};

// https://leetcode.com/problems/merge-two-sorted-lists/submissions/
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;
    
    return (list1.val < list2.val) ? 
        {...list1, next: mergeTwoLists(list1.next, list2)} :
        {...list2, next: mergeTwoLists(list1, list2.next)}
};

// Hacker rank challenge
function maxTickets(tickets) {
    let sortedTickets = tickets.sort().reverse();
    let counter = 0;
    let maxCounter = 0;
    
    for (let i = 0; i < sortedTickets.length; i++){
       let ticket = sortedTickets[i];
       let nextTicket = sortedTickets[i + 1];
       
       if(ticket - nextTicket < 2){
        counter++
       }
        // else {
        //    if(counter > maxCounter){
        //        maxCounter = counter;
        //    }
        //    counter = 0;
    //    }
    }
    return counter;
}

function maxPosPrefixes(arr) {
    let sortArr = arr.sort().reverse();
    let results = [];
    let counter = 0;
    
    for (let i = 0; i < sortArr.length; i++){
        let num = sortArr[i];
        let prevNum = results[i - 1];
        let resSum = num + prevNum;
        
        if (results.length === 0){
            if (num > 0){
                counter ++
            }
            results.push(num);
        } else if (results.length !== 0){
            if (resSum > 0){
                counter++;
            }
            results.push(resSum);
        } 
    }
    
    return counter;

}