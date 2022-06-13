import React from 'react'

export default function Color() {
    const [rgb, setRgb] = React.useState('Your Rgb color')

    function rgbColor() {
        setRgb(prev => {
            prev = ''
            let random1 = Math.floor(Math.random() * 250)
            let random2 = Math.floor(Math.random() * 250)
            let random3 = Math.floor(Math.random() * 250)
            prev = `rgb(${random1}, ${random2}, ${random3})`
            document.body.style.background = prev
            return prev
        })
    }

    return (
        <div>
            <div className='cont'>
                <div className='hex'>
                    <h1 className='hex-h1'>{rgb}</h1>
                </div>
                <div className='btn-div'>
                    <button className='btn' onClick={rgbColor}>get Rgb</button>
                </div>
            </div>
        </div>
    )
}