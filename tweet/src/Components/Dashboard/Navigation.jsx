import React from 'react'
import { ImTwitter } from "react-icons/im";
import Styles from "./Navigation.module.css"
import { useSelector, useDispatch } from "react-redux"
import { loggingout } from '../../Redux/Registration/action';



function Navigation({setPro}) 
{


    const dispatch = useDispatch();


    const showProfile = () => {
        setPro(true);
    }

    const showDash = () => {
        setPro(false);
    }

    const logout = () => {
        dispatch(loggingout())
    }
 
 
    return (
        <div>
            <div>
             <ImTwitter style={{fontSize:"40px", color:"#1DA1F2", marginRight:"60%", marginTop:"20px" }}/>
            </div>

            <div className={Styles.cont}>
                <ul>
                    <li onClick={() => showDash()}>Home</li>
                    <li>Explore</li>
                    <li>Notification</li>
                    <li>Bookmarks</li> 
                    <li>Lists</li>
                    <li onClick={() => showProfile()}>Profile</li>
                    <li>More</li>
                </ul>
            </div>

            <div className={Styles.tweet} onClick={() => showDash()}>
                <p>Tweet</p>
            </div>

            <div className={Styles.tweet} style={{marginTop:"20px"}} onClick={() => logout()}>
               <p>Log Out</p>
            </div>
           
        </div>
    )
} 

export default Navigation




