
import React, {useEffect, useRef} from "react";
import Hoocks from "./hoocks/SliderHock"

function Title() {

    document.title = "Page - Workspace"

    const {
        htmlContainer, cssSlider, jsContainer
    }  = Hoocks();

    const iframe = useRef(null);

    useEffect(() => {
        iframe.current.srcdoc = 
        `
            ${htmlContainer}
            <style>${cssSlider}</style>
            <script>${jsContainer}</script>
        `;
    },[htmlContainer, cssSlider, jsContainer]);

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