import React from 'react';
import { useGlobalContext } from '../Context';
import Cards from '../Components/Card/Cards';
import Charts from '../Components/Charts/Charts';
import PieCharts from '../Components/PieCharts/PieCharts';
import Table from '../Components/Table/Table';
import MiniCard from '../Components/MiniCard/MiniCard';
import Footer from '../Components/Footer/Footer';
import useTitle from '../CustomHook/useTitle';


const Home = () => {
    const { newData } = useGlobalContext();
    useTitle('Andamento contagi')
    
  return (
    <section className='flex flex-wrap gap-[2.6%] gap-y-6'>

      {
          newData?.filter((_, i) => newData.length - i <=1).map((ele, i) => {
              return <Cards 
              key={i} 
              {...ele}
              />
          })
      }

        <Charts/> 
        <PieCharts/>
        <Table/>
        <MiniCard data={newData.filter((_, i) => newData.length - i <=1)}/>
        <Footer/>
    </section>
  )
}

export default Home
