import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {setTimetablePageCopy} from "../../../redux/actions/timetable";

const TimetablePageTop = ({title, page}) => {
    const dispatch = useDispatch();

    const {items, itemById} = useSelector(({timetable}) => timetable);

    const handlerGoodsCopyPage = (e) => {
        if (Object.keys(JSON.parse(e.target.value)).length) {
            dispatch(
                setTimetablePageCopy({
                    page: JSON.parse(e.target.value).page,
                    id: JSON.parse(e.target.value).id,
                })
            );
        } else {
            dispatch(
                setTimetablePageCopy({
                    page: [],
                    id: 0,
                })
            );
        }
    };

    return (
        <div className="goods-page-wrapper">
            <div className="goods-page-top">
                <Link to="/timetable" className="goods-page-top-arrow">
                    <svg
                        width="45"
                        height="20"
                        viewBox="0 0 50 25"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M50.0002 12.5007C50.0005 12.6754 49.9313 12.843 49.8076 12.9667L37.9397 24.8152C37.6778 25.0678 37.2604 25.0605 37.0074 24.799C36.7606 24.5439 36.7606 24.1395 37.0074 23.8845L48.4085 12.5007L37.0074 1.11824C36.7544 0.856768 36.7617 0.440031 37.0235 0.187449C37.2791 -0.0589638 37.6841 -0.0589638 37.9397 0.187449L49.8076 12.036C49.9309 12.1593 50.0001 12.3264 50.0002 12.5007Z" />
                        <path d="M50 12.4328C50 12.7942 49.5336 13.0872 48.9583 13.0872L1.0417 13.0872C0.466406 13.0871 0 12.7942 0 12.4328C0 12.0714 0.466406 11.7784 1.0417 11.7784L48.9584 11.7784C49.5336 11.7784 50 12.0714 50 12.4328Z" />
                    </svg>
                </Link>
                <p className="goods-page-top__title">
                    {title}{" "}
                    <span>(Количество блоков: {page ? page.length : 0})</span>
                </p>
            </div>
            <div className="goods-page-top-filters">
                <div className="goods-page-top-filters-copy-page">
                    <span className="goods-page-top-filters-copy-page__subtitle">
                        Копирование страниц
                    </span>
                    <div className="select">
                        <select
                            name="goodSelectCopyPage"
                            className="select__select"
                            onChange={(e) => handlerGoodsCopyPage(e)}
                        >
                            <option
                                value={JSON.stringify({})}
                                className="select__option"
                            ></option>
                            {items.map((item, index) =>
                                itemById.id !== item.id && item.page ? (
                                    <option
                                        value={JSON.stringify(item)}
                                        className="select__option"
                                        key={`select__option-${index}`}
                                    >
                                        {item.title}
                                    </option>
                                ) : null
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimetablePageTop;
