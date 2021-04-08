import React from "react";

import {Link, NavLink} from "react-router-dom";

import {DOMEN} from "../../api";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="https://iomp.ru" className="header-logo">
                        <img
                            src={`${DOMEN}/public/storage/all/logo.svg`}
                            alt="IOMP"
                            className="header__logo"
                        />
                    </a>
                    <div className="header-menu">
                        <NavLink
                            className="header-menu__link"
                            activeClassName="header-menu__link_active"
                            to="/goods"
                        >
                            Товары
                        </NavLink>
                        <NavLink
                            className="header-menu__link"
                            activeClassName="header-menu__link_active"
                            to="/timetable"
                        >
                            Мероприятия
                        </NavLink>
                    </div>
                    <Link to="/logout" className="header__link">
                        Выйти
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
