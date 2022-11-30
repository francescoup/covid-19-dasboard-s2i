import React from 'react';
import CountUp from 'react-countup';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineCoronavirus, MdOutlineLocalHospital, MdOutlineSick } from 'react-icons/md'
import { v4 as uuidv4 } from "uuid";
const MiniCard = (props) => {
    

  return (
    <section className='minicard-container'>
        <h1 className='minicard-title'>Andamento ricoveri</h1>
        <article className='minicard-content'>
            
            <div className='mini-card'>
                <div>
                    <MdOutlineCoronavirus className='card-icons'/>
                </div>
                <div>
                    <h1>Positivi al Coronavirus</h1>
                    {props.data.map((el, i) => {
                    return <h2 className='text-slate-400' key={uuidv4()}><CountUp start={0} end={el.totale_positivi} duration={1.75} separator={'.'}/></h2>
                })}
                </div>
            </div>
            <div className='mini-card'>
                <div>
                    <AiOutlineHome className='card-icons'/>
                </div>
                <div>
                    <h1>Isolamento Domiciliare</h1>
                {props.data.map((el, i) => {
                        return <h2 key={uuidv4()}><CountUp start={0} end={el.isolamento_domiciliare} duration={1.75} separator="."/></h2>
                    })} 
                </div>
            </div>
            <div className='mini-card'>
                <div>
                    <MdOutlineLocalHospital className='card-icons'/>
                </div>
                <div>
                    <h1>Ricoverati con sintomi</h1>
                {props.data.map((el, i) => {
                        return <h2 key={uuidv4()}><CountUp start={0} end={el.ricoverati_con_sintomi} duration={1.75} separator="."/></h2>
                    })}
                </div>
            </div>
            <div className='mini-card'>
                <div>
                    <MdOutlineSick className='card-icons'/>
                </div>
                <div>
                    <h1>Terapia Intensiva</h1>
                {props.data.map((el, i) => {
                        return <h2 key={uuidv4()}><CountUp start={0} end={el.terapia_intensiva} duration={1.75} separator="."/></h2>
                    })}
                </div>
            </div>
        </article>
    </section>
  )
}

export default MiniCard
