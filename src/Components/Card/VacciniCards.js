import React from 'react';
import CountUp from 'react-countup';
import { FaVirus } from 'react-icons/fa';
import { HiEmojiHappy, HiEmojiSad } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { useGlobalContext } from '../../Context';

const VacciniCards = () => {
  const {vaccini, isLoading, isError} = useGlobalContext()
  console.log(vaccini)
  const Moderna = vaccini?.data?.filter((ele, i) => ele.forn === 'Moderna').reduce((total, el) => {
    return total + el.numero_dosi}, 0);
  const Pfizer = vaccini?.data?.filter((ele, i) => ele.forn === 'Pfizer/BioNTech').reduce((total, el) => {
    return total + el.numero_dosi}, 0);
  const Astrazeneca = vaccini?.data?.filter((ele, i) => ele.forn === 'Vaxzevria (AstraZeneca)').reduce((total, el) => {
    return total + el.numero_dosi}, 0);

  

  return <>
 
    <article className='card'>
      <h2 className='card-subtitle'>Moderna</h2>
      <h1 className='card-content'><CountUp start={0} end={Moderna} duration={1.75} separator="."/></h1>
    </article>
    <article className='card'>
      <h2 className='card-subtitle'>Pfizer</h2>
      <h1 className='card-content'><CountUp start={0} end={Pfizer} duration={1.75} separator="."/></h1>
    </article>
    <article className='card'>
      <h2 className='card-subtitle'>Astrazeneca</h2>
      <h1 className='card-content'><CountUp start={0} end={Astrazeneca} duration={1.75} separator="."/></h1>
    </article>
    <article className='card'>
      <h2 className='card-subtitle'>Totale dosi</h2>
      <h1 className='card-content'><CountUp start={0} end={Moderna + Pfizer + Astrazeneca} duration={1.75} separator="."/></h1>
    </article>

  </>
}

export default VacciniCards
