import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, useHistory, withRouter, Redirect } from 'react-router-dom'
import ArtistPage from '../pages/ArtistPage';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Search from '../pages/Search';

const ScrollToTop = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [history.location.pathname]);
  
    return null;
};

const ResetScroll = withRouter(ScrollToTop);


const Routes = ({ user }) => {
    return (
        <BrowserRouter>
            <ResetScroll />
            <Switch>
                <Route exact path={`/home`}>
                    <Redirect to={`/`} />
                </Route>

                <Route exact path={`/`} component={Home} />
                <Route exact path={`/search`} component={Search} />
                <Route exact path={`/search/:keyword`} component={Search} />
                <Route exact path={`/artist/:id`} component={ArtistPage} />

                <Route path="**">
                    <Page404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
