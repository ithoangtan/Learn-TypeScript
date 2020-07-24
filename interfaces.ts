// function printLabel(labeledObj: { label: string }) {
//    console.log(labeledObj.label);
//  }

//  let myObj = { size: 10, label: "Size 10 Object" };
//  printLabel(myObj);

//Out First Interface
interface LabeledValue {
   label: string;
}

function printLabel(labeledObj: LabeledValue) {
   console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/**
 * Optinal Properties  */
interface SquareConfig {
   color?: string;
   width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
   let newSquare = { color: "white", area: 100 };
   if (config.color) {
      newSquare.color = config.color;
   }
   if (config.width) {
      newSquare.area = config.width * config.width;
   }
   return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);

/**
 * Readonly Properties
 */
interface Point {
   readonly px: number;
   readonly py: number;
}

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

a = ro as number[];
a[0] = 10;
console.log(ro);
console.log(a);

// ro[0] = 12; // error!
// // Index signature in type 'readonly number[]' only permits reading.
// ro.push(5); // error!
// // Property 'push' does not exist on type 'readonly number[]'.
// ro.length = 100; // error!
// // Cannot assign to 'length' because it is a read-only property.
// a = ro; // error!
// // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

interface SquareConfig {
   color?: string;
   width?: number;
}

function createSquares(config: SquareConfig): { color: string; area: number } {
   return { color: config.color || "red", area: config.width || 20 };
}

interface SquareConfig {
   color?: string;
   width?: number;
   [propName: string]: any;
}

let mySquares = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare(squareOptions);
console.log(mySquare3);
