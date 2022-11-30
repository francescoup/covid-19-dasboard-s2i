import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
import { useGlobalContext } from '../../Context';

const ChartsVaccini = () => {
    const{anagraficaVaccini, theme} =useGlobalContext()
   
    
    
  return <section className='charts-card text-white'>
    { theme === 'light' ?
   <Bar

    data={{
      labels: anagraficaVaccini?.data?.map((el) => el.eta),
      datasets: [{
        data: anagraficaVaccini?.data?.map((el) => el.m),
        label: 'Uomini',
        
        borderColor: '#06b6d4',
      backgroundColor: '#06b6d4',
      fill: false,
      lineTension:0.4,
      },
      {
        data:anagraficaVaccini?.data?.map((el) => el.f),
        label: 'Donne',
        
        borderColor: '#b7f485',
      backgroundColor: '#b7f485',
      fill: false,
      lineTension:0.3,
      },  
      ],
    }}
    options={{
      scales: {
        x:{
          grid: {
            borderDash: [8, 4],
          },
        }
      },
      maintainAspectRatio: false,
      plugins: {
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
              padding: {
                top: 6,
                bottom: 20,
              },
              font: {
                size:16,
                family:'Montserrat',
                weight: 400,
              },
              text: 'Anagrafica Vaccini'
          },
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              color:'black',
                usePointStyle: true,
                boxWidth:15,  
            },
            
        }
      }
  }}
/> : 

<Bar

data={{
  labels: anagraficaVaccini?.data?.map((el) => el.eta),
  datasets: [{
    data:anagraficaVaccini?.data?.map((el) => el.m),
    label: 'Uomini',
    
    borderColor: '#f9f871',
  backgroundColor: '#f9f871',
  fill: false,
  lineTension:0.4,
  },
  {
    data: anagraficaVaccini?.data?.map((el) => el.f),
    label: 'Donne',
    
    borderColor: '#e2e8f0',
  backgroundColor: '#f1f5f9',
  fill: false,
  lineTension:0.4,
  },  
  ],
}}
options={{
  scales: {
    x:{
      grid: {
        borderDash: [8, 4],
      },
      ticks: {  
        color: "#f1f5f9",
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#f1f5f9",
      },
      
     
      beginAtZero:true,
    },
  },
  maintainAspectRatio: false,
  plugins: {
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
          color: '#f1f5f9',
          padding: {
            top: 6,
            bottom: 20,
          },
          font: {
            size:16,
            family:'Montserrat',
            weight: 400,
          },
          text: 'Anagrafica Vaccini'
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        fontColor:'white',
        labels: {
            color:'#f1f5f9',
            usePointStyle: true,
            boxWidth:15,  
        },
        
    }
  }
}}
/>}

</section>
    
}

export default ChartsVaccini
