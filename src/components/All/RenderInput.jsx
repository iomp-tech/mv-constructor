import React from "react";

const RenderInput = ({
    input,
    label,
    type,
    className,
    meta: {touched, error},
}) => {
    return (
        <div className={`${className ? className : null}`}>
            {type === "date" || type === "datetime-local" ? (
                <span
                    className={`input__label ${
                        touched && error ? "input__label_error" : null
                    }`}
                >
                    {label}
                </span>
            ) : null}
            <input
                {...input}
                type={type}
                placeholder={label}
                className={`input ${touched && error ? "input__error" : null}`}
            />

            {touched && error ? (
                <span className="input-span__error">{error}</span>
            ) : null}
        </div>
    );
};

export default RenderInput;
