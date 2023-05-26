
import React from "react";
import SliderOne from "./SliderOne" 
import Toch from "./canvas-slider/Toch"

function Canvas({
    setPressed,
    styles,
    onScroll,
    styles2 ,
    setPressed1, 
    btnNeE1, 
    togglePressed1, 
    togglePressed2,
    setPressed2,
    pressed2,
    styles3,
    togglePressed,
    pressed,      
    pressed1, 
    sizeMap,


    numControlToch, setNumControlToch,
    sumControlCanvasImgSlider, setSumControlCanvasImgSlider,
    sumControlSwapLeft, setSumControlSwapLeft,
    sumControlSwapRight, setSumControlSwapRight
}) {


    let toos =
    (    
        <SliderOne 
            setPressed={setPressed} 
            styles={styles}
            onScroll={onScroll}
            styles2={styles2}
            setPressed1={setPressed1}
            btnNeE1={btnNeE1}
            togglePressed1={togglePressed1}
            togglePressed2={togglePressed2}
            setPressed2={setPressed2}
            styles3={styles3}
            togglePressed={togglePressed}
            pressed={pressed}
            pressed1={pressed1}
            pressed2={pressed2}
            sizeMap={sizeMap}

            sumControlCanvasImgSlider={sumControlCanvasImgSlider}
            sumControlSwapLeft={sumControlSwapLeft}
            sumControlSwapRight={sumControlSwapRight}
            setSumControlCanvasImgSlider={setSumControlCanvasImgSlider}
            setSumControlSwapLeft={setSumControlSwapLeft}
            setSumControlSwapRight={setSumControlSwapRight}
        />
    )

    let papa

    let i = 0

    if(i !== 0){
        toos =  papa
    }


    const toch = <Toch />
    let controlToch



    if(numControlToch !== 0)
    {
        controlToch = toch
    }

    return (
        <div 
            className='boxControl'
            onWheelCapture={onScroll}
            id='boxSliderOne'
        > 
            {/* блок по смене контента */}
            <div id="priem">
                {toos}
                {controlToch}
            </div>
        </div>
    );
};

export default Canvas;
