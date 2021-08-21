import React from 'react'
import Nav from "../Components/Nav/Nav"
import Home from "../Components/Home/Home"
import { Switch, Route } from "react-router-dom"
import Signin from "../Components/Sign/Signin"
import Signup from "../Components/Sign/Signup"
import Profile from "../Components/Profile/Profile"
import Dash from '../Components/Dashboard/Dash'


function Routes() {

 



    return (
        <div>

            <Switch>

               <Route path="/nav" exact>
                   <Nav/>
               </Route>

               <Route path="/" exact>
                   <Home/>
               </Route>

               <Route path="/SignIn" exact>
                   <Signin/>
               </Route>

               <Route path="/SignUp" exact>
                   <Signup/>
               </Route>

               <Route path="/profile" exact>
                   <Profile/>
               </Route>

               <Route path="/dash" exact>
                   <Dash/>
               </Route>

            </Switch>
        
        </div>
    )
}

export default Routes;
