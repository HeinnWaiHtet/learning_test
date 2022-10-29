let buffer = Buffer.from([0x41, 0x42, 0x43]);
console.log(buffer.toString());
console.log("Hexa format ", buffer.toString("hex"));

let zeros = Buffer.alloc(1024);
let one = Buffer.alloc(1024, 1);

let daed = Buffer.alloc(1024, "BEDABC", "hex");
console.log(daed);
