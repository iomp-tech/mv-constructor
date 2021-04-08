import React from "react";
import {Field, reduxForm} from "redux-form";

import {RenderInput} from "../";

let LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <Field
                component={RenderInput}
                type="text"
                name="email"
                label="Email"
                className="login__input"
            />
            <Field
                component={RenderInput}
                type="password"
                name="password"
                label="Пароль"
                className="login__input"
            />

            <button className="login__btn btn">Отправить</button>
        </form>
    );
};

LoginForm = reduxForm({
    form: "login",
})(LoginForm);

export default LoginForm;
