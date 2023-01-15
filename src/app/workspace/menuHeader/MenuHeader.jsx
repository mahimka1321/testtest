
import React from "react";
import { Link } from "react-router-dom";





function TopMenu({setPop,pop,setScroller,scroller,setPos}) {

    function btn1() {
        removeMove();
        removeZoom();
    };
    
    function btn2() {
        let btn3 = document.getElementById("btn3");
        let btn5 = document.getElementById("btn5");
        btn3.classList.remove("ropwei");
        btn5.classList.remove("ropwei");
        let moveBtn2 = document.getElementById("moveBtn2");
        moveBtn2.classList.toggle("ropwei");
        removeMove();
        removeZoom();
    };
    
    function btn3() {
        let moveBtn2 = document.getElementById("moveBtn2");
        let boxSliderOne = document.getElementById("boxSliderOne");
        let btn3 = document.getElementById("btn3");
        let btn5 = document.getElementById("btn5");
    
        moveBtn2.classList.remove("ropwei");
        btn3.classList.toggle("ropwei");
        btn5.classList.remove("ropwei");
        boxSliderOne.classList.add("cursor_grab");
        setPop(pop = 1);
        removeZoom();
    };
    
    function btn4() {    
        let moveBtn2 = document.getElementById("moveBtn2");
        let btn3 = document.getElementById("btn3");
        let btn5 = document.getElementById("btn5");
    
        moveBtn2.classList.remove("ropwei");
        btn3.classList.remove("ropwei");
        btn5.classList.remove("ropwei");
    
        let whatRu = 'ОК'; let whatEn = 'OK';
        let prom = prompt( 'Напишите "ОК" что бы подтвердить действие в збросе изменения', '' );
        if( prom === whatRu || prom === whatEn) {
            localStorage.clear();
            window.location.reload();
            window.Storage.removeItem("btnNeE");
            window.Storage.removeItem("posZ");
        } else { alert('Отменено') };
        removeMove();
        removeZoom();
    };
    
    function btn5() {
        let moveBtn2 = document.getElementById("moveBtn2");
        let btn3 = document.getElementById("btn3");
        let btn5 = document.getElementById("btn5");
        
        let divCan = document.getElementById("divCan"); 
        let divCan2 = document.getElementById("divCan1"); 
        let divCan1 = document.getElementById("divCan2"); 
    
        divCan.classList.toggle("cursor_zoom");
        divCan1.classList.toggle("cursor_zoom");
        divCan2.classList.toggle("cursor_zoom");
    
        moveBtn2.classList.remove("ropwei");
        btn3.classList.remove("ropwei");
        btn5.classList.toggle("ropwei");
        setScroller(scroller + 1);
        removeMove();
    };
    
    function btn6() {
        let moveBtn2 = document.getElementById("moveBtn2");
        let btn3 = document.getElementById("btn3");
        let btn5 = document.getElementById("btn5");
        moveBtn2.classList.remove("ropwei");
        btn3.classList.remove("ropwei");
        btn5.classList.remove("ropwei");
        removeMove();
        removeZoom();
    //    Rnone();
    };
    
    function removeMove() { 
        setPop(pop = 0);
    };
    
    function removeZoom() { 
        setScroller(scroller = 0);
        let divCan = document.getElementById("divCan"); 
        let divCan2 = document.getElementById("divCan1"); 
        let divCan1 = document.getElementById("divCan2"); 
    
        divCan.classList.remove("cursor_zoom");
        divCan1.classList.remove("cursor_zoom");
        divCan2.classList.remove("cursor_zoom");
    };
    



    // document.addEventListener('keydown', function(event) {
    //     if (event.ctrlKey && event.code === 'KeyR') {
    //     // windowReloadBtn.classList.toggle("ropwei")
    //     let whatRu = 'ОК'; let whatEn = 'OK';
    //     let prom = prompt( 'Напишите "ОК" что бы подтвердить действие в збросе изменения', '' );
    //         if( prom === whatRu || prom === whatEn) {
    //             window.location.reload()
    //         }else { alert('Отменено') }
    //     }
    //     let btn5 = document.getElementById("btn5");
    //     btn5.classList.remove("ropwei")
    //     let moveBtn2 = document.getElementById("moveBtn2")
    //     moveBtn2.classList.remove("ropwei")
    //     removeZoom()
    // });


    
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.code === 'KeyM') {  
            let moveBtn2 = document.getElementById("moveBtn2")
            let btn3 = document.getElementById("btn3");
            let btn5 = document.getElementById("btn5");
            moveBtn2.classList.remove("ropwei")
            btn5.classList.remove("ropwei")
            btn3.classList.add("ropwei")

    
            setPop(pop = 1)
            removeZoom()
            event.preventDefault();
        }
    });

    document.addEventListener('keydown', function(event){
      if (event.ctrlKey && event.code === 'KeyZ') {  
            let moveBtn2 = document.getElementById("moveBtn2")
            let btn3 = document.getElementById("btn3");
            let btn5 = document.getElementById("btn5");
            moveBtn2.classList.remove("ropwei")
            btn3.classList.remove("ropwei")
            btn5.classList.add("ropwei")
            
            setScroller(scroller + 1)
            setPop(pop = 0)
            removeMove()
            event.preventDefault();
        }
    });
    
    // Кнопка выделения обьекта (показ настрое (по нажанию на кнопку "С"))
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.code === 'KeyC') {
            let moveBtn2 = document.getElementById("moveBtn2")
            let btn3 = document.getElementById("btn3");
            let btn5 = document.getElementById("btn5");
            moveBtn2.classList.add("ropwei")
            btn3.classList.remove("ropwei")
            btn5.classList.remove("ropwei")

            setPop(pop = 0)

            let divCan = document.getElementById("divCan")
            divCan.addEventListener('click', function() {
                let meaningCl = document.getElementById("meaningCl")
                meaningCl.classList.add("meaning_cl-target") // toggle
            })
        event.preventDefault();
        }
    });

    
    document.addEventListener('keydown', function(event){
        if(event.ctrlKey && event.shiftKey && event.code === 'KeyS'){ 
            setPos({scale: 1 });
            event.preventDefault();
        };
    });
    
    if(pop >= 1){ pop = -1 }; 
    if(scroller >= 1){ scroller = -1 };



    
    // function Rnone()
    // {
    //     let ContentNone = document.getElementById('ContentNone');
    //     ContentNone.classList.add("none");
    // };

    return (
        <div className="container_main-topMemu">
            {/* контейнер*/}
            <div className="info-com-topMenu">
                {/* кнопка выхода в меню */}
                <button onClick={btn1} className="btn_top-memu move_btn-1 pointer" style={{position:'absolute', top:'0', left:'0'}}>
                    <Link className="link-btn pointer" to="/">
                        <svg className="svt_t_M0 pointer" style={{position:'absolute', top:'13px', right:'13px'}} viewBox="0 0 17 30" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 23V2.76316L9.76191 2H2V23H7ZM0 0H2H15H17V2V23V25V25.2632L7 30V25H2H0V23V2V0Z" fill="white"/>
                        </svg>
                    </Link>
                </button>
                <div className="info_btn-move active_btn-1 "><p>esc</p></div>
                {/* кнопка выделения обьектов */}
                <button onClick={btn2} id="moveBtn2" className="btn_top-memu move_btn-2 pointer" style={{position:'absolute', top:'0', left:'55px'}}>
                    <Link className="link-btn pointer" to="#">
                        <svg className="svt_t_M0 pointer" style={{position:'absolute', top:'13px', right:'13px'}} viewBox="0 0 30 28" fill="none">
                            <path d="M11.9538 24.7877L2.65846 2.1011L26.5969 10.9103L15.7444 13.8329L15.194 13.9811L15.0376 14.5027L11.9538 24.7877Z" stroke="white" strokeWidth="2"/>
                        </svg>
                    </Link>
                </button>
                <div className="info_btn-move active_btn-2"><p>ctrl + chift + c</p></div>
                {/* кнопка перемещения обьектов */}
                <button onClick={btn3}  id="btn3"  className="btn_top-memu move_btn-3 pointer" style={{position:'absolute', top:'0', left:'110px'}}>
                    <Link className="link-btn pointer" to="">
                        <svg className="svt_t_M0 pointer" style={{position:'absolute', top:'13px', right:'13px'}} viewBox="0 0 31 30" fill="none">
                            <g clipPath="url(#clip0_18_289)">
                                <path d="M10.4087 19.4682H8.97383C8.97383 19.4349 8.97308 12.1119 8.97176 11.95C8.93741 11.3696 8.40482 10.8928 7.76107 10.8928C7.12902 10.8928 6.59795 11.3589 6.55171 11.9552C6.54963 12.1545 6.54812 19.4229 6.54812 19.4682H5.11323C5.11323 16.6553 5.11455 11.9261 5.12172 11.8463C5.22193 10.5528 6.38223 9.53278 7.76126 9.53278C9.1669 9.53278 10.3285 10.5739 10.4055 11.9048C10.4087 11.9711 10.4087 19.3938 10.4087 19.4682Z" fill="white"/>
                                <path d="M10.3968 13.6352H8.96191C8.96191 11.7601 8.96191 2.4051 8.96889 2.3214C9.06967 1.02003 10.23 0 11.6098 0C13.016 0 14.1778 1.04256 14.2534 2.37201C14.2555 2.42907 14.257 9.90086 14.257 9.93413H12.8221C12.8221 9.90086 12.8208 2.54336 12.8201 2.41458C12.7865 1.83687 12.2539 1.36004 11.6099 1.36004C10.9779 1.36004 10.4461 1.82757 10.3998 2.42388C10.3981 2.63762 10.3968 13.5902 10.3968 13.6352Z" fill="white"/>
                                <path d="M21.9705 14.7057H20.5356C20.5356 14.6738 20.5349 8.72539 20.5328 8.55279C20.4992 7.96846 19.9681 7.49163 19.3242 7.49163C18.6914 7.49163 18.1603 7.95773 18.114 8.55279C18.112 8.71752 18.1099 13.0377 18.1099 13.0815H16.675C16.675 13.0364 16.675 8.54349 16.6841 8.44512C16.7835 7.15162 17.9438 6.13159 19.3242 6.13159C20.7304 6.13159 21.8914 7.17415 21.9671 8.50361C21.9699 8.55673 21.9705 12.4122 21.9705 14.7057Z" fill="white"/>
                                <path d="M18.1133 13.0815H16.6784C16.6784 13.0482 16.6771 5.72522 16.6756 5.56336C16.642 4.98439 16.1101 4.50756 15.4662 4.50756C14.8342 4.50756 14.3023 4.97366 14.2561 5.56997C14.2548 5.7533 14.2533 13.0364 14.2533 13.0815H12.8184C12.8184 12.3111 12.8184 5.55531 12.8253 5.46892C12.9263 4.16737 14.0866 3.14752 15.4662 3.14752C16.8732 3.14752 18.0342 4.18865 18.1099 5.51954C18.1127 5.58446 18.1133 13.0071 18.1133 13.0815Z" fill="white"/>
                                <path d="M15.5138 29.3091C9.76966 29.3091 5.09677 24.8813 5.09677 19.4376H6.53166C6.53166 24.131 10.5612 27.9492 15.5136 27.9492C19.7933 27.9492 23.516 25.1231 24.3932 21.2199C24.3932 20.4708 24.3953 13.9527 24.3932 13.7774C24.3604 13.1944 23.8285 12.7177 23.1846 12.7177C22.5518 12.7177 22.0207 13.1838 21.9745 13.7789C21.9463 14.1441 21.5821 14.4655 21.2345 14.411C20.7279 14.395 20.5898 14.1028 20.552 13.6805H20.5435C20.5449 13.6631 20.5464 13.646 20.5477 13.6301C20.5379 13.4866 20.5371 13.3312 20.5366 13.1666L20.6962 13.0073C21.0697 12.0431 22.0528 11.3578 23.1844 11.3578C24.5921 11.3578 25.7524 12.4004 25.8273 13.7311C25.8287 13.7537 25.8302 13.7803 25.8281 21.2905C25.8281 21.337 25.8232 21.3821 25.8134 21.4274C24.8286 25.9943 20.4964 29.3091 15.5138 29.3091Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_18_289">
                                <rect width="30.9264" height="29.3091" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </button>
                <div className="info_btn-move active_btn-3"><p>ctrl + m</p></div>
                {/* кнопка возвращения изменений */}
                <button onClick={btn4} className="btn_top-memu move_btn-4 pointer" style={{position:'absolute', top:'0', left:'165px'}} id='windowReloadBtn'>
                    <Link className="link-btn pointer" to="#">
                        <svg className="svt_t_M0 pointer" style={{position:'absolute', top:'13px', right:'12px', paddingRight: "2px"}} viewBox="0 0 35 28" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.154 13.6758L27.0254 13.6234L30.6151 20.0887L34.4194 13.7473L31.555 13.6993C31.5 11.1391 30.7437 8.64089 29.3657 6.47791C27.9339 4.23031 25.8903 2.43808 23.4751 1.31179C21.0598 0.185507 18.3733 -0.228043 15.7312 0.119736C13.089 0.467516 10.601 1.56218 8.55953 3.27509L9.4594 4.34759C11.2968 2.80596 13.536 1.82076 15.9139 1.50776C18.2918 1.19476 20.7097 1.56696 22.8834 2.58061C25.0571 3.59427 26.8963 5.20728 28.185 7.23011C29.4155 9.16172 30.0952 11.3904 30.154 13.6758ZM5.6374 21.0967C4.49943 19.1616 3.84537 16.9844 3.72551 14.75H0.602783L4.4999 8L8.39701 14.75H5.12775C5.24608 16.7347 5.83276 18.6671 6.8442 20.387C7.98268 22.323 9.61794 23.9195 11.5807 25.0113C13.5434 26.103 15.7623 26.6502 18.0076 26.5964C20.2529 26.5425 22.4429 25.8895 24.3511 24.7049L25.0895 25.8943C22.9693 27.2105 20.5359 27.9361 18.0412 27.996C15.5464 28.0558 13.081 27.4478 10.9002 26.2347C8.71933 25.0217 6.90238 23.2478 5.6374 21.0967Z" fill="white"/>
                        </svg>
                    </Link>
                </button>
                <div className="info_btn-move active_btn-4"><p>ctrl + shift + r</p></div>
                {/*zoom*/}
                <button onClick={btn5} id="btn5" className="btn_top-memu move_btn-5 pointer" style={{position:'absolute', top:'0', left:'220px'}} >
                    <Link className="link-btn pointer" to="#">
                        <svg className="svt_t_M0 pointer" style={{ marginTop:'5px'}}  width="25" height="25" viewBox="0 0 27 30" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.896 19.9724C14.1015 21.8002 18.2389 21.8106 21.6268 19.6518C26.4554 16.575 27.9332 10.2571 24.9276 5.54041C21.9221 0.823685 15.5713 -0.505759 10.7428 2.57102C5.91429 5.64779 4.43649 11.9657 7.44203 16.6824C7.95875 17.4933 8.57433 18.2041 9.26405 18.8096L0.672668 28.2601C0.301161 28.6687 0.331278 29.3012 0.739936 29.6727C1.14859 30.0442 1.78104 30.0141 2.15255 29.6054L10.8072 20.0853C10.8399 20.0493 10.8695 20.0116 10.896 19.9724ZM8.56038 15.9698C5.93929 11.8564 7.22806 6.34667 11.4389 3.66347C15.6498 0.98026 21.1882 2.13965 23.8093 6.25303C26.4304 10.3664 25.1416 15.8761 20.9307 18.5593C16.7199 21.2425 11.1815 20.0832 8.56038 15.9698Z" fill="white"/>
                        </svg>
                    </Link>
                </button>
                <div className="info_btn-move active_btn-5"><p>ctrl + shift + z</p></div>
                {/* кнопка станрт */}
                <button onClick={btn6} className="btn_top-memu move_btn-6 pointer" id="btn6" style={{position:'absolute', top:'0', right:'0'}}>
                    <Link className="link-btn pointer" to="/proto" target="mywindow" id="btnProto">
                        <svg className="svt_t_M0 pointer" style={{position:'absolute', top:'13px', right:'11px'}} viewBox="0 0 19 24" fill="none">
                            <path d="M17.1264 11.1848C17.6874 11.5835 17.6874 12.4165 17.1264 12.8152L17.7057 13.6303L17.1264 12.8152L3.07924 22.7969C2.41713 23.2674 1.5 22.794 1.5 21.9817V2.01827C1.5 1.20603 2.41712 0.73263 3.07924 1.20312L17.1264 11.1848Z" stroke="white" strokeWidth="2"/>
                        </svg>
                    </Link>
                </button>
                <div className="info_btn-move active_btn-6"><p>enter</p></div>
            </div>
        </div>
    );
};

export default TopMenu;