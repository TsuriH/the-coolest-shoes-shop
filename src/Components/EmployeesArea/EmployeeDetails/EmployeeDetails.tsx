import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import "./EmployeeDetails.css";

function EmployeeDetails(): JSX.Element {

    const params = useParams()
   

    const [employee, setEmployee] = useState<EmployeeModel>()
    
    useEffect(() => {

       
        const id = Number(params.prodId)
       

        employeesService.getOneEmployee(id)
        .then(employee => setEmployee(employee))
        .catch(err => alert(err.message))

        


    },[])


    return (
        <div className="EmployeeDetails ">

            {     employee && 
                <div>
                    <h3>Name: {employee?.firstName}</h3>
                    <h3>BirthDay: {employee?.birthDate}</h3>
                    <h3>City: {employee?.city}</h3>

                    <br />
                    <br />

                    <img src={"http://localhost:3030/api/employees/images" + employee?.imageName} />
                    
                    <br />
                    <br />

                    <NavLink to="/products">Back</NavLink>
                </div>
            }

        </div>
    );
}

export default EmployeeDetails;
