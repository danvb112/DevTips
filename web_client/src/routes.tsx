import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import DevForm from './pages/DevForm'
import DevList from './pages/DevList'
import LandingLoginUser from './pages/LandingLoginUser'
import LandingLoginDev from './pages/LandingLoginDev'
import UserForm from './pages/UserForm'

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
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;