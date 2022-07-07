import axios from "axios"
import EmployeeModel from "../Models/EmployeeModel"

class EmployeesService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {

        const response = await axios.get<EmployeeModel[]>("http://localhost:3030/api/employees")

        const employees = response.data

        return employees

    }



    public async getOneEmployee(id: number): Promise<EmployeeModel> {

        const response = await axios.get<EmployeeModel>("http://localhost:3030/api/employees/" + id)
        
        const employee = response.data

        return employee 
        
    }


    public async addProduct(employee: EmployeeModel): Promise<void>{

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
   ;

        const response = await axios.post<EmployeeModel>("http://localhost:3030/api/employees", formData)

        const addedEmployee = response.data

    }
  
}


const employeesService = new EmployeesService()

export default employeesService
