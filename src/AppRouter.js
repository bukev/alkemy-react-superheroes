import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import config from './config'
import axios from 'axios'
import { Auth } from './views/Auth';
import { Home } from './views/Home';
import { Search } from './views/Search';
import { NotFound } from './views/NotFound';

function AppRouter() {


    const APIURL = `/api/${config.APIToken}/`
    sessionStorage.setItem('APIURL', APIURL)

    return (
        <Router>
            <Switch>
                <Route exact path="/auth">
                    <Auth APIURL={APIURL} />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
                <Route exact path="/auth">

                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </Router>
    );
}

export default AppRouter;
