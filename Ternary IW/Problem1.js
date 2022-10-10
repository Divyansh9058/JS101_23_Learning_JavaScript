//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let year = 1997;

let curryear = 2022;

let age = curryear - year;

(age >= 13 && age <= 19) ? console.log("Tennage") : (age >= 20 && age <= 29) ? console.log("Twenties") : null;



