const birthYear = window.prompt("Enter your birth year:"); 
const currentYear = new Date().getFullYear();

if (birthYear && !isNaN(birthYear)) {
    const age = currentYear - birthYear;
    console.log(`Your age is ${age}`);
} else {
    console.log("Please enter a valid birth year.");
}


// Define the length and width of the rectangle
const length = 10; // Replace with any value
const width = 5;   // Replace with any value

// Calculate the area
const area = length * width;

// Output the result
console.log(`The area of the rectangle is ${area}`);


function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Get radius input from the user
let radius = parseFloat(prompt("Enter the radius of the circle:"));
let area = calculateCircleArea(radius);

alert(`The area of the circle with radius ${radius} is: ${area.toFixed(2)}`);



function calculateCubeSurfaceArea(sideLength) {
    return 6 * sideLength * sideLength;
}

// Get the side length input from the user
let sideLength = parseFloat(prompt("Enter the side length of the cube:"));
let surfaceArea = calculateCubeSurfaceArea(sideLength);

alert(`The surface area of the cube with side length ${sideLength} is: ${surfaceArea.toFixed(2)}`);


function convertTemperature(value, scale) {
    let result;
    
    if (scale === "F") {
        // Convert Fahrenheit to Celsius
        result = (value - 32) * 5 / 9;
        return `${value}°F is equal to ${result.toFixed(2)}°C`;
    } else if (scale === "C") {
        // Convert Celsius to Fahrenheit
        result = (value * 9 / 5) + 32;
        return `${value}°C is equal to ${result.toFixed(2)}°F`;
    } else {
        return "Invalid scale. Please use 'F' for Fahrenheit or 'C' for Celsius.";
    }
}

// Get the temperature value and scale (F or C) from the user
let tempValue = parseFloat(prompt("Enter the temperature value:"));
let tempScale = prompt("Enter the scale (F for Fahrenheit or C for Celsius):").toUpperCase();

// Convert and display the result
alert(convertTemperature(tempValue, tempScale));



function convertSeconds(seconds) {
    // Calculate minutes and remaining seconds
    let minutes = Math.floor(seconds / 60); // Minutes part
    let remainingSeconds = seconds % 60;   // Remaining seconds part

    return `${seconds} seconds is equal to ${minutes} minutes and ${remainingSeconds} seconds.`;
}

// Get the number of seconds from the user
let totalSeconds = parseInt(prompt("Enter the number of seconds:"));

// Convert and display the result
alert(convertSeconds(totalSeconds));


// Start 

// Increment and Decrement Operator:

//  - Q1:
//  let a = 2;
// let b = ++a * 2; 

// // b=6
 
// - Q2
// let x = 5;
// let y = x-- + 2;
// y=7

//  - Q3 
// let x = 3;
// let y = ++x + x++ + ++x;

// y=14
// x=6

//  - Q4 
//  let m = 2;
// let n = ++m * m++ * --m;
// n=27
// m=3

//  - Q5
//  let a = 3;
// let b = 5;
// let result = ++a + b-- - a++ + --b;
// result=8

// - Q6
// let m = 2;
// let n = 4;
// let p = m++ + ++n - --m + n--;
// m=2,n=5,p=10

//  - Q7
//  let a = 5;
// let b = 3;
// let c = 2;
// let d = 7;
// let result = ++a * (b-- + c) / --d;
// a=6, b=2, c=2, d=6 ,result= 5

//  - Q8
// let m = 2;
// let n = 3;
// let o = 4;
// let result = m++ * (--n + m) / (o-- - n);
// m=3, o=2, n=3, result=5



//  End 