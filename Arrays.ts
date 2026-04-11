// Arrays in Typescript
// An array is special type of variable that stores multiple values
// The values can be of the same data type or different data types
// Arrays are declared using [] or the generic Array<T> type
// Indexing starts from 0
// Arrays are an ordered collection of elements

// Approach 1: using leteral

// let names:string[]=[];  //declariation

// // Initialization/assigning values

// names[0]="John";
// names[1]="Smith";
// names[2]="Peter";
// names[3]="Scott";

// let names:string[]=["John","Smith","Peter","Scott"]; //declaration + initialization
// console.log(names);

// Approach 2: usig generic Array<T> type

let empNames:Array<string>=["John","Smith","Peter","Scott"];
let empId:Array<number>=[1,2,3,4,5];
let data:Array<number|string>=["Shubham",1,2,"John"];
let mixedData:Array<any>=[1,"John",true,null];

let mixedData2 : Array<any>=[1,"John",true,null];

console.log(empNames[2]);
console.log(empId.length);

// Example : Iterating over an array using a traditional for loop

for(let i=0;i<data.length;i++)
{
    console.log(data[i]);
}

// Example