import {authAPI, LoginParamsType} from '../dal/api'
import {AppThunk} from './store'

const initialState = {
    isLoggedIn: false,
    user: {} as UserType,
    buttonDisable: false,
    loading: false,
}


export const appReducer = (state: InitialStateLoading = initialState, action: AppReducerActionType): InitialStateLoading => {
    switch (action.type) {
        case 'APP/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/SET-USER':
            return {...state, user: action.user}
        case 'APP/BUTTON-DISABLE':
            return {...state, buttonDisable: action.disable}
        case 'APP/LOADING-SHOW':
            return {...state, loading: action.loading}
        default:
            return state
    }
}
//AC
export const setIsLogged = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setUser = (user: UserType) => ({type: 'APP/SET-USER', user} as const)
export const showLoading = (loading: boolean) => ({type: 'APP/LOADING-SHOW', loading} as const)
export const disableButton = (disable: boolean) => ({type: 'APP/BUTTON-DISABLE', disable} as const)
//thunks
export const setIsLoggedTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    dispatch(showLoading(true))
    dispatch(disableButton(true))
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLogged(true))
            sessionStorage.setItem('user', res.data.data.accessToken)

        })
        .finally(() => {
                dispatch(showLoading(false))
                dispatch(disableButton(false))
            }
        )
}
export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLogged(false))

        })
}
export const fetchUserTC = (): AppThunk => (dispatch) => {
    authAPI.fetch()
        .then(res => {
            dispatch(setUser(res.data.data))

        })
}


//type
export type InitialStateLoading = typeof initialState
export type AppReducerActionType =
    ReturnType<typeof setIsLogged>
    | ReturnType<typeof setUser>
    | ReturnType<typeof showLoading>
    | ReturnType<typeof disableButton>
export type UserType = {
    name: string
    email: string
}


