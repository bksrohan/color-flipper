import { useState } from "react"
function App() {
  const [color, setColor] = useState('#ffffff');

  const getRandomColor = () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
  };

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor)
  };

  const isColorDark = (hex) => {
    const r = parseInt(hex.substr(1,2), 16);
    const g = parseInt(hex.substr(3,2), 16);
    const b = parseInt(hex.substr(5,2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128
  };

  const textColor = isColorDark(color) ? '#ffffff' : '#000000';

  return (
    <div style={{ 
      height: '100vh',
      backgroundColor: color,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
    }}>
      <h1 style={{ color: textColor }}>Color Flipper</h1>
      <p style={{ color: textColor}}>Current Color: <strong>{color}</strong></p>
      <button 
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#333',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3 ease'
      }}
      >
      Flip the Color!</button>
    </div>
  )
}

export default App
