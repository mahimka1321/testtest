
 import React, {useRef, useState} from "react";
 import styled from "styled-components";

// настройка инпута колор пикер
const Container = styled.span`{
    display: inline-flex;
    align-items: center;
    width: 100px;
    padding: 3px 10px;
    border: 0.1px solid #bfc9d9;
    border-radius: 5px;
        input[type="color"]{
            margin-right: 0.5vw;
            -webkit-appearance: none;
            border: none;
            width: auto;
            height: auto;
            cursor: pointer;
            background: none;
            &::-webkit-color-swatch-wrapper {
                padding: 0;
                width: 13px;
                height: 13px;
        }
        &::-webkit-color-swatch{
            border: 1px solid #bfc9d9;
            border-radius: 0.2vw;
            padding: 0;
        }
    }
    input[type="text"]{
        border: none;
        width: 100%;
        font-size: 14px;  
        background: #2b2b2b;
        color: #ffffff;
        outline: none;
    }
}`;

const ColorPicker = props => {
const inputCP = useRef(); const editItemCP = () => {inputCP.current.select();};
  return (
    <Container>
      <input type="color" {...props} id="boxColorPage3"/>
      <input type="text" {...props}  ref={inputCP} onClick={editItemCP}/>
    </Container>
  );
};

 function ControlMenu1({    
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
    handleInput4, 
    state4, 
    SvgControl, 
    onChangeSvg,
    editItemSvg,
    inputSvg
})  {

    let controlBgArrow1 = JSON.parse(localStorage.getItem("BgArrow1"));
    let [visibleInvisibleBgArrow1, setVisibleInvisibleBgArrow1] = useState(controlBgArrow1 || 0);
    localStorage.setItem("BgArrow1", JSON.stringify(visibleInvisibleBgArrow1));

    // visible // invisible // bg arrow
    let invisibleArrow = "none";
    let visibleArrow = "block";

    let acceptsPosition1 = "";
    let acceptsPosition2 = "";

    if(visibleInvisibleBgArrow1 === 0){
        acceptsPosition1 = visibleArrow;
        acceptsPosition2 = invisibleArrow;
    };
    if(visibleInvisibleBgArrow1 === 1){
        acceptsPosition2 = visibleArrow;
        acceptsPosition1 = invisibleArrow;
    };

    function controlBgArrow3(){
        setIrot1(Irot1 = 1);
        setVisibleInvisibleBgArrow1(visibleInvisibleBgArrow1 = 1); 
    };
    function controlBgArrow4(){
        setIrot1(Irot1 = 0);
        setVisibleInvisibleBgArrow1(visibleInvisibleBgArrow1 = 0);
     };

    let bgArrow1 = {
        display: `${acceptsPosition1}`,
        margin: '0',
        padding: '0',
        marginTop: '-7px',
        marginLeft: '20px',
        fontSize: '24px'
    };

    let bgArrow2 = {
        display: `${acceptsPosition2}`,
        margin: '0',
        padding: '0',
        marginTop: '-7px',
        marginLeft: '20px',
        fontSize: '24px'
    };

     return (
        <div className='meaning-cl rrr' id='meaningCl1'>
            <div className='input_con'>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>X</p>
                    {/* поле ввода значений по X */}
                    <input 
                    type="number" 
                    min="-9999" 
                    max="9999"  
                    className='input-controls' 
                    value={position1.x}
                    onChange={(e) => handleChange1(e, "x")}
                    onClick={editItemX1}
                    ref={inputX1}
                    name="MeaningX" 
                    id="MeaningX"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>Y</p>
                    {/* поле ввода значений по Y */}
                    <input type="number" 
                    min="-9999" 
                    max="9999" 
                    className='input-controls' 
                    value={position1.y}
                    onChange={(e) => handleChange1(e, "y")}
                    onClick={editItemY1}
                    ref={inputY1}
                    name="MeaningY" 
                    id="MeaningY"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>W</p>
                    {/* поле ввода значений по W */}
                    <input 
                    type="number" 
                    min="0" 
                    max="9999" 
                    className='input-controls' 
                    value={MeaningWnumber1}
                    onChange={onChangeW1}
                    onClick={editItemW1}
                    ref={inputW1}
                    name="MeaningW" 
                    id="MeaningW"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>H</p>
                    {/* поле ввода значений по H */}
                    <input 
                    type="number" 
                    min="0" 
                    max="9999" 
                    className='input-controls' 
                    value={MeaningHnumber1}
                    onChange={onChangeH1}
                    onClick={editItemH1}
                    ref={inputH1}
                    name="MeaningH" 
                    id="MeaningH"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x' style={{paddingTop:"3px"}}>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13V0H1V8.41742C1.61283 8.14996 2.27611 8.00684 2.95107 8.00024C3.93993 7.99056 4.90945 8.27433 5.73703 8.81567C6.56461 9.357 7.21309 10.1316 7.60045 11.0415C7.86535 11.6637 8 12.3301 8 13H16V14H0V13ZM6.93408 13C6.93408 12.4729 6.82813 11.9486 6.61971 11.459C6.31493 10.7431 5.8047 10.1336 5.15354 9.7077C4.50238 9.28177 3.73955 9.05849 2.9615 9.06611C2.26958 9.07288 1.59327 9.26199 1 9.61223V13H6.93408Z" fill="white"/>
                    </svg>
                </p>
                    {/* поле ввода значений по R */}
                    <input 
                    type="number" 
                    min="-180" 
                    max="180"  
                    className='input-controls' 
                    value={MeaningRnumber1}
                    onChange={onChangeR1}
                    onClick={editItemR1}
                    ref={inputR1}
                    name="MeaningR" 
                    id="MeaningR"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x' style={{paddingTop:"3px"}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M14 1H7.5C3.91015 1 1 3.91015 1 7.5V14" stroke="white"/>
                    </svg>
                </p>
                    {/* поле ввода значений по BR */}
                    <input 
                    type="number" 
                    min="0" 
                    max="9999"  
                    className='input-controls'    
                    value={MeaningBRnumber1}
                    onChange={onChangeBR1}
                    onClick={editItemBR1}
                    ref={inputBR1}
                    name="MeaningBR" 
                    id="MeaningBR"
                    />
                </div>
            </div>
            <div className='color_stoke-container'>
                <div className='container-color'>
                    <div style={{display:"flex"}}> 
                        {/* поле ввода значений по C */}
                        <ColorPicker onChange={handleInput1} value={state1} />
                        <p
                        className="control_bg-items"
                        style={bgArrow1}
                        onClick={controlBgArrow3}
                        id="minusBgSt3"
                        >-</p>
                        <p
                        className="tototo control_bg-items"
                        style={bgArrow2}
                        onClick={controlBgArrow4}
                        id="plusBgSt3"
                        >+</p>
                    </div>
                </div>
                <div className='container-stoke'>
                    <div style={{display:"flex", marginLeft:"-25px"}}>
                        {/* поле ввода значений по PX */}
                        <input 
                        className="ffg"
                        type="number" 
                        min="0" 
                        max="9999"  
                        value={MeaningPXnumber1}
                        onChange={onChangePX1}
                        onClick={editItemPX1}
                        ref={inputPX1}
                        name="MeaningPX" 
                        id="MeaningPX"
                        /> 
                        {/* поле ввода значений по S */}
                        <ColorPicker  value={MeaningSnumber1} onChange={onChangeS1}/>
                    </div>
                </div>
                <p className="svg_text-cnt">SVG</p>
                <div style={{display:"flex", marginTop:"10px"}}>
                    <input 
                        type="number" 
                        min="0" 
                        max="9999" 
                        className='ffg' 
                        value={SvgControl} 
                        onChange={onChangeSvg}
                        onClick={editItemSvg}
                        ref={inputSvg}
                        name="MeaningW" 
                        id="MeaningW"
                    />
                    <ColorPicker onChange={handleInput4} value={state4} />
                </div>
            </div>
        </div>  
     );
 };
 
 export default ControlMenu1;