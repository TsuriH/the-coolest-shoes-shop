import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import "./EmployeeDetails.css";

function EmployeeDetails(): JSX.Element {

    const params = useParams()
   const navigate = useNavigate()

    const [employee, setEmployee] = useState<EmployeeModel>()
    
    useEffect(() => {

       
        const id = Number(params.prodId)
       

        employeesService.getOneEmployee(id)
        .then(employee => setEmployee(employee))
        .catch(err => notifyService.error(err.message))

        


    },[])

    async function deleteProduct() {
        
        try {
            
            const iAmsure = window.confirm("Are you sure?")
            if(!iAmsure) return

            await employeesService.deleteEmployee(employee.id)
            notifyService.error("Employee has been deleted")
            navigate("/product")

        } catch (err: any) {

            alert(err.message)
        }
    }

    return (
        <div className="EmployeeDetails ">

            {     employee && 
                <div>
                    <h3>Name: {employee.firstName}</h3>
                    <h3>BirthDay: {employee.birthDate}</h3>
                    <h3>City: {employee.city}</h3>

                    <br />
                    <br />

                    <img src={"http://localhost:3030/api/employees/images/" + employee.imageName} />
                    
                    <br />
                    <br />

                    <NavLink to="/products">Back</NavLink>

                    <span> | </span>

                    <NavLink to={"/employees/edit/" + employee.id}>Edit</NavLink>

                    <span> | </span>

                    <NavLink to="" onClick={deleteProduct}>Delete</NavLink>
                </div>
            }

        </div>
    );
}

export default EmployeeDetails;
