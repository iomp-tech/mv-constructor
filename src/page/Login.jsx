import React from "react";
import {useDispatch} from "react-redux";

import {sendLogin} from "../redux/actions/login";

import {LoginForm} from "../components";

import {DOMEN} from "../api";

const Login = () => {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(sendLogin(formData));
    };

    return (
        <div className="login">
            <div className="container">
                <div className="login-wrapper">
                    <a href="https://mastervision.su" className="login-logo">
                        <img
                            src={`${DOMEN}/public/storage/all/logo.svg`}
                            alt="MasterVision"
                            className="login__logo"
                        />
                    </a>

                    <LoginForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Login;
