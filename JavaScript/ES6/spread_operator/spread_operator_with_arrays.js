nos = [10, 20, 30, 40]
// add 50 at end of nos.
// nos.push(50)
nos = [...nos, 50]

console.log("nos =");
console.log(nos);
// nos.unshift(6);
nos = [6, ...nos];
console.log(nos);
