import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../images/google-icon.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.init";
import { useEffect, useState } from "react";
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        errorEmail: "",
        erroPpassword: ""
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value}) 
            setErrors({...errors, email: ""})      
        } else {
            setErrors({...errors, email: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        } else {
            setErrors({...errors, password: "Minimum 6 characters!"});
            setUserInfo({...userInfo, password: ""})
        }
        
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password);
        
    }

       const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/";

       useEffect(() => {
           if (user) {
               navigate(from);
           }
       }, [user]);

       // show password icon toogle state
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='d-block mx-auto w-25 border rounded-3 p-3 mt-5'>
            <h2 className='text-center mb-3 heading'>Login</h2>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                <Form.Control type={showPass ? "text" : "password"} placeholder="Password" onChange={handlePasswordChange} />
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <p className="position-absolute top-0 end-0" onClick={() => setShowPass(!showPass)}>👁‍🗨</p>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <button className="btn loginBtn w-100">LOGIN</button>
            <p className='text-center my-3 mb-3'><span>Or login with</span></p>
            <button onClick={() => signInWithGoogle()} className=" btn googlebtn w-100 mb-3">
            <img src={googleIcon} alt="" />
                Google
            </button>
            <p>
                <span>Not a member?</span>
                <Link to='/signUp'>Sign up now</Link>
            </p>
        </Form>
        </div>
    );
};

export default Login;