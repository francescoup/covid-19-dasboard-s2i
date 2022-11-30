import React from 'react';
import { useGlobalContext } from '../../Context';
import { NavLink, Link } from 'react-router-dom';
import { FaVirus } from 'react-icons/fa';
import { TbVaccine } from 'react-icons/tb';
import { MdSick } from 'react-icons/md';
import { v4 as uuidv4 } from "uuid";


const Sidebar = () => {
    const { nuoveRegioni, filtraRegioni, selected} = useGlobalContext();

  return <>
    <NavLink to={'/'} className='sidebar-content'>
      <div className='sidebar-items'>
        <FaVirus className='sidebar-icons'/>
        <h1 className='item-color'>Covid 19 Dashboard</h1>
      </div> 
    </NavLink>
    <div className='sidebar-menu'>
      <div className='sidebar-scrollbar'>
            {
          nuoveRegioni.map((regione, i) => {
              return <Link key={uuidv4()} to={'/'}><h2 key={uuidv4()} className={`item-menu ${selected === i && 'activeLink'}`} onClick={() => filtraRegioni(regione, i)}>{regione}</h2></Link>
          })
        }
      </div>
    </div>
    <NavLink to={'/vaccini'} className='sub-item-menu'>
      <div className='sidebar-items'>
        <TbVaccine className='sidebar-icons'/>
        <h1 className='item-color'>Vaccini</h1>
      </div>
    </NavLink>
    <NavLink to={'/sintomi'} className='sub-item-menu'>
    <div className='sidebar-items'>
      <MdSick className='sidebar-icons'/>
      <h1 className='item-color '>Sintomi</h1>
    </div> 
    </NavLink>
  </>
}

export default Sidebar
