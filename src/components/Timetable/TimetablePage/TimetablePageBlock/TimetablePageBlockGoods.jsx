import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {fetchGoods} from "../../../../redux/actions/goods";

import {TimetablePageAddBlockBtn, TimetablePageBlockGoodsItem} from "../../../";

const TimetablePageBlockGoods = React.memo(({fields}) => {
    const dispatch = useDispatch();

    const itemsGoods = useSelector(({goods}) => goods.items);

    React.useEffect(() => {
        if (!itemsGoods.length) {
            dispatch(fetchGoods());
        }
    });

    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <TimetablePageBlockGoodsItem
                    deleteBlock={deleteBlock}
                    key={`goods-page-subblock-${key}-${index}`}
                    keyProps={key}
                    index={index}
                    itemsGoods={itemsGoods}
                />
            ))}

            <div className="goods-page-subblock-btn">
                <TimetablePageAddBlockBtn
                    text="Добавить товар"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
});

export default TimetablePageBlockGoods;
