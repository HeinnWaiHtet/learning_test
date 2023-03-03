class Box1 {
  content: string = "";

  sameAs(other: Box1) {
    return this.content === other.content;
  }
}

class DerivedBox extends Box1 {
  otherContents: string = "";
}

let derivedBox = new DerivedBox();
let baseBox = new Box1();

console.log(baseBox.sameAs(derivedBox));
