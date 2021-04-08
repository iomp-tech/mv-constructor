import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {fetchTimetable} from "../../redux/actions/timetable";

const TimetableSearch = () => {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(fetchTimetable(e.target.value));
    };

    return (
        <div className="goods-search">
            <input
                type="text"
                name="search"
                placeholder="Поиск"
                className="input goods-search__input"
                onChange={(e) => onChange(e)}
                onKeyPress={(e) => onChange(e)}
            />
        </div>
    );
};

export default TimetableSearch;
