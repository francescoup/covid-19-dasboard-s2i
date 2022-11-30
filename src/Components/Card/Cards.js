import React from 'react';
import CountUp from 'react-countup';
import { FaVirus } from 'react-icons/fa';
import { HiEmojiHappy, HiEmojiSad } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';

const Cards = ({data, deceduti, dimessi_guariti, nuovi_positivi, totale_casi}) => {
  return <>
 
    <article className='card'>
      <h2 className='card-subtitle'>Deceduti</h2>
      <h1 className='card-content'><CountUp start={0} end={deceduti} duration={1.75} separator="."/></h1>
    </article>
    <article className='card'>
      <h2 className='card-subtitle'>Guariti</h2>
      <h1 className='card-content'><CountUp start={0} end={dimessi_guariti} duration={1.75} separator="."/></h1>
    </article>
    <article className='card'>
      <h2 className='card-subtitle'>Nuovi casi</h2>
      <h1 className='card-content'><CountUp start={0} end={nuovi_positivi} duration={1.75} separator="."/></h1>
    </article>
    <article className='card'>
      <h2 className='card-subtitle'>Totale casi</h2>
      <h1 className='card-content'><CountUp start={0} end={totale_casi} duration={1.75} separator="."/></h1>
    </article>

  </>
}

export default Cards
