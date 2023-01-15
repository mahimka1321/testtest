
 import React, {useRef} from "react";
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
      <input type="color" {...props} id="boxColorPage2"/>
      <input type="text" {...props}  ref={inputCP} onClick={editItemCP}/>
    </Container>
  );
};

 function ControlMenu2({   
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
}) {

     return (
        <div className='meaning-cl control_menu' id='meaningCl2'>
            <div className='input_con'>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>X</p>
                    {/* поле ввода значений по X */}
                    <input 
                    type="number" 
                    min="-9999" 
                    max="9999"  
                    className='input-controls' 
                    value={position2.x}
                    onChange={(e) => handleChange2(e, "x")}
                    onClick={editItemX2}
                    ref={inputX2}
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
                    value={position2.y}
                    onChange={(e) => handleChange2(e, "y")}
                    onClick={editItemY2}
                    ref={inputY2}
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
                    value={MeaningWnumber2}
                    onChange={onChangeW2}
                    onClick={editItemW2}
                    ref={inputW2}
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
                    value={MeaningHnumber2}
                    onChange={onChangeH2}
                    onClick={editItemH2}
                    ref={inputH2}
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
                    value={MeaningRnumber2}
                    onChange={onChangeR2}
                    onClick={editItemR2}
                    ref={inputR2}
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
                    value={MeaningBRnumber2}
                    onChange={onChangeBR2}
                    onClick={editItemBR2}
                    ref={inputBR2}
                    name="MeaningBR" 
                    id="MeaningBR"
                    />
                </div>
            </div>
            <div className='color_stoke-container'>
                <div className='container-stoke'>
                    <div style={{display:"flex", marginLeft:"-25px"}}>
                        {/* поле ввода значений по PX */}
                        <input 
                        className="ffg"
                        type="number" 
                        min="0" 
                        max="9999"  
                        value={MeaningPXnumber2}
                        onChange={onChangePX2}
                        onClick={editItemPX2}
                        ref={inputPX2}
                        name="MeaningPX" 
                        id="MeaningPX"
                        /> 
                        {/* поле ввода значений по S */}
                        <ColorPicker  value={MeaningSnumber2} onChange={onChangeS2}/>
                    </div>
                </div>
            </div>
        </div>  
     );
 };
 
 export default ControlMenu2;