import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {format} from "date-fns";

import {fetchGoodsById} from "../redux/actions/goods";
import {fetchUser} from "../redux/actions/user";

import {API_DOMEN} from "../api";

import {
    PreloaderPage,
    GoodsNotFound,
    GoodsPageTop,
    GoodsPageForm,
} from "../components/";

const GoodsEdit = ({match}) => {
    const dispatch = useDispatch();

    const {isLoadedById, itemById} = useSelector(({goods}) => goods);
    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchGoodsById(match.params.id));

        if (!isLogin) {
            dispatch(fetchUser());
        }
    }, []);

    const onSubmit = (dataForm) => {
        let formData = new FormData();

        const newObj = itemById;
        delete newObj.page;

        for (let key in dataForm) {
            if (key === "page") {
                for (let key2 in dataForm[key]) {
                    if (dataForm[key][key2].type === "feedback-photos") {
                        if (dataForm[key][key2].photos) {
                            for (let key3 in dataForm[key][key2].photos) {
                                formData.append(
                                    "imageFeedback-" + key3,
                                    dataForm[key][key2].photos[key3]
                                );
                            }
                        }
                    }

                    if (dataForm[key][key2].type === "feedback-videos") {
                        if (dataForm[key][key2].videos) {
                            for (let key3 in dataForm[key][key2].videos) {
                                formData.append(
                                    "imageFeedbackVideo-" + key3,
                                    dataForm[key][key2].videos[key3]
                                        .videoCodePhoto
                                );
                            }
                        }
                    }

                    if (dataForm[key][key2].type === "main2") {
                        if (parseInt(dataForm[key][key2].range)) {
                            delete dataForm[key][key2].date;
                        } else {
                            delete dataForm[key][key2].minDate;
                            delete dataForm[key][key2].maxDate;
                        }
                    }

                    if (dataForm[key][key2].type === "composition-product") {
                        if (!parseInt(dataForm[key][key2].formBoolean)) {
                            delete dataForm[key][key2].form_id_awo;
                            delete dataForm[key][key2].action;
                            delete dataForm[key][key2].formId;
                            delete dataForm[key][key2].formVc;
                        }
                    }
                }

                formData.append("page", JSON.stringify(dataForm[key]));
            }
        }

        for (let key in newObj) {
            if (newObj[key] !== "") {
                formData.append(key, newObj[key]);
            }
        }

        formData.append("_method", "PUT");

        const token = sessionStorage.getItem("success-token");

        axios
            .post(`${API_DOMEN}/goods/${match.params.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({data}) => {
                window.location.reload();
            })
            .catch(() => {
                return false;
            });
    };

    return (
        <div className="goods-page">
            <div className="container">
                {isLoaded ? (
                    isLogin ? (
                        isLoadedById ? (
                            Object.keys(itemById).length ? (
                                <>
                                    <GoodsPageTop {...itemById} />

                                    <GoodsPageForm
                                        onSubmit={onSubmit}
                                        page={itemById.page}
                                    />
                                </>
                            ) : (
                                <GoodsNotFound />
                            )
                        ) : (
                            <PreloaderPage />
                        )
                    ) : (
                        (window.location.href = "/login")
                    )
                ) : (
                    <PreloaderPage />
                )}
            </div>
        </div>
    );
};

export default GoodsEdit;
