import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movies/:id" component={MovieDetail}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}
