import axios from 'axios'

import { User } from "../constants";

const {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} = User;


const BASE_URL = "http://localhost:5678/auth/"


export const signupUser = (data) => async (dispatch, getState)=> {
   

    dispatch({type: USER_SIGNUP_REQUEST})

    try{
        const response = await axios({
            method: "post",
            url: BASE_URL+"signup",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        })

        if(response.data.success){
            dispatch({type: USER_SIGNUP_SUCCESS, payload: response.data})
        }else{
            throw response.data.error
        }

    }catch(err){
        dispatch({type: USER_SIGNUP_FAILURE, error: err.response.data})
    }
}



