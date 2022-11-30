import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
import { useGlobalContext } from '../../Context';

const Charts = () => {
    const{newData, theme} =useGlobalContext()
   
    
    
  return <section className='charts-card text-white'>
    { theme === 'light' ?
   <Line

    data={{
      labels: newData.map(({ data }) => new Date(data).toLocaleDateString()),
      datasets: [{
        data: newData.map((el) => el.nuovi_positivi),
        label: 'Nuovi positivi',
        
        borderColor: '#f87171',
      backgroundColor: '#f87171',
      fill: false,
      lineTension:0.4,
      },
      {
        data: newData.map((el) => el.variazione_totale_positivi),
        label: 'Variazione',
        
        borderColor: '#06b6d4',
      backgroundColor: '#06b6d4',
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
        }
        },
        y:{
          grid: {
            borderDash: [8, 4],
        }
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
              padding: {
                top: 6,
                bottom: 20,
              },
              font: {
                size:16,
                family:'Montserrat',
                weight: 400,
              },
              text: 'Nuovi Casi'
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

<Line

data={{
  labels: newData.map(({ data }) => new Date(data).toLocaleDateString()),
  datasets: [{
    data: newData.map((el) => el.nuovi_positivi),
    label: 'Nuovi positivi',
    
    borderColor: '#f9f871',
  backgroundColor: '#f9f871',
  fill: false,
  lineTension:0.4,
  },
  {
    data: newData.map((el) => el.variazione_totale_positivi),
    label: 'Variazione',
    
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
          text: 'Nuovi Casi'
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

export default Charts
