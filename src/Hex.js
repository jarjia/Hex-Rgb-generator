import React from 'react'
import './style.css'

export default function Hex() {
    const [color, setColor] = React.useState('Your Hex code')

    let hexcodes = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    function randomColor() {
        return Math.floor(Math.random() * hexcodes.length)
    }
    
    function random() {
        setColor(prev => {
        prev = ''
        for(let i = 0; i < 6; i++) {
            prev += hexcodes[randomColor()]
        }
        document.body.style.background = '#' + prev
        return '#' + prev
        })
    }
    
    return (
        <div>
        <div className='cont'>
            <div className='hex'>
                <h1 className='hex-h1'>{color}</h1>
            </div>
            <div className='btn-div'>
                <button onClick={random} className='btn'>get Hex</button>
            </div>
        </div>
        </div>
    )
}