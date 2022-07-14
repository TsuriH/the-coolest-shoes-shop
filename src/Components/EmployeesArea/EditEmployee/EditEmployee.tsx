import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import "./EditEmployee.css";

function EditEmployee(): JSX.Element {

    const params = useParams()

    const id = +params.prodId

    const navigate = useNavigate()

    const { register, handleSubmit, formState, setValue } = useForm<EmployeeModel>()

    useEffect(() => {
        
        employeesService.getOneEmployee(id)
        .then(employee => 

            {
                setValue("id", employee.id)
                setValue("birthDate", employee.birthDate)
                setValue("city", employee.city)
                setValue("country", employee.country)
                setValue("firstName", employee.firstName)
                setValue("title", employee.title)
                setValue("lastName", employee.lastName)
                setValue("city", employee.city)
                
            })

        .catch(err =>   notifyService.error(err.message))

    }, [])

    async function send(employee: EmployeeModel) {

        try {
            
            await employeesService.updateEmployee(employee)
            notifyService.success("Employee has been updated")
            navigate("/employees")

        } catch (err: any) {

            notifyService.error(err.message)

        }
        
    }




    return (
        <div className="EditEmployee">
			  <h2>Edit Employee</h2>
            <div className="formWrapper ">

                <form onSubmit={handleSubmit(send)}>
                    
                    <label>First Name:</label>
                    <input type="text" {...register("firstName", {
                        required:{value: true, message: "Missing name"},
                        minLength:{value: 2, message: "Name must be minimum 2 chars"},
                        maxLength:{value: 30, message: "Name can't exceed 100 chars"}
                    })} />
                    <span>{formState.errors.firstName?.message}</span>

                    <label>Last Name:</label>
                    <input type="text" {...register("lastName", {
                        required:{value: true, message: "Missing lastname"},
                        minLength:{value: 2, message: "Too short! at least 2 letters"},
                        maxLength:{value: 30, message: "Too long! cut it to 14 letters at top!"}
                    })} />
                    <span>{formState.errors.lastName?.message}</span>

                    <label>Title:</label>
                    <input type="text" {...register("title", {
                        required: {value: true, message: "Missing Title" },
                        minLength: {value: 5, message: "Too short, at least 5 letters"},
                        maxLength: {value: 30, message: "Too long, at least 30 letters"},
                    })} />
                    <span>{formState.errors.title?.message}</span>   

                    <label>Country:</label>
                    <input type="text" {...register("country", {
                        required: {value: true, message: "Missing country name"},
                        minLength: {value: 3, message: "Too short, at least 3 letters"},
                        maxLength: {value: 30, message: "Too long, at least 30 letters"},
                    })}/>
                    <span>{formState.errors.country?.message}</span>
                    
                    <label>City:</label>
                    <input type="text" {...register("city",{
                        required: {value: true, message: "Missing city name"},
                        minLength: {value: 2, message: "Too short, at least 3 letters"},
                        maxLength: {value: 30, message: "Too long, at least 30 letters"},
                    })}/>
                    <span>{formState.errors.city?.message}</span>

                    <label>Birth Date:</label>
                    <input type="date" {...register("birthDate")} />
                    <span></span>

                    <label>Image: </label>
                    <input type="file" accept="image/*" {...register("image")}/>
                    <span></span>

                    <input type="hidden" {...register("id")}/>

                    <div className="buttonHolder">
                        <button>Update</button>
                    </div>


                </form>
            </div>

        </div>
    );
}

export default EditEmployee;
