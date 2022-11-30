import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
import { useGlobalContext } from '../../Context';

const PieChartsVaccini = () => {
    const{anagraficaVaccini} =useGlobalContext();
    
    const case1 = anagraficaVaccini?.data?.reduce((total, el) => {
      return total + el.d1
    }, 0);
    const case2 = anagraficaVaccini?.data?.reduce((total, el) => {
      return total + el.d2
    }, 0);
    const case3 = anagraficaVaccini?.data?.reduce((total, el) => {
      return total + el.db1
    }, 0);
    const case4 = anagraficaVaccini?.data?.reduce((total, el) => {
      return total + el.db2
    }, 0);
    
  return <section className='pie-card'>
   
   <Doughnut
      data={{
      labels: ['Prima','Seconda', 'Terza', 'Quarta'],
      datasets: [{
        data:[case1, case2, case3, case4],
        backgroundColor: [
          '#a63069',
          '#96afb8',
          '#b7f485',
          '#f9f871',
        ],
        label: 'Infected',
        borderColor: ['#a63069',
        '#96afb8',
        '#b7f485',
        '#f9f871',],
        fill: false,
        cutout: '70%',
      },
      ],
      
    }}
    options={{
      maintainAspectRatio:false,
      plugins: {
          responsive:true,
          tooltip: {
            usePointStyle:true,
            titleColor: '#6b7280',
            backgroundColor: 'white',
            bodyColor:'#6b7280',
            borderColor: '#f8fafc',
            borderWidth: 1,
            padding: 16,
          },
          title: {
              display: true,
              align: 'start',
              text: 'Numero di Somministrazioni',
              color: 'white',
              padding: {
                top: 6,
                bottom: 10,
              },
              font: {
                size:16,
                family:'Montserrat',
                weight: 400,
              }
          },
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            
            labels: {
                border: 'rgb(255, 99, 132)',
                color: 'white',
                usePointStyle: true,
                boxWidth:15, 
            }
        }
      }
  }}
    />
</section>
    
}

export default PieChartsVaccini
