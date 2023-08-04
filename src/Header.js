import React from 'react'

const Header = (props) => {
  return (
    <>
    <h2 className='text-warning text-center mb-5 'style={{paddingTop:"60px"}}>{props.title}</h2>
    </>
  )
}

export default Header