
import React from 'react';

import NavMenuComponent from './menuNav/NavMenuComponent';
import ControlMenu from './menuColumns/menu_1/ControlMenu';
import ControlMenu1 from './menuColumns/menu_2/ControlMenu1';
import ControlMenu2 from './menuColumns/menu_3/ControlMenu2';
import ButtonSwap from './menuSwap/ButtonSwap';

import "./leftColumn.scss"

function LeftColumn({
    position,
    handleChange,
    editItemX,
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
    handleInput1,
    state1,
    MeaningPXnumber1,
    onChangePX1,
    editItemPX1,
    inputPX1,
    MeaningSnumber1,
    onChangeS1,
    Irot1, 
    setIrot1,

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



    numControlToch, setNumControlToch,
    sumControlCanvasImgSlider, setSumControlCanvasImgSlider,
    sumControlSwapLeft, setSumControlSwapLeft,
    sumControlSwapRight, setSumControlSwapRight, addPH, removePH ,
    addSL, removeSL, addSR, removeSR,
}) {

    function btnFunCheckCode() {
        let ContainerPopup = document.getElementById('ContainerPopup')
        document.getElementById('btnCheckCode').innerText  = 'Обновить'
        ContainerPopup.classList.add("active_popup")
    }

    return (
        // левая колонка
        <div className="container-main">    
            {/* главная левая колонка с настройками обьекта */}
            <div className="info-com-left column-cl">
                <div className="block_info-column">
                    <p className="txt_info-column">Компоненты</p>
                </div>
                {/* название компонента */}
                <div className="contauner_name-ct">
                    <p className="txt_name-ct">Слайдер №1</p>
                </div>
                {/* меню навигации по компонентам с холнта */}
                <NavMenuComponent 
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
                />
                {/* контейнер полей style */}
                <ControlMenu  
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
                />
                <ControlMenu1                  
                    state1={state1}  
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
                    Irot1={Irot1} 
                    setIrot1={setIrot1}
                    handleInput4={handleInput4} 
                    state4={state4} 
                    SvgControl={SvgControl} 
                    onChangeSvg={onChangeSvg}
                    editItemSvg={editItemSvg} 
                    inputSvg={inputSvg}
                />
                <ControlMenu2                  
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
                {/* кнопки скачать посмотреть */}
                <div className='btn_code-container'>
                    <button onClick={btnFunCheckCode} className='check_code cobe_btn' id='btnCheckCode'>Посмотреть код</button>
                    <button className='download_code cobe_btn' id='gfdd'>Скачать код</button>
                </div>
            </div>
            {/* меню с компонентами */}
            <ButtonSwap/>    
        </div>
    );
};

export default LeftColumn;
