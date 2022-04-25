import {useState} from "react";

const Colors = () => {
    const [color, setColor] = useState("red");
    const changeColor       = (col) => {
        setColor(col);
    }
    return (
        <div>
            <button onClick={() => changeColor("red")} style={{width: "5px", height: "16px", backgroundColor: "red"}}></button>
            <button onClick={() => changeColor("blue")} style={{width: "5px", height: "16px", backgroundColor: "blue"}}></button>
            <button onClick={() => changeColor("yellow")} style={{width: "5px", height: "16px", backgroundColor: "yellow"}}></button>
            <button onClick={() => changeColor("green")} style={{width: "5px", height: "16px", backgroundColor: "green"}}></button>
            <p>Last color clicked is <span style={{color: color}}>{color}</span></p>
        </div>
    );
}

export default Colors;