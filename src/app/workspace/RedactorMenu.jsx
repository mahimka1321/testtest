import React from "react";

import LeftColumn from "./left-column/LeftColumn";
import RightColumn from "./right-column/menu-slider/RightColumn";
import TopMenu from "./top-menu/MenuHeader";
import PopupCode from "./popup-menu/PopupCode"
import Canvas from "./canvas/Canvas"
import Wrapper from "./canvas/canvas-wrapper/Wrapper"
import Hoocks from "./hoocks/SliderHock"
import ControlMenuWrapper from "./left-column/menu-control-wrapper/ControlWrapperMenu_1"
import MenuControlHeader from "./left-column/menu-control-header/MenuControlHeader"
import HeaderHoock from "./hoocks/HeaderHoock"

import CanvasHeader from "./canvas/CanvasHeader"

import "./right-column/menu-slider/rightColumn.scss"
import "./top-menu/topMenu.scss"
import "./canvas/canvas.scss"
import "./popup-menu/popupCode.scss"
import "./color.scss"
import "../animations/animation.scss"

import "../../index.css"
import WrapperHoocks from "./hoocks/WrapperHoocks";
import Control from "./hoocks/Control";
import RightColumnWrapper from "./right-column/menu-wrapper/RightColumnWrapper";
import RightColumnHeader from "./right-column/menu-header/RightColumnHeader";

