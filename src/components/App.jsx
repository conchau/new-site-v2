import React, {useState, useEffect} from "react";
import { Router, Switch, Route } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Header from "./Header";
import Home from "./Home";

const App = () => {
    return (
        <>
            <Header />
            <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/home" component={Home}></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            )} />
        </>
    );
};


export default App;