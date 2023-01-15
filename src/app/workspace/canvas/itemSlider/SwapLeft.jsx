                  
import React from "react";

function SwapLeft({
    divCanTg,
    styles,
    pressed,
    setPressed,
    togglePressed,
    btnNeE1,
}) {

    return (
        <div
            onClick={divCanTg}
            style={styles}
            className={pressed ? "box_0-active" : "box-0"}
            onClickCapture={() => setPressed(false)}
            onMouseDown={togglePressed}
            id='divCan'
            tabIndex={1}
            >
                <div className="divic">{btnNeE1}</div>
        </div>
    );
};

export default SwapLeft;
