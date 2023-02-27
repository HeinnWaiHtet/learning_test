var MyClass = /** @class */ (function () {
    function MyClass(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }
    return MyClass;
}());
var AnotherClass = /** @class */ (function () {
    function AnotherClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return AnotherClass;
}());
var myClass = {
    name: "HWH",
    age: 26,
    school: "Monywa"
};
var anotherClass;
anotherClass = myClass;
console.log("My Class ", myClass);
console.log("Another Class ", anotherClass);
