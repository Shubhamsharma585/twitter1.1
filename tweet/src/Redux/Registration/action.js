 
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, TWEET_SUCCESS, FOLLOW_SUCCESS } from "./actiontype"
import Axios from "axios"
  



 

export const registering = (payload) => dispatch => {

    dispatch(registerrequest())

        Axios.post("http://localhost:2244/register", {
            ...payload
        })
        .then((res) => {
            //console.log(res.data)
           dispatch(registersuccess(res.data.user))
        })
        .catch((err) => {
            console.log(err)
            alert("User already registerd or data is not correct")
        })
    
}

 

export const loggingout = () => dispatch => {
    dispatch(logout())
}
 

export const SignInlogin = (payload) => dispatch => {

    dispatch(loginRequest())

   Axios.post("http://localhost:2244/login", {
      ...payload
   })
   .then((res) => {
       console.log(res.data.user);
       dispatch(loginSuccessfull(res.data.user))
   })
   .catch((err) => {
       console.log(err)
       alert("Invalid credential")
   })

}


const registerrequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload
    } 
}

const registersuccess = (payload) => {
     console.log(payload)
    return {
        type: REGISTER_SUCCESS, 
        payload
    }
}

const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

const loginSuccessfull = (payload) => {
   
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}


const logout = (payload) => {
    //    logout_success_localstorage()
    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}





export const tweet = (payload) => dispatch => {

     console.log(payload.tweet, payload.id)

   Axios.patch(`http://localhost:2244/users/${payload.id}`, {
       tweets: payload.tweet
   })
   .then((res) => {
       console.log(res.data.data);
       dispatch(tweetsuccess(res.data.data))
   })
   .catch((err) => {
       console.log(err)
       alert("Invalid credential")
   })

}


const tweetsuccess = (payload) => {
     console.log(payload)
    return {
        type: TWEET_SUCCESS, 
        payload
    }
}

 
export const follow1 = (payload) => dispatch => {
    //console.log(payload)

  Axios.patch(`http://localhost:2244/users/follow/${payload.mine}`, { 
        follow: payload.sec
  }) 
  .then((res) => {
      console.log(res.data.data);
      dispatch(followsuccess(res.data.data))
  })
  .catch((err) => {
      console.log(err)
      alert("Invalid credential")
  })

}


const followsuccess = (payload) => {
    console.log(payload)
   return {
       type: FOLLOW_SUCCESS, 
       payload
   }
}
