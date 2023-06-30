import React, { useReducer } from 'react';
import AuthContext from './AuthContext.jsx';

const defaultValue = {
  userData: {},
  isAuth: false
}

const handleReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      userData: action.user,
      isAuth: true
    }
  }
  return defaultValue
}


const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(handleReducer, defaultValue);

  const loginHandler = (data) => {
    dispatch({ type: "LOGIN", user:data });
  }

  const registerHandler = () => {
    dispatch({ type: "REGISTER" });
  }

  const authContext = {
    userData: state.userData,
    isAuth: state.isAuth,
    login: loginHandler,
    register: registerHandler
  }

  
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider