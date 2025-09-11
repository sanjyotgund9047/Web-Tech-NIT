let a = 25;
console.log(typeof a);
a = "prasad";
console.log(typeof a);
a = true;
console.log(typeof a);
a = undefined;
console.log(typeof a);
a = null;
console.log(typeof a);
a = [1, 2];
console.log(typeof a);
a = {};
console.log(typeof a);
function x() {}
console.log(typeof x);

// numbers
let num = 25.4118;
console.log(typeof num); //number
console.log(num.toFixed(2)); // it will round up for 2 digits after decimal 25.41
console.log(num.toPrecision(3)); // it will round up for 3 digits from starting  25.4
num = 25;
console.log(num.toString(2)); //11001 tostring convert number into string of any base

// math methods

console.log(Math.sqrt(16)); //4
console.log(Math.cbrt(27)); //3
console.log(Math.pow(2, 3)); //8
console.log(Math.abs(-10)); //10
console.log(Math.max(5, 3, 2, 1, 7, 8, 9, 12)); //12
console.log(Math.min(5, 3, 2, 1, 7, 8, 9, 12)); //1
console.log(Math.ceil(2.1)); //3 because 3 is nearest greater value
console.log(Math.floor(2.8)); //2 because 2 is nearest smaller value
console.log(Math.round(2.6)); //3 because nearest value

//Random value get like a ludo game
console.log(Math.ceil(Math.random() * 6));

//i want value between 7 to 14
console.log(Math.floor(Math.random() * 7) + 6);

// Strings
let b = "Sanjyot",
  y = "Gund";

console.log(
  "the Prasad said",
  "Good Night",
  "The Time is 5 O' clock",
  "My name is "
);
console.log(`My name is ${b}`);
console.log("This is also string");

//Write in console to printf "The total price of 25 apples with each cost 5 rupees is 125"
console.log(`The price of `);

//String methods default
let str = "javascript";

console.log(str.length);
console.log(str[0]);
console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());
console.log(str.charAt[10]);
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.endsWith("pt"), str.startsWith("gt"));
str = "Javascript";
console.log(str.slice(1, 5));
console.log(str.slice(6));
console.log(str.split("a"));
str = "Js is so easy";
console.log(str.split(" ").length-1);
str = "My name is sanjyot";
console.log(
  str.split("a").length -
    1 +
    str.split("e").length -
    1 +
    str.split("i").length -
    1 +
    str.split("o").length -
    1 +
    str.split("u").length -
    1 +
    str.split(' ').length-
    1 -
    str.length
);
