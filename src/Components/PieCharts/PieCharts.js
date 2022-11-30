import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
import { useGlobalContext } from '../../Context';


const PieCharts = () => {
    const{newData} =useGlobalContext();
    const dataCases = newData.filter((_, i) => newData.length - i <=1);
    const case1 = dataCases.map((el) => el.ricoverati_con_sintomi);
    const case2 = dataCases.map((el) => el.terapia_intensiva);
   
    
  return <section className='pie-card'>
   
   <Doughnut
      data={{
      labels: ['Ricoverati','Terapia Intensiva'],
      datasets: [{
        data:[case1, case2],
        backgroundColor: [
          '#f9f871',
          '#00d1e5',
        ],
        label: 'Infected',
        borderColor: ['#f9f871',
        '#00d1e5',],
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
              text: 'Pazienti Ospedalizzati',
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

export default PieCharts
