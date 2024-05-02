import { useEffect, useState } from "react";
import "./styles.css";




export default function RandomColor(){
    const[typeColor, setTypeColour] = useState("hex")
    const[colourCode, setColourCode] = useState("#000000");

    function handleHex () {
        setTypeColour("hex")
        handleRandomColor()
    }

    function handleRGB() {
        setTypeColour("rgb")
        handleRandomColor()
    }

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }

    function handleRandomColor () {
        if (typeColor === "hex") {
            const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColour = '#';

            for(let i=0; i<6; i++){
                hexColour += hex[randomColorUtility(hex.length)]
            }
            setColourCode(hexColour)
            //console.log(hexColour)
        } else if (typeColor === "rgb") {

            const r = randomColorUtility(256)
            const g = randomColorUtility(256)
            const b = randomColorUtility(256)

            setColourCode(`rgb(${r},${g},${b})`);
        }
    }

    useEffect(()=> {
        handleRandomColor();
    }, [typeColor])

    return(
        <div 
            style={{
                width: "100vw",
                height: "100vh",
                background: colourCode,
            }}
        >
            <button onClick= { ()=> handleHex()}>Create HEX Colour</button>
            <button onClick= { ()=> handleRGB()}>Create RGB Colour</button>
            <button onClick= { ()=> handleRandomColor()}>Generate Random Colour</button>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '60px',
                    marginTop: '50px',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    <h3>{typeColor === 'rgb' ? 'RGB Colour' : 'HEX Colour'}</h3>
                    <h3>{colourCode}</h3>
            </div>
        </div>
    )
}