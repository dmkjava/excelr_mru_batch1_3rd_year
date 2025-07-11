nos = [10, 20, 30, 40]

first_no = nos[0]
second_no = nos[1]

console.log("regular approach");
console.log(first_no, second_no);

// ================
console.log("array destructuring approach");
console.log("first and second");
[first_no, second_no] = nos;
console.log(first_no, second_no);

console.log("first and second");
[a, b] = nos;
console.log("a= ",a, ", b= ", b);

console.log("first and third");
[a, , b] = nos;
console.log("a= ", a, ", b= ", b);

console.log("first and fourth");
[a, , ,b] = nos;
console.log("a= ", a, ", b= ", b);

console.log("third and fourth");
[, , a, b] = nos;
console.log(nos);

console.log("a= ",a, ", b= ", b);