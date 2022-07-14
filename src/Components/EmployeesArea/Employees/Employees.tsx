import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import EmployeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import Loading from "../../SharedArea/Loading/Loading";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Employees.css";

function Employees(): JSX.Element {
    const [employees, setEmployees] = useState<EmployeeModel[]>([])

    useEffect(() =>{
        EmployeesService.getAllEmployees()
        .then(employees => setEmployees(employees))
        .catch(err => notifyService.error(err.message))


    }, [])


    return (
        <div className="Employees">
            <NavLink to="/employee/new">➕</NavLink>

            {employees.length === 0 && <Loading />}

            {employees.map(e => <EmployeeCard key={e.id} employee={e}/>   )}
           
			
        </div>
    );
}

export default Employees;


