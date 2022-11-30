import React from 'react';
import { useGlobalContext } from '../Context';
import '../index.css';
import Sidebar from '../Components/Sidebar/Sidebar';
import { AiOutlineMenuFold} from 'react-icons/ai'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
import Loading from '../Components/Loading/Loading';
import Error from '../Components/Error/Error';


const HomePage = () => {
    const { isLoading, isError, modalMenu, isOpen } = useGlobalContext()
        
        
if(isLoading) {
  return <Loading/>
}

if(isError) {
  return <Error/>
}
      
  return (
    <section className='main-container'>
        <aside className={`${isOpen ? 'max-sm:translate-x-0 -translate-x-96' : 'max-sm:-translate-x-96 translate-x-0'} aside-container`}>
          <button onClick={modalMenu} className=' nav-link'>
            <AiOutlineMenuFold/>
          </button>
          <Sidebar/>
        </aside>
        <div className={`${!isOpen ? 'ml-[288px]' : 'ml-0'} max-sm:ml-0 side-container`}>
          <div className='main-contents'>
            <Navbar/>
            <Outlet/> 
          </div>
        </div>
    </section>
  )
}

export default HomePage
