import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillCaretDown, AiOutlineMenuFold } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useGlobalContext } from '../../Context';
import  man  from '../../img/man.png';
import ModalMenu from '../ModalMenu/ModalMenu';


const Navbar = () => {
  const{modalMenu, isOpen, Menu, theme, themeSwitch} = useGlobalContext()
  return (
    <nav className='header'>
      <div className='header-icons'>
        
        <button className='header-icon' onClick={modalMenu}>{isOpen ? <HiMenuAlt3/> : <AiOutlineMenuFold/> }</button>
        <button className='header-icon'onClick={themeSwitch}>{theme === 'light' ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}</button>
      </div>
      <div onClick={Menu} className='header-avatar'>
        <button className='avatar-icon'><img className='w-[35px]' src={man} alt='Avatar'/></button>
        <h1 className='hidden-text'>F. Mangione</h1>
        <AiFillCaretDown className='icons'/>
        <ModalMenu/>
      </div>
    </nav>
  )
}

export default Navbar
