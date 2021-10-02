var ourArray = [20, 1, 34, 14, 90];

//method to sort an array of integers
ourArray = ourArray.sort((a, b) => a-b);

console.log(ourArray); //[ 1, 14, 20, 34, 90 ]


var ourArray2 = ["Mom", "Dad", "Siblings", "Friends"];

//method to sort an array of strings
ourArray2 = ourArray2.sort();

console.log(ourArray2); //[ 'Dad', 'Friends', 'Mom', 'Siblings' ]
