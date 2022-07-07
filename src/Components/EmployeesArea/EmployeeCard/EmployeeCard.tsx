import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./EmployeeCard.css";

interface EmployeeCardProps {
    employee: EmployeeModel
}

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
    return (
        <div className="EmployeeCard Box">
            <div className="detailsContainer">
                            <div className="info-wrapper">
                                <div key={props.employee.id} className="info">
                                    <span>firstName:</span> {props.employee.firstName}
                                    <span>lastName:</span> {props.employee.lastName}
                                    <span>title:</span> {props.employee.title}
                                    <span>city: </span> {props.employee.city}  
                                    <span>birthDate:</span> {props.employee.birthDate} 
                                </div>
                            </div>

                            <div className="image-container">
                                <NavLink to={"/employees/details/" + props.employee.id}>
                                    <img src={"http://localhost:3030/api/employees/images/" + props.employee.imageName} />  
                                </NavLink>
                            </div>

                        </div>
			
        </div>
    );
}

export default EmployeeCard;
