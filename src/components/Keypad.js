import React from "react";

function Keypad() {

    const handlePassword = (e) => {
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={handlePassword}></input>
        </div >
    )
}

export default Keypad;