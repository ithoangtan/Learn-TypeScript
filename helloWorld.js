var user = {
    name: "ithoangtan",
    id: 2,
};
console.log(user);
var Account = /** @class */ (function () {
    function Account(username, idAccount) {
        this.username = username;
        this.idAccount = idAccount;
    }
    return Account;
}());
var account = new Account("ithoangtan", 2);
console.log(account);
function getAdminUser() {
    return new Account("abc", 3);
}
function deleteUser(user) {
    // ...
}
console.log(getAdminUser());
// Unions provide a way to handle
// different types too,
// for example you may have a function
// which accepts an array or a string.
function getLength(obj) {
    return obj.length;
}
function printPoint(p) {
    console.log(p.x + ", " + p.y);
}
// prints "12, 26"
var point = { x: 12, y: 26 };
printPoint(point);
var point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); // prints "12, 26"
var rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"
var color = { hex: "#187ABF" };
// printPoint(color);
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
//# sourceMappingURL=helloWorld.js.map