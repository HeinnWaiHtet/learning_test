interface IWork {
  work: () => void;
}

class Person implements IWork {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log("Person Constructor called");
  }

  work() {
    console.log("Person ", this.name, " Work this->", this);
  }
}

class Engineer extends Person {
  speciality: string;
  constructor(name: string, age: number, speciality: string) {
    super(name, age);
    this.speciality = speciality;
    console.log("Engineer Constructor works");
  }

  work(): void {
    console.log("Engineer Works");
    super.work();
  }
}

let engieer: Engineer;
engieer = new Engineer("HWH", 26, "SE");
engieer.work();
