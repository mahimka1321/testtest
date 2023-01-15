
import React, {useEffect} from "react";

function PopupCode({ 
    htmlContainer, 
    cssSlider,
    jsContainer,
    inputX
}) {
 
        useEffect(()=>{
            let BtnPopup = document.getElementById("BtnPopup")
            BtnPopup.addEventListener('click', function(){ 
                let ContainerPopup = document.getElementById('ContainerPopup')
                ContainerPopup.classList.remove("active_popup")
            })
        },[])

        function htmlActive(){
            let htmlBox = document.getElementById('htmlBox')
            let cssBox = document.getElementById('cssBox')
            let jsBox = document.getElementById('jsBox')

            htmlBox.classList.add('item_active')
            cssBox.classList.remove('item_active')
            jsBox.classList.remove('item_active')
        }
        function cssActive(){
            let htmlBox = document.getElementById('htmlBox')
            let cssBox = document.getElementById('cssBox')
            let jsBox = document.getElementById('jsBox')

            htmlBox.classList.remove('item_active')
            cssBox.classList.add('item_active')
            jsBox.classList.remove('item_active')
        }
        function jsActive(){
            let htmlBox = document.getElementById('htmlBox')
            let cssBox = document.getElementById('cssBox')
            let jsBox = document.getElementById('jsBox')

            htmlBox.classList.remove('item_active')
            cssBox.classList.remove('item_active')
            jsBox.classList.add('item_active')
        }

    return (
        <div className="container_popup" id="ContainerPopup">
            <div className="win_popup">
                <div className="header_popup">
                    <p><span>И</span>спользуемый <span>к</span>од</p>
                    <button className="btn_popup" id="BtnPopup">Закрыть</button>
                </div>
                <div className="content_popup">
                    <div className="editor-area">
                        {/* <Edit /> */}
                        <textarea
                            className="item item_active"
                            onChange={(e) => htmlContainer(e.target.value)}
                            ref={inputX}
                            spellCheck="false"
                            autoComplete="false"
                            id="htmlBox"
                            value={htmlContainer}
                            onClick={htmlActive}
                        ></textarea>
                        <textarea
                            className="item"
                            onChange={(e) => cssSlider(e.target.value)}
                            ref={inputX}
                            spellCheck="false"
                            autoComplete="false"
                            id="cssBox"
                            value={cssSlider}
                            onClick={cssActive}
                        ></textarea>
                        <textarea
                            className="item"
                            onChange={(e) => jsContainer(e.target.value)}
                            spellCheck="false"
                            autoComplete="false"
                            id="jsBox"
                            value={jsContainer}
                            onClick={jsActive}
                        ></textarea> 
                    </div>
                </div>
            </div>
        </div>
    );
};
 
 export default PopupCode;