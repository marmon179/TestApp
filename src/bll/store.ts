import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {appReducer, AppReducerActionType} from './app-reducer';


const reducers = combineReducers({
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStateType = ReturnType<typeof reducers>
export type AppActionType = AppReducerActionType
export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store