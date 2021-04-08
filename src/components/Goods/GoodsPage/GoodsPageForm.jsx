import React from "react";
import {connect} from "react-redux";
import {FieldArray, reduxForm, getFormValues} from "redux-form";

import {GoodsPageBlock} from "../../";

let GoodsPageForm = ({values, handleSubmit, page, initialize}) => {
    React.useEffect(() => {
        initialize({page: page});
    }, []);

    return (
        <form className="goods-page-form" onSubmit={handleSubmit}>
            <FieldArray
                component={GoodsPageBlock}
                name="page"
                values={values}
            />
        </form>
    );
};

GoodsPageForm = connect((state) => ({
    values: getFormValues("page-form-goods")(state),
}))(GoodsPageForm);

GoodsPageForm = reduxForm({
	form: "page-form-goods",
})(GoodsPageForm);

export default GoodsPageForm;
