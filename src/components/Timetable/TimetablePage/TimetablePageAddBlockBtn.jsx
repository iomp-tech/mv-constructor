import React from "react";

const TimetablePageAddBlockBtn = React.memo(({addBlock, text}) => {
    return (
        <button
            type="button"
            className="goods-page-add-block__btn"
            onClick={addBlock}
        >
            <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line y1="11.9292" x2="23" y2="11.9292" />
                <line x1="12" y1="0.751221" x2="12" y2="23.7512" />
            </svg>
            {text ? text : " Добавить блок"}
        </button>
    );
});

export default TimetablePageAddBlockBtn;
