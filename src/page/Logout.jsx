import React from "react";

import {PreloaderPage} from "../components/";

const Logout = () => {
    React.useEffect(() => {
        sessionStorage.removeItem("success-token");

        window.location.href = "/login";
    }, []);

    return <PreloaderPage />;
};

export default Logout;
