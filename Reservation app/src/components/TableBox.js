import React from 'react';

const TableBox = ({index, setBoxSelected, boxSelected, item}) => {

    const selectedCLass = index === boxSelected ? "box selected" : "box"

    return (
        <div>
            <div className={selectedCLass} style={{backgroundColor: item}} onClick={() => setBoxSelected(index)}></div>
        </div>
    );
};

export default TableBox;