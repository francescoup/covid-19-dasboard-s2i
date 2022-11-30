import React from 'react';
import SintomiCards from '../Components/Card/SintomiCards';
import Footer from '../Components/Footer/Footer';
import useTitle from '../CustomHook/useTitle';


const Sintomi = () => {
  useTitle('Possibili sintomi da contagio');

  return (
    <section className='main-content'>

      <SintomiCards/>
      <Footer/>
    
    </section>
  )
}

export default Sintomi
