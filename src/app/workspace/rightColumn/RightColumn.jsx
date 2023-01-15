import React, {useEffect, useRef, useState} from 'react';

function RightColumn(props, handleInput4, state4) {
    // let txtSettings = document.getElementById('txtSettings')
    // txtSettings.classList.remove('txt_settings-active')
    
    // let storageBtnEr = JSON.parse(localStorage.getItem("btnNeEr"));
    // let [btnNeEr, setBtnNeEr] = useState(storageBtnEr || 1)
    // localStorage.setItem("btnNeEr", JSON.stringify(btnNeEr));
    
    // let storageBtnEr = JSON.parse(localStorage.getItem("schetRtM"));
    // let [schetRtM, setSchetRtM ] = useState(storageBtnEr || 1)
    // localStorage.setItem("schetRtM", JSON.stringify(schetRtM));
    
    
    useEffect(() => {
        let btnSettingsControl1 = document.getElementById("btnSettingsControl1")
        let svgSettingsControl1 = document.getElementById("svgSettingsControl1")
        let svgSettings1 = document.getElementById("svgSettings1")
        let txtSettingsControl1 = document.getElementById("txtSettingsControl1")
    
        let btnSettingsControl2 = document.getElementById("btnSettingsControl2")
        let svgSettingsControl2 = document.getElementById("svgSettingsControl2")
        let svgSettings2 = document.getElementById("svgSettings2")
        let txtSettingsControl2 = document.getElementById("txtSettingsControl2")
    
        let btnSettingsControl3 = document.getElementById("btnSettingsControl3")
        let svgSettingsControl3 = document.getElementById("svgSettingsControl3")
        let svgSettings3 = document.getElementById("svgSettings3")
        let txtSettingsControl3 = document.getElementById("txtSettingsControl3")
    
    btnSettingsControl1.addEventListener('click', function(){
        // setSchetRtM(schetRtM = 1)
        // if(schetRtM == 1){
        btnSettingsControl3.classList.remove('btn_settings-active')
        svgSettingsControl3.classList.remove('svg__settings_control-active')
        svgSettings3.classList.remove('svg_settings-active')
        txtSettingsControl3.classList.remove('txt_settings-active')
    
        btnSettingsControl2.classList.remove('btn_settings-active')
        svgSettingsControl2.classList.remove('svg__settings_control-active')
        svgSettings2.classList.remove('svg_settings-active')
        txtSettingsControl2.classList.remove('txt_settings-active')
    
        btnSettingsControl1.classList.add('btn_settings-active')
        svgSettingsControl1.classList.add('svg__settings_control-active')
        svgSettings1.classList.add('svg_settings-active')
        txtSettingsControl1.classList.add('txt_settings-active')
        //  }
    })
    
    btnSettingsControl2.addEventListener('click', function(){
        // setSchetRtM(schetRtM = 2)
        // if(schetRtM == 2){
        btnSettingsControl1.classList.remove('btn_settings-active')
        svgSettingsControl1.classList.remove('svg__settings_control-active')
        svgSettings1.classList.remove('svg_settings-active')
        txtSettingsControl1.classList.remove('txt_settings-active')
    
        btnSettingsControl3.classList.remove('btn_settings-active')
        svgSettingsControl3.classList.remove('svg__settings_control-active')
        svgSettings3.classList.remove('svg_settings-active')
        txtSettingsControl3.classList.remove('txt_settings-active')
    
        btnSettingsControl2.classList.add('btn_settings-active')
        svgSettingsControl2.classList.add('svg__settings_control-active')
        svgSettings2.classList.add('svg_settings-active')
        txtSettingsControl2.classList.add('txt_settings-active')
        // }
    })
    
    btnSettingsControl3.addEventListener('click', function(){
        // setSchetRtM(schetRtM = 2)
        // if(schetRtM == 3){
        btnSettingsControl1.classList.remove('btn_settings-active')
        svgSettingsControl1.classList.remove('svg__settings_control-active')
        svgSettings1.classList.remove('svg_settings-active')
        txtSettingsControl1.classList.remove('txt_settings-active')
    
        btnSettingsControl2.classList.remove('btn_settings-active')
        svgSettingsControl2.classList.remove('svg__settings_control-active')
        svgSettings2.classList.remove('svg_settings-active')
        txtSettingsControl2.classList.remove('txt_settings-active')
    
        btnSettingsControl3.classList.add('btn_settings-active')
        svgSettingsControl3.classList.add('svg__settings_control-active')
        svgSettings3.classList.add('svg_settings-active')
        txtSettingsControl3.classList.add('txt_settings-active')
        //  }
    })
    }, []);

    return (
        <div className="container-main">
            {/* меню изменений компонента */}
            <div className="info-com-right column-cl">
                {/* название компонента */}
                <div className="block_info-column">
                    <p className="txt_info-column">Стрелки</p>
                </div>
                {/* контейнер с кнопками */}
                <div className="box_btn-settings">
                    {/**/}
                    <button className="btn-settings btn_settings-active" onClick={props.plusClick1} id="btnSettingsControl1">
                        <span className="svg-settings-control svg__settings_control-active" id="svgSettingsControl1">
                            <svg className="svt_t_M0" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                <path
                                    className="svg-settings svg_settings-active"
                                    d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
                                    fill="white"
                                    fillOpacity="0.5"
                                    id="svgSettings1"
                                />
                            </svg>
                        </span>
                        <p className="txt-settings txt_settings-active" id="txtSettingsControl1">Стрелка №1 </p>
                    </button>
                    {/**/}
                    <button className="btn-settings" onClick={props.plusClick2} id="btnSettingsControl2">
                        <span className="svg-settings-control" id="svgSettingsControl2">
                            <svg className="svt_t_M0" width="15" height="21" viewBox="0 0 15 21" fill="none">
                                <path
                                    className="svg-settings"
                                    d="M13.8764 9.68911C14.4295 10.0882 14.4295 10.9117 13.8764 11.3109L1.58521 20.1813C0.923842 20.6586 0 20.186 0 19.3704L0 1.62959C0 0.813983 0.923841 0.341408 1.58521 0.818706L13.8764 9.68911Z"
                                    fill="white"
                                    fillOpacity="0.5"
                                    id="svgSettings2"
                                />
                            </svg>
                        </span>
                        <p className="txt-settings" id="txtSettingsControl2">Стрелка №2</p>
                    </button>
                    {/**/}
                    <button className="btn-settings" onClick={props.plusClick3} id="btnSettingsControl3">
                        <span className="svg-settings-control" id="svgSettingsControl3">
                            <svg className="svt_t_M0" width="22" height="24" viewBox="0 0 22 24" fill="none">
                                <path
                                    className="svg-settings"
                                    d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z"
                                    fill="white"
                                    fillOpacity="0.5"
                                    id="svgSettings3"
                                />
                            </svg>
                        </span>
                        <p className="txt-settings" id="txtSettingsControl3">Стрелка №3</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RightColumn;
