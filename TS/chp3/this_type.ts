class Box {
  contents: string = "";
  set(value: string) {
    this.contents = value;
    return this;
  }
}
class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}

const aa = new ClearableBox();
const bb = aa.set("hello");
bb.clear();
console.log("aa ", aa);
console.log("bb ", bb);
