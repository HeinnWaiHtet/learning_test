interface A {
  x: number;
  y?: number;
}

class C implements A {
  x = 0;
}

let x: C = new C();
// x.y = 10; throw error cause of optional properties interface
console.log(x);
