import React from "react";
import {connect} from "react-redux";
import {FieldArray, reduxForm, getFormValues} from "redux-form";

import {TimetablePageBlock} from "../../";

let TimetablePageForm = ({values, handleSubmit, page, initialize}) => {
    React.useEffect(() => {
        initialize({page: page});
    }, []);

    return (
        <form className="goods-page-form" onSubmit={handleSubmit}>
            <FieldArray
                component={TimetablePageBlock}
                name="page"
                values={values}
            />
        </form>
    );
};

TimetablePageForm = connect((state) => ({
    values: getFormValues("page-form-timetable")(state),
}))(TimetablePageForm);

TimetablePageForm = reduxForm({
    form: "page-form-timetable",
})(TimetablePageForm);

export default TimetablePageForm;
