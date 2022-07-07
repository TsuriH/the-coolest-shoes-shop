import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import "./addEmployee.css";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit } = useForm<EmployeeModel>()
    const navigate = useNavigate()

    async function send(employee: EmployeeModel) {
        try {
            await employeesService.addProduct(employee)
            alert("product has been added!")
            navigate("/products")
        } 
        catch (err: any) {
            alert("err.message")
        }


    }




    return (
        <div className="addEmployee Box">
            <h2>Add Product</h2>
            <div className="formWrapper ">

                <form onSubmit={handleSubmit(send)}>
                    <label>First Name:</label>
                    <input type="text" {...register("firstName")} />

                    <label>Last Name:</label>
                    <input type="text" {...register("lastName")} />

                    <label>Title:</label>
                    <input type="text" {...register("title")} />

                    <label>Country:</label>
                    <input type="text" {...register("country")} />

                    <label>City:</label>
                    <input type="text" {...register("city")} />

                    <label>Birth Date:</label>
                    <input type="date" {...register("birthDate")} />

                    <label>Image: </label>
                    <input type="file" accept="image/*" {...register("image")}/>

                    <div className="buttonHolder">
                        <button>Add</button>
                    </div>


                </form>
            </div>



        </div>
    );
}

export default AddEmployee;
