class A {
  #x: number = 0;
  private xx: number = 10;
  public sameAs(other: A) {
    // No error
    return other.xx === this.xx;
  }
}

let a: A = new A();
console.log(`A.x `, a["xx"]);
//console.log(`A.amount `, a['amount']);

console.log(a.sameAs(new A()));
