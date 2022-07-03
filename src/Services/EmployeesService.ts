import axios from "axios"
import EmployeeModel from "../Models/EmployeeModel"

class EmployeesService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {

        const response = await axios.get<EmployeeModel[]>("http://localhost:3030/api/employees")
        const employees = response.data
        return employees

    }

}


const employeesService = new EmployeesService()

export default employeesService