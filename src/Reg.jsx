
import React, {useEffect, useState , useRef} from "react";
import { Link } from 'react-router-dom';
import regPhoto from './app/assets/imegs/reg.png';

import './app/color.scss';


function Reg() {

    document.title = "Reg";
    
    const [timer, setTimer] = useState(0) 

    const [login, setLogin] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 

    const [loginDirty, setLoginDirty] = useState(false) 
    const [emailDirty, setEmailDirty] = useState(false) 
    const [passwordDirty, setPasswordDirty] = useState(false) 

    const [loginError, setLoginError] = useState('Логин не может быть пустым') 
    const [emailError, setEmailError] = useState('Маил не может быть пустым') 
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым') 

    const [formValid, setFormValid] = useState(false) 


    const loginHandler = (e) => {
        setLogin(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 100) {
            setLoginError('Логин должен быть длинее 3 символов')
            if(!e.target.value){
                setLoginError('Логин не может быть пустым')
            }
        } else {
            setLoginError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Emil не коректен')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const rePsw = /^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d).*$/;
        if(!rePsw.test(String(e.target.value).toLowerCase())) {
            setPasswordError('Пароль должен содержать 1 цифру или букву')
            if(e.target.value.length < 5 || e.target.value.length > 100) {
                setPasswordError('Пароль должен быть длинее 5 символов')
            }
        } else {
            setPasswordError('')
        }

    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'login' :
                setLoginDirty(true)
                break
            case 'email' :
                setEmailDirty(true)
                break
            case 'psw' :
                setPasswordDirty(true)
                break
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        if (loginError || emailError || passwordError) {
            setFormValid(false)
        } else {
            let ches = document.getElementById('ches')
            ches.addEventListener('click', function(){
                setFormValid(true)
                let biba = document.getElementById("biba");
                let biba2 = document.getElementById("biba2");
                biba.classList.add("none_reg");
                biba2.classList.add("none_bg-i");
                setTimer(timer + 1);
                
            })
        }
    },[loginError, emailError, passwordError])

    function controlTimer()
    {
      let biba = document.getElementById("biba");
      biba.classList.add("none__reg_full");
    }
    if(timer != 0){
        setTimeout(controlTimer, 600);
    }

    let [titleInput, setTitleInput]  = useState("password")

    function trp1() {
      let ipp1 = document.getElementById("ipp1");
      let ipp2 = document.getElementById("ipp2");
      ipp1.classList.remove("iii1")
      ipp2.classList.add("iii2")
      setTitleInput(titleInput = "text")
    }

    function trp2() {
      let ipp1 = document.getElementById("ipp1");
      let ipp2 = document.getElementById("ipp2");
      ipp2.classList.remove("iii2")
      ipp1.classList.add("iii1")
      setTitleInput(titleInput = "password")
    }


    return (
        <div className="main__reg_page">
            <div className="box_reg" id="biba">
                <div>
                    <div className="input_reg">
                        <h1>Регистрация</h1>
                        <form 
                            name="forma" 
                            onSubmit={handleFormSubmit}
                        >
                            <input 
                                className="input_linet-reg"
                                type="text"  
                                name="login" 
                                id="login"
                                autoComplete="on"
                                pattern=".{5,}"   
                                required 
                                title="5 characters minimum"
                                value={login}
                                placeholder="Логин"
                                onBlur={e => blurHandler(e)}
                                onChange={e => loginHandler(e)}
                            />
                            {(loginDirty && loginError) && <div className="error">{loginError}</div>}
                            <input 
                                className="input_linet-reg"
                                type="email" 
                                value={email}
                                placeholder="Укажите эл. почту" 
                                name="email" 
                                autoComplete="on"
                                required
                                id="email" 
                                onBlur={e => blurHandler(e)}
                                onChange={e => emailHandler(e)}
                            />
                            {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                            <input 
                                className="input_linet-reg"
                                type={titleInput}
                                value={password}
                                placeholder="Пароль" 
                                name="psw"
                                title="6 characters minimum"
                                id="password" 
                                required
                                minLength="6" 
                                autoComplete="off"
                                onBlur={e => blurHandler(e)}
                                onChange={e => passwordHandler(e)}
                            /> 
                            {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
                            <div className="iii1" id="ipp1" onClick={trp1}></div>
                            <div className="" id="ipp2" onClick={trp2}></div>
                            <button 
                                id="ches" 
                                className="btn_reg" 
                                type="submit" 
                                disabled={formValid}
                            >
                                Зарегистрироваться
                            </button>
                        </form>
                    </div>
                </div>
                <div className="items_reg"></div>
            </div>
            <div>
                <div  className="opasiti_img" id="biba2"></div>
                <button className="btn__op_st-w"><Link to="/">Перейти на главное меню</Link></button>
                <img className="img_reg" src={regPhoto} />
            </div>
        </div>
    )
}

export default Reg;