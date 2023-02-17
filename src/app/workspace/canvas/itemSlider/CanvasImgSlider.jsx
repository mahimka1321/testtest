                  
import React from "react";

function CanvasImgSlider({
    divCan2Tg,
    styles3,
    pressed2,
    togglePressed2,
    setPressed2,
}) {

    return (
        <div>
                <div
                    onClick={divCan2Tg}
                    style={styles3}
                    className={ pressed2 ? "box_0-active rwerw": "rwerw box-0"}
                    onClickCapture={() => setPressed2(false)}
                    onMouseDown={togglePressed2}
                    id='divCan2'
                    tabIndex={2}
                ></div>
        </div>
    );
};

export default CanvasImgSlider;
