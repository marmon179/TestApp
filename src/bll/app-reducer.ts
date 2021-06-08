import {authAPI, LoginParamsType} from '../dal/api'
import {AppThunk} from './store'

const initialState = {
    isLoggedIn: false,
}


export const appReducer = (state: InitialStateLoading = initialState, action: AppReducerActionType): InitialStateLoading => {
    switch (action.type) {
        case 'APP/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

export const setIsLoggedAC = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
//thunks
export const setIsLoggedTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedAC(true))

        })
}
export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedAC(false))
        })
}


//type
export type InitialStateLoading = typeof initialState
export type setInitializeAppActionType = ReturnType<typeof setIsLoggedAC>
export type AppReducerActionType = ReturnType<typeof setIsLoggedAC>