import {
    REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, TWEET_SUCCESS, FOLLOW_SUCCESS  } from "./actiontype"
import Axios from "axios"




const initstate = {
    object_id: "", 
    isloggedIn: false,
    isloggedOut: true,  
    isloading: false, 
    iserror: false,
    name: "",
    phone: "", 
    email: "",
    email_verified: false,
    image_url: "",
    password: "",
    tweets: [],
    following: [],
    follower: []
}


function regireducer(state = initstate, {type, payload}) {
     console.log(type,payload)

   switch(type)
   {
        case REGISTER_REQUEST: 
       { 
           return {
                   ...state,
                  isloading: true,
                  }
              }
          
        case REGISTER_SUCCESS: 
        {
            return {
                ...state,
                isloggedIn: true,
                isloggedOut: false, 
                isloading: false,
                iserror: false,
                object_id: payload._id,
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
                email_verified: false,
                image_url: "",
                password: payload.password,
                tweets: payload.tweets,
                following: payload.following,
                follower: payload.follower
            }
        }
        case LOGIN_REQUEST:
            {
                return {
                    ...state,
                   isloading: true
                }
            }
        
            
        case LOGIN_SUCCESS:
            {             
                return {
                    ...state,
                    isloggedIn: true,
                    isloggedOut: false, 
                    isloading: false,
                    object_id: payload._id,
                    name: payload.name,
                    phone: payload.phone,
                    email: payload.email,
                    image_url: "",
                    password: payload.password,
                    tweets: payload.tweets,
                    following: payload.following,
                    follower: payload.follower
                }
            }
        
        case LOGOUT_SUCCESS:
            {
             
                return {
                    ...state,
                    isloggedOut: true,
                    isloggedIn: false
                }
            }
            case TWEET_SUCCESS:
                {
                 
                    return {
                        ...state,
                        isloggedIn: true,
                        isloggedOut: false, 
                        isloading: false,
                        object_id: payload._id,
                        name: payload.name,
                        phone: payload.phone,
                        email: payload.email,
                        image_url: "",
                        password: payload.password,
                        tweets: payload.tweets,
                        following: payload.following,
                        follower: payload.follower
                    }
                }
                case FOLLOW_SUCCESS:
                    {
                     
                        return {
                            ...state,
                            isloggedIn: true,
                            isloggedOut: false, 
                            isloading: false,
                            object_id: payload._id,
                            name: payload.name,
                            phone: payload.phone,
                            email: payload.email,
                            image_url: "",
                            password: payload.password,
                            tweets: payload.tweets,
                            following: payload.following,
                            follower: payload.follower
                        }
                    }   
        
            default:
                return { 
                   ...state
                 }   
        

   }

}

export default regireducer;
