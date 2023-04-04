import React, {useState} from 'react'



export const UseStateDemo = () => {

    const [emp, setEmp] = useState({empId:"1001",empName:"Jhon"});

    //const [empName, setEmpName] = useState('Jhon');

  return (

    <div>

        {emp.empId}<br/>

        {emp.empName}<br/>

        <button onClick={()=>{setEmp({empId:"1002",empName:"Sara"})}}>Change State</button>
        

        </div>

  )

}