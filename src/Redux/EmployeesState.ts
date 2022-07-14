import { createStore } from "redux";
import EmployeeModel from "../Models/EmployeeModel";



export class EmployeesState {
    public Employees: EmployeeModel[] = []

}



export enum EmployeesActionType {
    FetchEmployees,
    AddEmployee,
    UpdateEmployee,
    DeleteEmployee
}



export interface EmployeesAction {
    type: EmployeesActionType
    payload: any
}



export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {

    const newState = { ...currentState }

    switch (action.type) {

        case EmployeesActionType.FetchEmployees:
            newState.Employees = action.payload

            break;

        case EmployeesActionType.AddEmployee:
            newState.Employees.push(action.payload)

            break;

        case EmployeesActionType.UpdateEmployee:
            const indexToUpdate = newState.Employees.findIndex(e => e.id === action.payload)
            if (indexToUpdate >= 0) {
                newState.Employees[indexToUpdate] = action.payload
            }

            break;

        case EmployeesActionType.DeleteEmployee:
            const indexToDelete = newState.Employees.findIndex(e => e.id === action.payload.id)
            if (indexToDelete >= 0) {
                newState.Employees.splice(indexToDelete, 1)
            }
            break;
    }
    return newState
}


export const employeesStore = createStore(employeesReducer)