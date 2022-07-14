import axios from "axios"
import EmployeeModel from "../Models/EmployeeModel"
import { EmployeesAction, EmployeesActionType, employeesStore } from "../Redux/EmployeesState"

class EmployeesService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {

        let employees = employeesStore.getState().Employees
        if (employees.length === 0) {

            const response = await axios.get<EmployeeModel[]>("http://localhost:3030/api/employees/")
            employees = response.data
            const action: EmployeesAction = { type: EmployeesActionType.FetchEmployees, payload: employees }
            employeesStore.dispatch(action)

        }

        return employees

    }



    public async getOneEmployee(id: number): Promise<EmployeeModel> {

        let employee

        let employees = employeesStore.getState().Employees

        if (employees.length === 0) {

            const response = await axios.get<EmployeeModel>("http://localhost:3030/api/employees/" + id)

            employee = response.data
        }

        else {

            employee = employees.find(e => e.id === id)
        }


        return employee

    }


    public async addProduct(employee: EmployeeModel): Promise<void> {

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
        formData.append("lastName", employee.lastName)
        formData.append("country", employee.country)
        formData.append("city", employee.city)
        formData.append("imageName", employee.imageName)
        formData.append("birthDate", employee.birthDate.toString())
        formData.append("image", employee.image[0]);

        const response = await axios.post<EmployeeModel>("http://localhost:3030/api/employees", formData)

        const addedEmployee = response.data

        const action: EmployeesAction = {type: EmployeesActionType.AddEmployee, payload:addedEmployee}
        employeesStore.dispatch(action)

    }


    public async updateEmployee(employee: EmployeeModel): Promise<void> {

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
        formData.append("lastName", employee.lastName)
        formData.append("country", employee.country)
        formData.append("city", employee.city)
        formData.append("imageName", employee.imageName)
        formData.append("birthDate", employee.birthDate.toString())
        formData.append("image", employee.image[0]);

        const response = await axios.put<EmployeeModel>("http://localhost:3030/api/employees/" + employee.id, formData)

        const updatedEmployee = response.data

        const action: EmployeesAction = {type: EmployeesActionType.UpdateEmployee, payload: updatedEmployee}
        employeesStore.dispatch(action)

    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete("http://localhost:3030/api/employees/" + id)

        const action: EmployeesAction = {type: EmployeesActionType.UpdateEmployee, payload: id}
        employeesStore.dispatch(action)

    }



}


const employeesService = new EmployeesService()

export default employeesService
