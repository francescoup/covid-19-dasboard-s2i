import React from 'react';
import { useGlobalContext } from '../../Context';
import { v4 as uuidv4 } from "uuid";

const Table = () => {
    const {latestRegioni} = useGlobalContext()
   
  return (
    <section className='table-container'>
        <h1>Dati Regionali</h1>
        <div className='table-contents'>
        <table className="table-header">
            <thead>
                <tr key={uuidv4()}>
                <th key={uuidv4()} className='table-line'>Regione</th>
                <th key={uuidv4()} className='table-line'>Deceduti</th>
                <th key={uuidv4()} className='table-line'>Guariti</th>
                <th key={uuidv4()} className='table-line'>Totale casi</th>
                </tr>
            </thead>
            <tbody>
                {
                    latestRegioni.map((el,i ) => {
                        return <tr key={uuidv4()}>
                            <td className='table-content' key={uuidv4()}>{el.denominazione_regione}</td>
                            <td className='table-content' key={uuidv4()}>{el.deceduti}</td>
                            <td className='table-content' key={uuidv4()}>{el.dimessi_guariti}</td>
                            <td className='table-content' key={uuidv4()}>{el.totale_casi}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>
</section>
  )
}

export default Table
