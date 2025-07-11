
emp = {}
// console.log(emp.empName)
// console.log(emp.address)
// console.log(emp.address.city)
emp = undefined 
emp = {
    empNo: 101,
    empName: "Anil", 
    address: {
        street: "Balaji Nagar", 
        city: "Hyderabd"
    }
}

console.log(emp.empName)
console.log(emp.address)
console.log(emp.address.city)

console.log("checking data availability: regular approach");

if(emp && emp.address && emp.address.city)
    console.log(emp.address.city)

console.log("checking data availability: using optional chaning");
console.log(emp?.address?.city);
console.log(emp?.address?.job);

