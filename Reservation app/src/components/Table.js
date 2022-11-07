import React from 'react';
import TableBox from "./TableBox";

const Table = ({boxes, setBoxSelected, boxSelected}) => {

    return (
        <div className="d-flex table flex-wrap">
            { boxes.map((x, i) => <TableBox item={x} key={i} index={i} setBoxSelected={setBoxSelected} boxSelected={boxSelected}/>)}
        </div>
    );
};

export default Table;