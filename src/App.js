import React from 'react'
import Color from './Color'
import Hex from './Hex'

export default function App() {
  const [radnomColor, setRandomColor] = React.useState(true)

  function hex() {
    setRandomColor(false)
    document.body.style.background = 'white'
  }

  function rgb() {
    setRandomColor(true)
    document.body.style.background = 'white'
  }

  let styles1 = {
    color: radnomColor ? 'rgb(72, 72, 77)' : '#A8A8A8',
    borderBottom: radnomColor ? 'none' : '2px solid #A8A8A8',

  }
  let styles2 = {
    color: radnomColor ? '#A8A8A8' : 'rgb(72, 72, 77)',
    borderBottom: radnomColor ? '2px solid #A8A8A8' : 'none',
  }

  return (
    <div>
      <nav className='nav'>
        <h1 className='nav-h1'>{`Random ${radnomColor ? `rgb` : `hex`} generator`}</h1>
          <div className='switch-generator'>
            <button className='switch-btn' onClick={hex} style={styles1}>Hex</button>
            <span className='slash'>|</span>
            <button className='switch-btn' onClick={rgb} style={styles2}>Rgb</button>
          </div>
      </nav>
      {radnomColor ? <Color /> : <Hex />}
    </div>
  )
}