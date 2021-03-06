import React, {useState, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Router, Switch, Route } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Header from "./Header";
import Home from "./Home";
import HighSchool from "./HighSchool";
import Corporate from "./Corporate";
import Pricing from "./Pricing";
import Demo from "./Demo";

// In order to proxy to the dev server while developing, add the following to package.json below the scripts section:
// "proxy": "http://localhost:4000/",

const App = () => {

    AOS.init({
        duration: 800,
        once: true,
      });

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
                        <Route exact path="/highschool" component={HighSchool}></Route>
                        <Route exact path="/corporate" component={Corporate}></Route>
                        <Route exact path="/pricing" component={Pricing}></Route>
                        <Route exact path="/demo" component={Demo}></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            )} />
        </>
    );
};


export default App;