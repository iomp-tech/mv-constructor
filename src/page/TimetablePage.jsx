import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchUser} from "../redux/actions/user";

import {Header, TimetableList, PreloaderPage} from "../components";

const TimetablePage = () => {
    const dispatch = useDispatch();

    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        if (!isLogin) {
            dispatch(fetchUser());
        }
    }, []);

    return (
        <>
            {isLoaded ? (
                isLogin ? (
                    <>
                        <Header />

                        <TimetableList />
                    </>
                ) : (
                    (window.location.href = "/login")
                )
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default TimetablePage;
