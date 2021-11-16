import React from "react";
import {Field} from "redux-form";

import {RenderSelect} from "../../../";

const TimetablePageBlockGoodsItem = React.memo(
    ({deleteBlock, index, keyProps, itemsGoods}) => {
        return (
            <div className="goods-page-subblock">
                <div className="goods-page-block-delete">
                    <h2 className="goods-page-subblock__title">
                        Товар {parseFloat(index + 1)}
                    </h2>
                    <span
                        className="goods-page-block__delete"
                        onClick={() => deleteBlock(index)}
                    >
                        Удалить
                    </span>
                </div>

                <Field
                    component={RenderSelect}
                    name={`${keyProps}`}
                    optionText="title"
                    optionValue="id"
                    choices={itemsGoods}
                    className="goods-page-block__select"
                />
            </div>
        );
    }
);

export default TimetablePageBlockGoodsItem;
