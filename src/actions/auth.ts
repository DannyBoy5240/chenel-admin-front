import axios from "axios";

import { AnyAction } from "redux";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "../actions/types";
import setAuthToken from "../utils/setAuthToken";

import { BACKEND_URL } from "../constants";

// Load User
export const loadUser = () => async (dispatch: any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  // try {
  //   const res = await axios.get("/api/auth");
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res.data,
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: AUTH_ERROR,
  //   });
  // }
};

// Register User
// export const register = (data: any) => async (dispatch: any) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ name, email, password });

//   try {
//     const res = await axios.post("/api/users", body, config);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data,
//     });

//     dispatch(loadUser());
//   } catch (err: any) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       // errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
//       console.log(errors.msg);
//     }

//     dispatch({
//       type: REGISTER_FAIL,
//     });
//   }
// };

// Login User
export const login =
  (email: any, password: any): any =>
  async (dispatch: any): Promise<any> => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email: email.toLowerCase(), password });
    try {
      const res = await axios.post(`${BACKEND_URL}/users/signIn`, body, config);
      if (res.data.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data,
        });
      }
      return res.data;
      // dispatch(loadUser());
    } catch (err: any) {
      const errors = err.response.data.errors;
      if (errors) {
        console.log(errors.msg);
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }

    return { success: false, message: "error occurs" };
  };

// Logout / Clear Profile
export const logout = () => ({ type: LOGOUT });
