import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import "./addEmployee.css";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<EmployeeModel>()

    const navigate = useNavigate()

    async function send(employee: EmployeeModel) {
        try {
            await employeesService.addProduct(employee)
            notifyService.success("employee has been added!")
            navigate("/employees")
        } 
        catch (err: any) {
            notifyService.error(err)
        }


    }      




    return (
        <div className="addEmployee Box">
            <h2>Add Product</h2>
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

                    <div className="buttonHolder">
                        <button>Add</button>
                    </div>


                </form>
            </div>



        </div>
    );
}

export default AddEmployee;
