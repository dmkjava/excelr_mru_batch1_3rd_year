emp = {
    empNo: 101, 
    empName : "Anil", 
}
console.log(emp);

// regular approach or traditional approach
console.log("regular approach ");

emp.job = "Business Analyst"; 
console.log(emp);
// using spread operator
console.log("using spread operator");

emp = {...emp, salary: 56000}
console.log(emp);
