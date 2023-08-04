import React, { useContext } from 'react'
import { sender } from './Store'

const List = (props) => {
    let {mode,setMode}=useContext(sender)
  return (
    <>
    <li className='nav-item'>
        <a className={`nav-link text-${mode?"light":"dark"}`} href={props.ID}>{props.name}</a>
    </li>
    </>
  )
}

export default List