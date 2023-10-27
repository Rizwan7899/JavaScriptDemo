
// Converting to Number using Number()

// String to number => if actual number is there then it convert of number else it converts to NaN

let str="33abc"
let num=Number(str)

// console.log(num)
// console.log(typeof(num))

// boolean to number => true converted to 1 and false to 0


let isBoolean=false
let num2=Number(isBoolean)

// console.log(num2)
// console.log(typeof(num2))

// null and undefined conversions to number, null converts to 0 and undefined converts to NaN

let age=null;
let age1=Number(age)

// console.log(age1)
// console.log(typeof(age1))

// To String conversions using String()
//all the types such as number,boolean,null,undefined simply converts to string


// To Boolean conversion using Boolean

// number to boolean -> every number converts to true only zero converts to false

let booleanNum=-12200000;
let booleanValue=Boolean(booleanNum)
// console.log(typeof booleanValue)
// console.log(booleanValue)

// String to boolean -> empty string false , and otherwise true;

let booleanStr="false"
let booleanVal=Boolean(booleanStr)

// console.log(booleanVal)
// console.log(typeof(booleanVal))

//null and undefined to boolean => both converts to false;
let booleanNull;
let booleanNullValue=Boolean(booleanNull)
console.log(booleanNullValue);

console.log(typeof(booleanNullValue));





