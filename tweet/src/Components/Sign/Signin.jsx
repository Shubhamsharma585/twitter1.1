import React, { useState } from 'react'
import Styles from "./Signin.module.css"
import { ImTwitter } from "react-icons/im";
import Button from '@material-ui/core/Button';




function Signin() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
      



    return (
        <div className={Styles.sign}>
    
        <div className={Styles.logo}>
            <ImTwitter style={{fontSize:"40px", color:"#1DA1F2", marginRight:"70%" }}/>
        </div>
        <div className={Styles.cont}>

            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required="true"/>
            <input onChange={(e) => setPassword(e.target.value)} type="name" placeholder="Password" required="true"/>
         
        </div>



        <Button variant="contained" style={{backgroundColor:"#1DA1F2", color:"white", width:"200px"}}>
            Sign In
        </Button>
        
    </div>
    )
}

export default Signin
