                  
import React from "react";

import CanvasImgSlider from "./itemSlider/CanvasImgSlider";
import SwapRight from "./itemSlider/SwapRight";
import SwapLeft from "./itemSlider/SwapLeft";


function SliderOne({
    setPressed,
    styles,
    onScroll,
    styles2 ,
    setPressed1, 
    btnNeE1, 
    togglePressed1, 
    togglePressed2,
    setPressed2,
    styles3,
    togglePressed,
    pressed,  
    pressed2,    
    pressed1, 
    sizeMap,

    sumControlCanvasImgSlider, setSumControlCanvasImgSlider,
    sumControlSwapLeft, setSumControlSwapLeft,
    sumControlSwapRight, setSumControlSwapRight
}) {



    let ControlCanvasImgSlider
    let _CanvasImgSlider =   (
        <CanvasImgSlider
        divCan2Tg={divCan2Tg}
        styles3={styles3}
        togglePressed2={togglePressed2}
        setPressed2={setPressed2}
        pressed2={pressed2}
        />
    )


    let ControlSwapRight
    let _SwapRight =   (
        <SwapRight
        divCan1Tg={divCan1Tg}
        styles2={styles2}
        pressed1={pressed1}
        setPressed1={setPressed1}
        togglePressed1={togglePressed1}
        btnNeE1={btnNeE1}
        />
    )


    let ControlSwapLeft
    let _SwapLeft =   (
        <SwapLeft
        divCanTg={divCanTg}
        styles={styles}
        pressed={pressed}
        setPressed={setPressed}
        togglePressed={togglePressed}
        btnNeE1={btnNeE1}
        />
    )


    if(sumControlCanvasImgSlider !==0){ControlCanvasImgSlider = _CanvasImgSlider}
    if(sumControlSwapRight !==0){ControlSwapRight = _SwapLeft}
    if(sumControlSwapLeft !==0){ControlSwapLeft = _SwapRight}

    if(sumControlCanvasImgSlider !==1){ControlCanvasImgSlider= ``}
    if(sumControlSwapRight !==1){ControlSwapRight= ``}
    if(sumControlSwapLeft !==1){ControlSwapLeft= ``}


    let meaningCl = document.getElementById("meaningCl");
    let meaningCl1 = document.getElementById("meaningCl1");
    let meaningCl2 = document.getElementById("meaningCl2");
    let targetOne = document.getElementById("targetOne");
    let targetTwo = document.getElementById("targetTwo");
    let targetFree = document.getElementById("targetFree");
    let divCan = document.getElementById("divCan");
    let divCan1 = document.getElementById("divCan1");
    let divCan2 = document.getElementById("divCan2");

    function divCanTg() {
        meaningCl.classList.remove("control_menu"); targetOne.classList.add("active_nav-menu");
        meaningCl1.classList.add("control_menu"); targetTwo.classList.remove("active_nav-menu");
        meaningCl2.classList.add("control_menu"); targetFree.classList.remove("active_nav-menu");
        divCan.classList.toggle("active_cp-box");
        divCan1.classList.remove("active_cp-box");
        divCan2.classList.remove("active_cp-box");
    };
    function divCan1Tg() {
        meaningCl.classList.add("control_menu"); targetOne.classList.remove("active_nav-menu");
        meaningCl1.classList.remove("control_menu"); targetTwo.classList.add("active_nav-menu");
        meaningCl2.classList.add("control_menu"); targetFree.classList.remove("active_nav-menu");
        divCan1.classList.toggle("active_cp-box");
        divCan.classList.remove("active_cp-box");
        divCan2.classList.remove("active_cp-box"); 
    };
    function divCan2Tg() {  
        meaningCl.classList.add("control_menu"); targetOne.classList.remove("active_nav-menu");
        meaningCl1.classList.add("control_menu"); targetTwo.classList.remove("active_nav-menu");
        meaningCl2.classList.remove("control_menu"); targetFree.classList.add("active_nav-menu"); 
        divCan2.classList.toggle("active_cp-box");   
        divCan.classList.remove("active_cp-box");
        divCan1.classList.remove("active_cp-box"); 
    };

    return (
        <div className='container-slider'>
            <div style={sizeMap}>
                {ControlSwapLeft} 
                {ControlCanvasImgSlider}
                {ControlSwapRight}
            </div>
        </div>
    );
};

export default SliderOne;
