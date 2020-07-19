// Define types
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "ithoangtan",
  id: 2,
};

console.log(user);

class Account {
  username: string;
  idAccount: number;
  constructor(username: string, idAccount: number) {
    this.username = username;
    this.idAccount = idAccount;
  }
}

const account: Account = new Account("ithoangtan", 2);

console.log(account);

function getAdminUser(): Account {
  return new Account("abc", 3);
}

function deleteUser(user: User) {
  // ...
}

console.log(getAdminUser());

// Composing Types
type MyBoolean = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle
// different types too,
// for example you may have a function
// which accepts an array or a string.
function getLength(obj: string | string[]) {
  return obj.length;
}

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to
// tell TypeScript there is a
// constant called `backpack`,
// and to not worry about where it came from
declare const backpack: Backpack<string>;

// object is a string,
// because we declared it above
// as the variable part of Backpack

// const object = backpack.get();
// Due to backpack variable being a string,
// you cannot pass a number to the add function
// backpack.add(23); //error

// Structural Type System
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// prints "12, 26"
const point = { x: 12, y: 26 };
printPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); // prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"

const color = { hex: "#187ABF" };

// printPoint(color);
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