function RedactorMenu() {
    const {
        htmlContainer, 
        cssSlider, 
        jsContainer, 
        position, 
        handleChange, 
        editItemX, 
        styles, 
        inputX, 
        editItemY, 
        inputY, 
        MeaningWnumber, 
        onChangeW, 
        editItemW, 
        inputW, 
        MeaningHnumber, 
        onChangeH, 
        editItemH, 
        inputH, 
        MeaningRnumber, 
        onChangeR, 
        editItemR, 
        inputR, 
        MeaningBRnumber, 
        onChangeBR, 
        editItemBR, 
        inputBR, 
        handleInput, 
        state, 
        MeaningPXnumber, 
        onChangePX,
        editItemPX,
        inputPX,
        MeaningSnumber,
        onChangeS,
        Irot,
        setIrot,
        handleInput4,
        state4,
        SvgControl, 
        onChangeSvg, 
        editItemSvg, 
        inputSvg, 
        state1, 
        updateState1, 
        handleInput1, 
        position1, 
        handleChange1, 
        editItemX1, 
        inputX1, 
        editItemY1, 
        inputY1, 
        MeaningWnumber1, 
        onChangeW1, 
        editItemW1, 
        inputW1, 
        MeaningHnumber1, 
        onChangeH1, 
        editItemH1, 
        inputH1, 
        MeaningRnumber1, 
        onChangeR1, 
        editItemR1, 
        inputR1, 
        MeaningBRnumber1, 
        onChangeBR1, 
        editItemBR1, 
        inputBR1, 
        MeaningPXnumber1, 
        onChangePX1, 
        editItemPX1, 
        inputPX1, 
        MeaningSnumber1, 
        onChangeS1, 
        setIrot1, 
        Irot1, 
        position2, 
        handleChange2, 
        editItemX2, 
        inputX2, 
        editItemY2, 
        inputY2, 
        MeaningWnumber2, 
        onChangeW2, 
        editItemW2, 
        inputW2, 
        MeaningHnumber2, 
        onChangeH2, 
        editItemH2, 
        inputH2, 
        MeaningRnumber2, 
        onChangeR2, 
        editItemR2, 
        inputR2, 
        MeaningBRnumber2, 
        onChangeBR2, 
        editItemBR2, 
        inputBR2, 
        MeaningPXnumber2, 
        onChangePX2, 
        editItemPX2, 
        inputPX2, 
        MeaningSnumber2, 
        onChangeS2, 
        pressed, 
        setPosition, 
        setPop, 
        pop, 
        setScroller, 
        scroller, 
        setPos, 
        pos, 
        setPressed, 
        onMouseMove, 
        togglePressed, 
        sizeMap, 
        svg, 
        setPressed1, 
        styles2, 
        onScroll, 
        btnNeE1, 
        togglePressed1, 
        setPressed2, 
        onMouseMove2, 
        styles3, 
        togglePressed2,
        pressed1, 
        pressed2, 
        plusClick1, 
        plusClick2, 
        plusClick3, 
        btnNeE,



        numControlToch, setNumControlToch,
        sumControlCanvasImgSlider, setSumControlCanvasImgSlider,
        sumControlSwapLeft, setSumControlSwapLeft,
        sumControlSwapRight, setSumControlSwapRight,
        addPH ,removePH, addSL, removeSL, addSR ,removeSR,
    }  = Hoocks();

    const {addVertically, removeVertically, addHorizontals, removeHorizontals, gridY, setGridY, style__item_wrapper,
        WrapperW, onChangeWrapperW, inputWrapperW, editItemWrapperW,
        WrapperH, onChangeWrapperH, inputWrapperH, editItemWrapperH,
        WrapperMargin, onChangeWrapperMargin, inputWrapperMargin, editItemWrapperMargin,
        MeaningPXnumberWrapper, inputPXwrapper,onChangePXwrapper,onChangeSwrepper,editItemPXwrapper,MeaningSnumberWrapper
    , htmlWrapper,cssWrapper,test,MeaningBRnumberWrapper, setMeaningBRwrapper, setLocalStorageBRwrapper, onChangeBRWrapper, inputBRwrapper, editItemBRwrapper
} = WrapperHoocks();

    let scaleControler = Math.round(pos.scale * 1000) / 10 + ` %` 

const {
    setSika,sika
} = Control();

const {
    htmlHeader, cssHeader,addVerticallyLiHeader,numNavControl,removeVerticallyLiHeader,
    headerH,onChangeHeaderH,editItemHeaderH,inputHeaderH,
    headerLogoSize,onChangeHeaderLogoSize,editItemHeaderLogoSize,inputHeaderLogoSize,
    headerNavSize,onChangeHeaderNavSize,editItemHeaderNavSize,inputHeaderNavSize,
    headerNavMarginLeft,onChangeHeaderNavMarginLefte,editItemHeaderNavMarginLeft,inputHeaderNavMarginLeft,
    headerNavContainerRight,onChangeHeaderNavContainerRight,editItemHeaderNavContainerRight,inputHeaderNavContainerRight,
    header,headerContainer,logoA,li,liA
} = HeaderHoock();

    let canvasSliderContasinerVisible
    let leftMenuSliderContasinerVisible
    let rightMenuSliderContasinerVisible

    let canvasWrapperContasinerVisible
    let leftMenuWrapperContasinerVisible
    let rightMenuWrapperContasinerVisible

    let canvasHeaderContasinerVisible
    let leftMenuHeaderContasinerVisible
    let rightMenuHeaderContasinerVisible

    let canvasSliderControlActive = (
        <Canvas
        setPressed={setPressed} 
        styles={styles} 
        onMouseMove={onMouseMove} 
        togglePressed={togglePressed}
        sizeMap={sizeMap}
        svg={svg}
        setPressed1={setPressed1} 
        styles2={styles2} 
        onScroll={onScroll} pos={pos} 
        btnNeE1={btnNeE1} 
        togglePressed1={togglePressed1}
        setPressed2={setPressed2} 
        onMouseMove2={onMouseMove2} 
        styles3={styles3}  
        togglePressed2={togglePressed2}
        pressed={pressed} 
        pressed1={pressed1} 
        pressed2={pressed2}

        numControlToch={numControlToch}
        setNumControlToch={setNumControlToch}

        sumControlCanvasImgSlider={sumControlCanvasImgSlider}
        sumControlSwapLeft={sumControlSwapLeft}
        sumControlSwapRight={sumControlSwapRight}
        setSumControlCanvasImgSlider={setSumControlCanvasImgSlider}
        setSumControlSwapLeft={setSumControlSwapLeft}
        setSumControlSwapRight={setSumControlSwapRight}
        />
    );
    let leftMenuSliderControlActive = (
        <LeftColumn
        setSika={setSika} sika={sika}
numControlToch={numControlToch}
setNumControlToch={setNumControlToch}

sumControlCanvasImgSlider={sumControlCanvasImgSlider}
sumControlSwapLeft={sumControlSwapLeft}
sumControlSwapRight={sumControlSwapRight}
setSumControlCanvasImgSlider={setSumControlCanvasImgSlider}
setSumControlSwapLeft={setSumControlSwapLeft}
setSumControlSwapRight={setSumControlSwapRight}
addPH={addPH} removePH={removePH}
addSL={addSL} removeSL={removeSL}
addSR={addSR} removeSR={removeSR}

                position={position} 
                handleChange={handleChange} 
                editItemX={editItemX}
                inputX={inputX} 
                editItemY={editItemY} 
                inputY={inputY}
                MeaningWnumber={MeaningWnumber} 
                onChangeW={onChangeW} 
                editItemW={editItemW}
                inputW={inputW} 
                MeaningHnumber={MeaningHnumber} 
                onChangeH={onChangeH}
                editItemH={editItemH} 
                inputH={inputH} 
                MeaningRnumber={MeaningRnumber}
                onChangeR={onChangeR} 
                editItemR={editItemR} 
                inputR={inputR}
                MeaningBRnumber={MeaningBRnumber} 
                onChangeBR={onChangeBR} 
                editItemBR={editItemBR}
                inputBR={inputBR} 
                handleInput={handleInput} 
                state={state}
                MeaningPXnumber={MeaningPXnumber} 
                onChangePX={onChangePX} 
                editItemPX={editItemPX}
                inputPX={inputPX} 
                MeaningSnumber={MeaningSnumber} 
                onChangeS={onChangeS}
                Irot={Irot} 
                setIrot={setIrot}
                handleInput4={handleInput4} 
                state4={state4} 
                SvgControl={SvgControl} 
                onChangeSvg={onChangeSvg}
                editItemSvg={editItemSvg} 
                inputSvg={inputSvg}
                ////////////////////////////////////////
                ////////////////////////////////////////
                state1={state1} 
                updateState1={updateState1} 
                handleInput1={handleInput1}
                position1={position1} 
                handleChange1={handleChange1} 
                editItemX1={editItemX1}
                inputX1={inputX1} 
                editItemY1={editItemY1} 
                inputY1={inputY1}
                MeaningWnumber1={MeaningWnumber1} 
                onChangeW1={onChangeW1} 
                editItemW1={editItemW1}
                inputW1={inputW1} 
                MeaningHnumber1={MeaningHnumber1} 
                onChangeH1={onChangeH1}
                editItemH1={editItemH1} 
                inputH1={inputH1} 
                MeaningRnumber1={MeaningRnumber1}
                onChangeR1={onChangeR1} 
                editItemR1={editItemR1} 
                inputR1={inputR1}
                MeaningBRnumber1={MeaningBRnumber1} 
                onChangeBR1={onChangeBR1} 
                editItemBR1={editItemBR1}
                inputBR1={inputBR1}
                MeaningPXnumber1={MeaningPXnumber1} 
                onChangePX1={onChangePX1} 
                editItemPX1={editItemPX1}
                inputPX1={inputPX1} 
                MeaningSnumber1={MeaningSnumber1} 
                onChangeS1={onChangeS1}
                setIrot1={setIrot1} 
                Irot1={Irot1}
                ////////////////////////////////////////
                ////////////////////////////////////////
                position2={position2} 
                handleChange2={handleChange2} 
                editItemX2={editItemX2}
                inputX2={inputX2} 
                editItemY2={editItemY2} 
                inputY2={inputY2}
                MeaningWnumber2={MeaningWnumber2} 
                onChangeW2={onChangeW2} 
                editItemW2={editItemW2}
                inputW2={inputW2} 
                MeaningHnumber2={MeaningHnumber2} 
                onChangeH2={onChangeH2}
                editItemH2={editItemH2} 
                inputH2={inputH2} 
                MeaningRnumber2={MeaningRnumber2}
                onChangeR2={onChangeR2} 
                editItemR2={editItemR2} 
                inputR2={inputR2}
                MeaningBRnumber2={MeaningBRnumber2} 
                onChangeBR2={onChangeBR2} 
                editItemBR2={editItemBR2}
                inputBR2={inputBR2}
                MeaningPXnumber2={MeaningPXnumber2} 
                onChangePX2={onChangePX2} 
                editItemPX2={editItemPX2}
                inputPX2={inputPX2} 
                MeaningSnumber2={MeaningSnumber2} 
        onChangeS2={onChangeS2}
        />
    );
    let rightMenuSliderControlActive = (
        <RightColumn
        plusClick1={plusClick1} 
        plusClick2={plusClick2} 
        plusClick3={plusClick3}
        handleInput4={handleInput4} 
        state4={state4} 
        btnNeE={btnNeE}
        />
        );

    let canvasWrapperControlActive = (
        <Wrapper  
        addVertically={addVertically} 
        removeVertically={removeVertically} 
        addHorizontals={addHorizontals} 
        removeHorizontals={removeHorizontals}
        gridY={gridY} 
        setGridY={setGridY} 
        style__item_wrapper={style__item_wrapper} 
        test={test} sizeMap={sizeMap} onScroll={onScroll}
        />
    );
    let leftMenuWrapperControlActive = (
        <ControlMenuWrapper 
        WrapperW={WrapperW}setSika={setSika} sika={sika} onChangeWrapperW={onChangeWrapperW} inputWrapperW={inputWrapperW} editItemWrapperW={editItemWrapperW}
        WrapperH={WrapperH} onChangeWrapperH={onChangeWrapperH} inputWrapperH={inputWrapperH} editItemWrapperH={editItemWrapperH}
        WrapperMargin={WrapperMargin} onChangeWrapperMargin={onChangeWrapperMargin} inputWrapperMargin={inputWrapperMargin} 
        editItemWrapperMargin={editItemWrapperMargin}
        MeaningBRnumberWrapper={MeaningBRnumberWrapper}
        setMeaningBRwrapper={setMeaningBRwrapper}
        setLocalStorageBRwrapper={setLocalStorageBRwrapper}
        onChangeBRWrapper={onChangeBRWrapper}
        inputBRwrapper={inputBRwrapper}
        editItemBRwrapper={editItemBRwrapper}
        MeaningPXnumberWrapper={MeaningPXnumberWrapper}
        inputPXwrapper={inputPXwrapper}
        onChangePXwrapper={onChangePXwrapper}
        onChangeSwrepper={onChangeSwrepper}
        editItemPXwrapper={editItemPXwrapper}
        MeaningSnumberWrapper={MeaningSnumberWrapper}
        /> 
    );
    let rightMenuWrapperControlActive = (
        <RightColumnWrapper 
        addVertically={addVertically} 
        removeVertically={removeVertically} 
        addHorizontals={addHorizontals} 
        removeHorizontals={removeHorizontals}
        />
    );

    let canvasHeaderControlActive = (
        <CanvasHeader sizeMap={sizeMap} onScroll={onScroll}
        header={header}
        headerContainer={headerContainer}
        logoA={logoA}
        li={li}
        liA={liA}
        />
    );

    let leftMenuHeaderControlActive = (
        <MenuControlHeader
        sika={sika}
        setSika={setSika}
        headerH={headerH}
        onChangeHeaderH={onChangeHeaderH}
        editItemHeaderH={editItemHeaderH}
        inputHeaderH={inputHeaderH}
        headerLogoSize={headerLogoSize}
        onChangeHeaderLogoSize={onChangeHeaderLogoSize}
        editItemHeaderLogoSize={editItemHeaderLogoSize}
        inputHeaderLogoSize={inputHeaderLogoSize}
        headerNavSize={headerNavSize}
        onChangeHeaderNavSize={onChangeHeaderNavSize}
        editItemHeaderNavSize={editItemHeaderNavSize}
        inputHeaderNavSize={inputHeaderNavSize}
        headerNavMarginLeft={headerNavMarginLeft}
        onChangeHeaderNavMarginLefte={onChangeHeaderNavMarginLefte}
        editItemHeaderNavMarginLeft={editItemHeaderNavMarginLeft}
        inputHeaderNavMarginLeft={inputHeaderNavMarginLeft}
        headerNavContainerRight={headerNavContainerRight}
        onChangeHeaderNavContainerRight={onChangeHeaderNavContainerRight}
        editItemHeaderNavContainerRight={editItemHeaderNavContainerRight}
        inputHeaderNavContainerRight={inputHeaderNavContainerRight}
        />
    );

    let rightMenuHeaderControlActive = (
        <RightColumnHeader
        addVerticallyLiHeader={addVerticallyLiHeader}
        removeVerticallyLiHeader={removeVerticallyLiHeader}
        />
    );

    if(sika === 'slider') {
        canvasSliderContasinerVisible = canvasSliderControlActive
        leftMenuSliderContasinerVisible = leftMenuSliderControlActive
        rightMenuSliderContasinerVisible = rightMenuSliderControlActive
    }

    if(sika === 'wrapper') {
        canvasWrapperContasinerVisible = canvasWrapperControlActive
        leftMenuWrapperContasinerVisible = leftMenuWrapperControlActive
        rightMenuWrapperContasinerVisible = rightMenuWrapperControlActive
    }

    if(sika === 'header') {
        canvasHeaderContasinerVisible = canvasHeaderControlActive
        leftMenuHeaderContasinerVisible = leftMenuHeaderControlActive
        rightMenuHeaderContasinerVisible = rightMenuHeaderControlActive
    }


        React.useEffect(()=>{
            for (let i = 1; i < test; i++) {
                if(sika === 'wrapper') {
                    var clone = document.getElementById('thediv').cloneNode(true);
                    document.getElementById("containerWrapper").appendChild(clone);
                } else {}
            }

            for (let i = 1; i < numNavControl; i++) {
                if(sika === 'header') {
                    var clone = document.getElementById('theLiHeader').cloneNode(true);
                    document.getElementById("containerUlHeader").appendChild(clone);
                } else {}
            }
        },[])


    return (
        <div className="container-main anim-c main__containre_redactor">    
            {/* <Hint /> */}
            <PopupCode 
                htmlContainer={htmlContainer} 
                cssSlider={cssSlider} 
                jsContainer={jsContainer} 
                position={position} 
                handleChange={handleChange} 
                editItemX={editItemX} 
                inputX={inputX} 
                styles={styles} 
                htmlWrapper={htmlWrapper}
                cssWrapper={cssWrapper}
                setSika={setSika}
                sika={sika}
                htmlHeader={htmlHeader}
                cssHeader={cssHeader}
            />


            {leftMenuSliderContasinerVisible}
            {leftMenuWrapperContasinerVisible}
            {leftMenuHeaderContasinerVisible}


            <TopMenu
                setPressed={setPressed} 
                pressed={pressed} 
                setPosition={setPosition} 
                position={position}
                setPop={setPop} 
                pop={pop} 
                setScroller={setScroller} 
                scroller={scroller} 
                setPos={setPos}
            />
            <input 
                className="scale_info"
                type="submit" 
                min="25" 
                max="900"  
                value={scaleControler}
            />

            {canvasSliderContasinerVisible}  
            {canvasWrapperContasinerVisible} 
            {canvasHeaderContasinerVisible} 
 
            {rightMenuSliderContasinerVisible}
            {rightMenuWrapperContasinerVisible}
            {rightMenuHeaderContasinerVisible}
           
        </div>
    );
};

export default RedactorMenu;