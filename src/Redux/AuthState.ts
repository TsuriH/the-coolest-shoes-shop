import UserModel from "../Models/UserModel"
import { createStore } from "redux"
import jwtDecode from "jwt-decode"


export class AuthState {
    public token: string = null
    public user: UserModel = null
}

export enum AuthActionType {
    Register,
    Login,
    Logout,
}

export interface AuthAction {
    type: AuthActionType
    payload?: string
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = { ...currentState }

    switch (action.type) {
        
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload
            const container: { user: UserModel } = jwtDecode(newState.token)
            newState.user = container.user

            break;

        case AuthActionType.Logout:
            newState.token = null
            newState.user = null
            break;
    

    }

    return newState


}

export const authStore = createStore(authReducer)