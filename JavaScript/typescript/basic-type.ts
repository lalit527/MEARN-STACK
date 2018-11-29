

// number
let x: number = 5;
let decimal:number = 5.6;
let binary:number = 0b1010;
let a = 5; // let a:number = 5;
 

// string
let data: string = "blue";
let data1: string = 'red';

// Boolean
let isComplete: boolean = true;

// x='Hello'; Error

// Array
let array: number[] = [1, 2, 3];
let array1: Array<number> = [1, 2, 3];

// Tuple
let tuple: [string, number] = ["hello", 1];
// let tuple1: [string, number] = [1, "hello"];

// Enum
enum Color {Red, Green, Blue}

enum Color2 {Red = 1, Green = 2, Blue = 3}

// any
let random: any = 4;
random = 'Hello';
random = [1,2,3,4];
let array2: Array<any> = [1, 2, 'Hello', false];

// void
function foo(): void {
    console.log('Void function');
}

function baz(): number {
    console.log('Void function');
    return 1;
}

let unused: void = null; // null or undefined