import {Redirect, Route, Switch} from 'react-router-dom';
import Error404 from './pages/error404/Error404';
import {LoginContainer} from './pages/login/LoginContainer';
import {ProfileContainer} from './pages/profile/ProfileContainer';

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}