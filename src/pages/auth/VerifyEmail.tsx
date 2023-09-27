import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BACKEND_URL } from "../../constants";

import axios from "axios";
import jwt_decode from "jwt-decode";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const token = useParams<{token? : string}>().token;

  const verifyEmailHandler = async (email: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/emailverify`,
        {email},
        config
      );
      if (res.data.success) {
        navigate("/login");
      }
    } catch (err: any) {
      console.log(err.message);
      navigate("/login");
    }
  }

  useEffect(() => {
    if (token) {
      const decoded_token: {email?: string, success?: boolean} = jwt_decode(token);
      if (decoded_token && decoded_token.email && decoded_token.success) verifyEmailHandler(decoded_token.email);
      else navigate("/login");
    }
  }, [token])

  return (
    <></>
  );
}
