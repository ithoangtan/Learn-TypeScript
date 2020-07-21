// Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let scolor: string = `blue`;
scolor = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

let sentence2: string =
   "Hello, my name is " +
   fullName +
   ".\n\n" +
   "I'll be " +
   (age + 1) +
   " years old next month.";

// Array
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// OK
console.log(x[0].substring(1));

// console.log(x[1].substring(1));

// x[3] = "world";
// Tuple type '[string, number]' of length '2' has no element at index '3'.

// console.log(x[5].toString());

// Enum
enum Color {
   Red,
   Green,
   Blue,
}
let c: Color = Color.Green;

enum Color2 {
   Red = 1,
   Green = 2,
   Blue = 4,
}
let c2: Color = Color.Green;

//  Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe;
// Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
   // TypeScript knows that maybe is a boolean now
   const aBoolean: boolean = maybe;
   // So, it cannot be a string
   //   const aString: string = maybe;
   // Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === "string") {
   // TypeScript knows that maybe is a string
   const aString: string = maybe;
   // So, it cannot be a boolean
   //   const aBoolean: boolean = maybe;
   // Type 'string' is not assignable to type 'boolean'.
}

// Any
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); Object is of type 'unknown'.

let looselyTyped2: any = {};
let d = looselyTyped.a.b.c.d;
//  ^ = let d: any

// Void
function warnUser(): void {
   console.log("This is my warning message");
 }

 let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;


// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must not have a reachable end point
function error(message: string): never {
   throw new Error(message);
 }
 
 // Inferred return type is never
 function fail() {
   return error("Something failed");
 }
 
 // Function returning never must not have a reachable end point
 function infiniteLoop(): never {
   while (true) {}
 }


//  Object
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

// create(42);
// Argument of type '42' is not assignable to parameter of type 'object | null'.
// create("string");
// Argument of type '"string"' is not assignable to parameter of type 'object | null'.
// create(false);
// Argument of type 'false' is not assignable to parameter of type 'object | null'.
create(undefined);
// Argument of type 'undefined' is not assignable to parameter of type 'object | null'.

// Type assertions

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

let someValue2: any = "this is a string";

let strLength2: number = (<string>someValue).length;