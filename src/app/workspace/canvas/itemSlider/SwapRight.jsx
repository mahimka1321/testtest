                  
import React from "react";

function SwapRight({
    divCan1Tg,
    styles2,
    pressed1,
    setPressed1,
    togglePressed1,
    btnNeE1,
}) {

    return (
        <div
            onClick={divCan1Tg}
            style={styles2}
            className={pressed1 ? "box_0-active" : "box-0"}
            onClickCapture={() => setPressed1(false)}
            onMouseDown={togglePressed1}
            id='divCan1'
            tabIndex={3}
        >
            <div >{btnNeE1}</div>
        </div>
    );
};

export default SwapRight;
