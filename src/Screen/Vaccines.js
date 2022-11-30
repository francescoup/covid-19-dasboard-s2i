import React from 'react';
import VacciniCards from '../Components/Card/VacciniCards';
import ChartsVaccini from '../Components/Charts/ChartsVaccini';
import PieChartsVaccini from '../Components/PieCharts/PieChartsVaccini';
import TableVaccini from '../Components/Table/TableVaccini';
import Footer from '../Components/Footer/Footer';
import useTitle from '../CustomHook/useTitle';


const Vaccines = () => {
  useTitle('Andamento campagna vaccinale')
  
  return (
    <section className='main-content'>

      <VacciniCards/>
      <ChartsVaccini/> 
      <PieChartsVaccini/>
      <TableVaccini/>
      <Footer/>

    </section>
  )
}

export default Vaccines
