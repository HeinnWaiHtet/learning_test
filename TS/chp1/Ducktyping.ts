class Human {
  work() {
    console.log("Human work");
  }
}

class Doctor extends Human {
  work() {
    console.log("Doctor works");
  }
}

class Teacher extends Human {
  work() {
    console.log("Teacher works");
  }
}

class Robot {
  work() {
    console.log("Robot works");
  }
}

let h = new Doctor();
h.work();
h = new Robot();
h.work();
