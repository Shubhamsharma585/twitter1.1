import React, { useState } from 'react'
import Profile from '../Profile/Profile'
import Styles from "./Dash.module.css"
import Navigation from "./Navigation"
import Public from './Public'
import Suggest from "./Suggest"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect } from "react-router-dom"



function Dash() 
{

    const [pro, setPro] = useState(false)

    var isloggedIn = useSelector((state) => state.regi.isloggedIn);
  


    return !isloggedIn?(
    
        <Redirect to={"/"} push/> 
       
        ):( 
        <div className={Styles.dash}>
           <div className={Styles.left}>
              <Navigation setPro={setPro}/>
           </div> 
           <div className={Styles.mid}>
               {(pro)? <Profile/>:<Public/>}
           </div>
           <div className={Styles.right}>
              <Suggest/>
           </div>
            
        </div>
    )
}

export default Dash
