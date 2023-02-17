import React  , {useContext} from "react";
import  "./testic.scss";


let por = '343'
const ThemeContext = React.createContext(por);

function Testik() {

    const value = useContext(ThemeContext);
    console.log(value)

    return (
        <div className="dfd">
            <div className="cover">
                <div className="book">
                    <label className="book__page book__page--2"></label>
                    <h1 className="sdd">{value}</h1>
                </div>
            </div>
            <div className="qwer"></div>
        </div>
    );
};

export default Testik;