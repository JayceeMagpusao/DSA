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

// SQL Deleting rows

DELETE FROM Movies
WHERE Year < 2005;

