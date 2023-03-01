function nullishCheck(val: number | undefined | null) {
  console.log(`value : ${val ?? `undefined or null`}`);
}

nullishCheck(10);
nullishCheck(null);
nullishCheck(undefined);

function nullCoalesingAdd(num1: number, num2: number | null | undefined) {
  console.log(
    `The sum of num1 ${num1} and num2 ${num2} is ${num1 + (num2 ?? 0)}`
  );
}

nullCoalesingAdd(1, 2);
nullCoalesingAdd(10, null);
nullCoalesingAdd(20, undefined);
