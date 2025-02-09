import React from 'react'

const Header = () => {
  return (
<div style={{
      backgroundColor: 'white',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      height: '8vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

    <img src="/logo.svg" alt="" className="h-[36px] w-[36px]" />
    <div style={{fontSize: '20px', fontWeight: 'bold', color: '#333'}}>NEW FACE</div>

</div>
  )
}

export default Header