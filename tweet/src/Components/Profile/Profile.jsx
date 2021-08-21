import React from 'react'
import Styles from "./Profile.module.css"
import { useSelector, useDispatch } from "react-redux"

 

 
function Profile() 
{
 

    var tweets = useSelector((state) => state.regi.tweets);
    var name = useSelector((state) => state.regi.name);
    var following = useSelector((state) => state.regi.following);
    var follower = useSelector((state) => state.regi.follower);

    console.log(following, follower)


    return (
        <div className={Styles.prof}>
            <div className={Styles.cover}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6MrmQeZ89QNyVjyNdWSbx3KpOYX3dC5w9A&usqp=CAU" width="100%" height="100%" alt=""/>
            </div> 
            <div className={Styles.dp}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82uvF88qaHqCXfBdgT9cTds7JZGt-Z8yd6jRzu7ANSlJXk2bRQeC03gv9ftwy8QIB9ok&usqp=CAU" alt=""/>
            </div>
            <div className={Styles.details}>
                <p className={Styles.name}>{name}</p>
                <p className={Styles.usr}>Shubham@123</p>
                <p>{following.length}<span> Following</span>  {follower.length}<span> Follower</span></p>
            </div>
            <h4 className={Styles.tw}>Tweets</h4>
            <div className={Styles.tweets}>
                {tweets?.map((itm) => {
                    return <div className={Styles.tweet}>  
                        <h1>{itm}</h1>
                    </div>
                })}


            </div>

        </div>
    )
}

export default Profile
