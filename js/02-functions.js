function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1- Works
addNumbers(1, 2);
//2- Errors
addNumbers(1, 2, 3);
addNumbers(1, 2, 3, "Foo");
function fullName(firstName, lastName) {
    return firstName + lastName;
}
function hello(greetingString) {
    return greetingString;
}
foo(1);
function sayHello(name) {
    return name;
}
sayHello("Kenn");
sayHello(1);
function addNumberWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumberWithOptional(1, 2);
addNumberWithOptional(1, 2, "this is optional");
//# sourceMappingURL=02-functions.js.map