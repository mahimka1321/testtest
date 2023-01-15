
import React from "react";

import "./navMenuComponent.scss"

function NavMenuComponent(props) {


function targetOne() {

    let meaningCl = document.getElementById("meaningCl")
    let meaningCl1 = document.getElementById("meaningCl1")
    let meaningCl2 = document.getElementById("meaningCl2")
    meaningCl.classList.remove("control_menu") 
    meaningCl1.classList.add("control_menu")
    meaningCl2.classList.add("control_menu")

    let targetOne = document.getElementById("targetOne")
    let targetTwo = document.getElementById("targetTwo")
    let targetFree = document.getElementById("targetFree")
    targetOne.classList.add("active_nav-menu") 
    targetFree.classList.remove("active_nav-menu") 
    targetTwo.classList.remove("active_nav-menu")
}

function targetOne1() {

    let meaningCl = document.getElementById("meaningCl")
    let meaningCl1 = document.getElementById("meaningCl1")
    let meaningCl2 = document.getElementById("meaningCl2")
    meaningCl.classList.add("control_menu") 
    meaningCl2.classList.add("control_menu") 
    meaningCl1.classList.remove("control_menu")

    let targetOne = document.getElementById("targetOne")
    let targetTwo = document.getElementById("targetTwo")
    let targetFree = document.getElementById("targetFree")
    targetOne.classList.remove("active_nav-menu") 
    targetTwo.classList.add("active_nav-menu")
    targetFree.classList.remove("active_nav-menu")
}

function targetOne2() {

    let meaningCl2 = document.getElementById("meaningCl2")
    let meaningCl1 = document.getElementById("meaningCl1")
    let meaningCl = document.getElementById("meaningCl")
    meaningCl2.classList.remove("control_menu") 
    meaningCl.classList.add("control_menu") 
    meaningCl1.classList.add("control_menu")

    let targetOne = document.getElementById("targetOne")
    let targetTwo = document.getElementById("targetTwo")
    let targetFree = document.getElementById("targetFree")
    targetFree.classList.add("active_nav-menu") 
    targetTwo.classList.remove("active_nav-menu")
    targetOne.classList.remove("active_nav-menu")
}

const stylesPSpanSR = {
    marginLeft:'100px',
    fontWeight: '600',
    fontSize:'24px',
    marginTop :'-8px',
};
const stylesMSpanSR = {

    marginLeft:'20px',
    fontWeight: '600',
    fontSize:'24px',
    marginTop :'-8px',
};



    return (
        <div className="container_main-component">
            <p onClick={targetOne} id="targetOne">
                назад
                <span style={stylesPSpanSR} onClick={props.addSR} >+</span>
                <span style={stylesMSpanSR} onClick={props.removeSR}>-</span>
            </p>
            <p className="active_nav-menu" onClick={targetOne1} id="targetTwo">
                вперед
                <span style={stylesPSpanSR} onClick={props.addSL}>+</span>
                <span style={stylesMSpanSR} onClick={props.removeSL}>-</span>
            </p>
            <p onClick={targetOne2} id="targetFree">
                Фото
                <span style={stylesPSpanSR} onClick={props.addPH}>+</span>
                <span style={stylesMSpanSR} onClick={props.removePH}>-</span>
            </p>
            <p>
                test
                <span style={stylesPSpanSR}>+</span>
                <span style={stylesMSpanSR}>-</span>
            </p>
        </div>
    );
};

export default NavMenuComponent;