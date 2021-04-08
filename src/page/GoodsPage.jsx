import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchUser} from "../redux/actions/user";

import {Header, GoodsList, PreloaderPage} from "../components";

const GoodsPage = () => {
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

                        <GoodsList />
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

export default GoodsPage;
