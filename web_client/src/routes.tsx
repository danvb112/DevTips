import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import DevForm from './pages/DevForm'
import DevList from './pages/DevList'
import LandingLogin from './pages/LandingLogin'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/landing-login' component={LandingLogin} />
                <Route path='/dev-list' component={DevList} />
                <Route path='/dev-form' component={DevForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;