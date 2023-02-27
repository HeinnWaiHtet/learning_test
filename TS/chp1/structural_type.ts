class MyClass {
  name: string;
  age: number;
  school?: string;
  constructor(name: string, age: number, school?: string) {
    this.name = name;
    this.age = age;
    this.school = school;
  }
}

class AnotherClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let myClass: MyClass = {
  name: "HWH",
  age: 26,
  school: "Monywa",
};

let anotherClass: AnotherClass;

anotherClass = myClass;
console.log("My Class ", myClass);
console.log("Another Class ", anotherClass);
