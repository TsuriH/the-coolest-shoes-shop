import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import EmployeesService from "../../../Services/EmployeesService";
import "./Employees.css";

function Employees(): JSX.Element {
    const [employees, setEmployees] = useState<EmployeeModel[]>([])

    useEffect(() =>{
        EmployeesService.getAllEmployees()
        .then(employees => setEmployees(employees))
        .catch(err => alert(err.message))


    }, [])


    return (
        <div className="Employees">
           
            {employees.map(e =>{
                 return <ul>
                            <li><span>Id:</span>  {e.id}</li>
                            <li> <span>firstName:</span> {e.firstName}  </li>
                            <li><span>lastName:</span>  {e.lastName} </li>
                            <li><span>title:</span>  {e.title}</li>
                            <li><span>city: </span> {e.city}  </li>
                            <li><span>birthDate:</span>  {e.birthDate} </li>
                            <li><span>imageName:</span>  {e.imageName} </li>
                       </ul>
                 })}
           
			
        </div>
    );
}

export default Employees;


