import React from "react";

const RenderSelect = ({
    input,
    label,
    choices,
    className,
    optionValue,
    optionText,
}) => {
    return (
        <div className="select">
            {label && <span className="select__label">{label}</span>}
            <select
                {...input}
                className={`${className ? className : null} select__select`}
            >
                {choices.map((item, index) => (
                    <option
                        value={optionValue ? item[optionValue] : item.key}
                        className="select__option"
                        key={`select__option-${index}`}
                    >
                        {optionText ? item[optionText] : item.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RenderSelect;
