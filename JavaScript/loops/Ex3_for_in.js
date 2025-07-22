
emp = {
    empNo: 101, 
    empName: "Anil", 
    job: "Business Analyst", 
    salary: 56000, 
    mobileNo: 7788994455, 
    emailId: "anil@gmail.com"
}

for(let key in emp){
    console.log(key, ": ", emp[key]);
}

console.log(emp.empName);
