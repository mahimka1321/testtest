
import React, {useEffect, useRef} from "react";
import Hoocks from "./hoocks/SliderHock"
import WrapperHoocks from "./hoocks/WrapperHoocks"
import Control from "./hoocks/Control"

function Title() {

    document.title = "Page - Workspace"

    const {
        htmlContainer, cssSlider, jsContainer
    }  = Hoocks();

    const {
        htmlWrapper,cssWrapper,test
    }  = WrapperHoocks();

    const {
        setSika,sika
    } = Control();

    const iframe = useRef(null);


    let priemTitleHTML
    let priemTitleCSS
    let priemTitleJS

    if(sika === 'slider'){
        priemTitleHTML = htmlContainer
        priemTitleCSS = cssSlider
        priemTitleJS = jsContainer
    }

    if(sika === 'wrapper'){
        priemTitleHTML = htmlWrapper
        priemTitleCSS = cssWrapper
        priemTitleJS = priemTitleJS
    }



    useEffect(() => {
        iframe.current.srcdoc = 
        `
            ${priemTitleHTML}
            <style>${priemTitleCSS}</style>
            <script>${priemTitleJS}</script>
        `;
    },[priemTitleHTML, priemTitleCSS, priemTitleJS]);

    
    return (
        <div id="ContentNone">
            <div className="__animation">
                <div className="logo_anim">
                                    
                </div>
                <div className="line__loading"></div>
            </div>
            <iframe 
                className="Preview" 
                title="Preview" 
                scrolling="no" 
                ref={iframe}
            ></iframe>
        </div>
    )

    
}

export default Title;