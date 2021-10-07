//Primitives arrays, booleans and numbers
//More complex types: arrays and objects
//Function types, parameters


// Primtives
let age:number;
let ageAssisgnmentOtherType : number = 12;

age = 12;
// age = 'Rs' This gives an error as age can have only number value


let username : string;

username = "Rohit Sharma";
// username = 07; error

let isInstructor : boolean;

isInstructor = true;

let hobbies : null;

// hobbies = 12; gives an error
// hobbies = 'rs' gives an error


//More complex arrays and objects

let hobbiesArray : string[];   // hobbiesArray can have array of strings
hobbiesArray = ['sports','cricket']

let person:any; // default type is any, back to standard basic js

person ={
    name:'Rohit',
    age:'24',
    reactDeveloper:true
}

let personDetails : {
    name: string;
    age:number;
}

personDetails = {
    name:'rs',
    age:24
}

// Type Inference
let course = 'React - The complete guide'

// course = 12  here we will get warning, because typescript by its own try to infere as many types as possible
// Although we can assign a type to the course variable, but as soon as we declared it we gave it a string so 
// typescript automatically picked that value and infered to that


// Using Union Types
let userName : string | number;
userName = 'rs';
userName = 12;

//functions and types
function Addition(a: number, b:number)
{
    return a+b;
}

function printOutput(value:any)
{
    console.log(value);
}

// Genrics

function insertAtBeginning<T>(array:T[],value:T)
{
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray,-1) // [-1,1,2,3]
