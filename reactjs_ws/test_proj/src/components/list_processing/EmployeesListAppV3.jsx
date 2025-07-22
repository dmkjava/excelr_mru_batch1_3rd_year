import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

function EmployeesListAppV3(){
    const emps = [
        {
            empNo: 101, 
            empName: 'Anil',
            job: 'Business Analyst', 
            salary: 56000,
            mobileNo: '7788996633',
            emailId: 'anil@gmail.com'
        },
        {
            empNo: 102, 
            empName: 'Bharath',
            job: 'Manager', 
            salary: 96000,
            mobileNo: '7788996644',
            emailId: 'bharath@gmail.com'
        },
        {
            empNo: 103, 
            empName: 'Chetan',
            job: 'Clerk', 
            salary: 26000,
            mobileNo: '7788996622',
            emailId: 'chetan@gmail.com'
        },
        {
            empNo: 104, 
            empName: 'Deekshita',
            job: 'Software Engineer', 
            salary: 46000,
            mobileNo: '7788996655',
            emailId: 'deekshita@gmail.com'
        },
        {
            empNo: 105, 
            empName: 'Eeswar',
            job: 'Sr Software Engineer', 
            salary: 156000,
            mobileNo: '7788996611',
            emailId: 'eeswar@gmail.com'
        },
        {
            empNo: 106, 
            empName: 'Fatima',
            job: 'Software Engineer', 
            salary: 66000,
            mobileNo: '7788996699',
            emailId: 'fatima@gmail.com'
        },
        {
            empNo: 107, 
            empName: 'Ganesh',
            job: 'Business Analyst', 
            salary: 56000,
            mobileNo: '7788996677',
            emailId: 'ganesh@gmail.com'
        },
        {
            empNo: 108, 
            empName: 'Anil',
            job: 'Business Analyst', 
            salary: 56000,
            mobileNo: '7788996633',
            emailId: 'anil@gmail.com'
        },
        {
            empNo: 109, 
            empName: 'Anil',
            job: 'Business Analyst', 
            salary: 56000,
            mobileNo: '7788996633',
            emailId: 'anil@gmail.com'
        },
        {
            empNo: 110, 
            empName: 'Anil',
            job: 'Business Analyst', 
            salary: 56000,
            mobileNo: '7788996633',
            emailId: 'anil@gmail.com'
        }
    ];
    const [empsList, setEmpsList] =  useState([...emps]);
    const [dialogOpenFlag, setDialogOpenFlag] =  useState(false);
    const [deletingEmpNo, setDeletingEmpNo] =  useState('');

    function deleteEmp (empNo){
        // alert(empNo);
       setDeletingEmpNo(empNo)
        setDialogOpenFlag(true)
    }
    function yesHandler(){
        setDialogOpenFlag(false)
        let emps = empsList.filter(emp=>emp.empNo != deletingEmpNo);
        setEmpsList([...emps]);
    }
    function noHandler(){
        setDialogOpenFlag(false)
    }
    return (
        <div>
            <h3>Employees List V3</h3>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Emp No</th>
                        <th>Emp Name</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Mobile No</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="table-primary">
                {
                    empsList.map(emp=>{
                        return <tr key={emp.empNo}>
                            <td>{emp.empNo}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.job}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.mobileNo}</td>
                            <td>{emp.emailId}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger"
                                    onClick={()=>deleteEmp(emp.empNo)}
                                >Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            </table>
            <Dialog open={dialogOpenFlag}>
                <DialogTitle>Delete Caution</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to delete this employee?
                    </DialogContentText>
                    <DialogActions>
                        <button className="btn btn-danger"
                            onClick={yesHandler}
                        >Yes</button>
                        <button className="btn btn-primary"
                            onClick={noHandler}
                        >No</button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EmployeesListAppV3;