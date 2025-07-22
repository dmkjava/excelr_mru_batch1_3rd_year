emp = {
    empNo: 101,
    empName: "Anil",
    job: "Business Analyst", 
    salary: 56000, 
    mobileNo: "7788994455",
    emailId: "anil@gmail.com"
}
// regular way of accessing the object elements into local variables
/*
empNo = emp.empNo;
empName = emp.empName;
job = emp.job;
salary = emp.salary; 
mobileNo = emp.mobileNo;
emailId = emp.emailId;

console.log("empNo = ", empNo);
console.log("empName = ", empName);
console.log("job = ", job);
console.log("salary = ", salary);
console.log("mobileNo = ", mobileNo);
console.log("emailId = ", emailId);
*/
// object destructuring
const {empNo, empName, job, salary, mobileNum, emailId} = emp;
console.log('object destructuring approach');

console.log("empNo = ", empNo);
console.log("empName = ", empName);
console.log("job = ", job);
console.log("salary = ", salary);
console.log("mobileNum = ", mobileNum);
console.log("emailId = ", emailId);

