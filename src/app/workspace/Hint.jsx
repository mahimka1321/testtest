
import React, {useState} from "react";

import '../home/pages/page_3/howItWorks.scss';
import '../home/pages/page_3/moreDetailed/detailed.scss';
import '../animatic/animation.scss';
import '../color.scss';

import photo11 from '../assets/imegs/подсказка.png';
import photo12 from '../assets/imegs/подсказка2.png';

function Hint() {

    let [conImg, setConImg] = useState(0)
    let [photo000, setPhoto0] = useState()
    let [photo100000, setPhoto1] = useState(<img src={photo11} alt="" />)
    let [photo200000, setPhoto2] = useState(<img src={photo12} alt="" />)


    function kldds() { setConImg(conImg + 1) }
    function klddsSS() { setPhoto2120(photo200000120 = 1) }

    let [photo200000120, setPhoto2120] = useState(0)
    let [photo2000001, setPhoto21] = useState(`block`)
    let [photo20000012, setPhoto212] = useState(`none`)

    if(photo200000120 !=0) { photo2000001 = photo20000012 }
    if(conImg == 0 ) { photo000 =  photo100000 }
    if(conImg == 1 ) { photo000 =  photo200000 }
    if(conImg == 2 ) { photo2000001 = photo20000012 }

    let poco = {
        display: `${photo2000001}`,
        position: 'absolute',
        top: '50px',
        left: '150px',
        zIndex: '100',
        boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 50%)'
    }

    return (
        <div className='podskazka_container' style={poco}>  
            {photo000}
            <div className="container_btn-podskazka">
                <button onClick={kldds}>Далее</button>
                <button onClick={klddsSS}>Пропустить</button>
            </div>
        </div>
    )
}

export default Hint;