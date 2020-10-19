import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import DevForm from './pages/DevForm'
import DevList from './pages/DevList'
import LandingLoginUser from './pages/LandingLoginUser'
import LandingLoginDev from './pages/LandingLoginDev'
import UserForm from './pages/UserForm'
import RegisterDev from './pages/RegisterDev'
import DevPage from './pages/DevPage'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/landing-login-user' component={LandingLoginUser} />
                <Route path='/landing-login-dev' component={LandingLoginDev} />
                <Route path='/dev-list' component={DevList} />
                <Route path='/dev-form' component={DevForm} />
                <Route path='/user-form' component={UserForm} />
                <Route path='/register-dev' component={RegisterDev} />
                <Route path='/dev-page/:id' component={DevPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;