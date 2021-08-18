import React from 'react'
import Styles from "./Home.module.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom"

function Home() {

    return (
        <div className={Styles.home}>
            <div className={Styles.banner}>

            </div>
            <div className={Styles.join}>
                <div className={Styles.top}>
                   <TwitterIcon color="primary" fontSize="large"/>
                </div>
                <div className={Styles.mid}>
                    <p>Happening now</p>
                    <h1>Join Twitter today.</h1>
                </div>

                <div className={Styles.bottom}>
                    <div className={Styles.log}>
                    <p className={Styles.sign}>Sign Up with Google</p>
                    </div>
                    <div className={Styles.log}>
                       <Link to={"/SignUp"}  style={{ textDecoration: "none" }}><p className={Styles.sign}>Sign Up with Mobile/Email</p></Link>
                    </div>
                </div>
                
               <p>Already Have an account?  <Link to={"/SignIn"}  style={{ textDecoration: "none" }}><span style={{color:"#00BDFE", cursor:"pointer"}}>Sign In</span></Link> </p>
            </div>
        </div>
    )
}

export default Home
