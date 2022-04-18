import { useEffect, useState } from "react";
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import googleIcon from '../../images/google-icon.png';
import { auth } from "../../Firebase/firebase.init";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    // create User With Email And Password in react firebase hooks
    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //  handle email change fucntio
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };

    // hnadle password function
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    // hnadle confirm password function
    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    // handle sign up function
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/services";
       useEffect(() => {
           if (user) {
               navigate(from);
           }
       }, [user]);

    // show password icon toogle state
    const [showPass, setShowPass] = useState(false);
    const [showPassconfirm, setShowPassConfirm] = useState(false);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto border rounded-3 p-3 mt-5">
                <h2 className='text-center mb-3 heading'>Sign Up</h2>
        <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange} />
                {errors?.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                <Form.Control type={showPass ? "text" : "password"} placeholder="Password" onChange={handlePasswordChange} />
                {errors?.password && <p style={{color: 'red'}}>{errors.password}</p>}
                <p className="position-absolute top-0 end-0 mt-2 me-3" onClick={() => setShowPass(!showPass)}>👁‍🗨</p>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="position-relative">
                <Form.Control type={showPassconfirm ? "text" : "password"} placeholder="confirm-password"  onChange={handleConfirmPasswordChange} />
                <p className="position-absolute top-0 end-0 mt-2 me-3" onClick={() => setShowPassConfirm(!showPassconfirm)}>👁‍🗨</p>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I accept the Terms of Use & privacy policy" />
            </Form.Group>
            <button className="btn btn-main w-100">Sign Up</button>
            <p className='text-center my-3 mb-3'><span>Or SignUp with</span></p>
            <button className=" btn googlebtn w-100 mb-3">
                <img src={googleIcon} alt="" />
                Google
            </button>
            <p>
                <span>Already a member?</span>
                <Link to='/login'>Log In</Link>
            </p>
        </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;