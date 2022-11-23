import React, {useState} from 'react'
import Header from "./../components/Header.js"
import "./Login.css"

const initialState = {
    email: "",
    password: "",
}


export const Login = () => {
    const [state, setState] = useState(initialState)
    const [signUp, setSignUp] = useState(false);

    const {email, password} = state;

    const handleChange = (e) => {

    }

  return (
    <div className="login-container">
    <Header />
    </div>
  )
}
