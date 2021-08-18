
import React, { useState } from 'react'
import Styles from "./Signup.module.css"
import { ImTwitter } from "react-icons/im";
import Button from '@material-ui/core/Button';





function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
      


    return (
        <div className={Styles.sign}>
    
            <div className={Styles.logo}>
                <ImTwitter style={{fontSize:"40px", color:"#1DA1F2", marginRight:"70%" }}/>
            </div>
            <div className={Styles.cont}>

                <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Name"/>
                <input onChange={(e) => setPhone(e.target.value)} type="name" placeholder="Phone"/>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input onChange={(e) => setPassword(e.target.value)} type="name" placeholder="Password"/>
             
            </div>



            <Button variant="contained" style={{backgroundColor:"#1DA1F2", color:"white", width:"200px"}}>
                Sign Up
            </Button>
            
        </div>
    )
}

export default Signup;
