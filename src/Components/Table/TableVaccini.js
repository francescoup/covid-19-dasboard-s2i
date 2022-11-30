import React from 'react';
import { useGlobalContext } from '../../Context';
import { v4 as uuidv4 } from "uuid";

const TableVaccini = () => {
    const {dosiVaccini} = useGlobalContext()
   
  return (
    <div className='vtable-container'>
        <h1>Dati Regionali</h1>
        <div className='table-contents'>
        <table className="table-header">
            <thead>
                <tr key={uuidv4()}>
                <th key={uuidv4()} className='table-line'>Regione</th>
                <th key={uuidv4()} className='table-line'>Dosi Consegnate</th>
                <th key={uuidv4()} className='table-line'>Dosi Somministrate</th>
                <th key={uuidv4()} className='table-line'>% Somministrazione</th>
                </tr>
            </thead>
            <tbody>
                {
                    dosiVaccini?.data?.map((el,i ) => {
                        return <tr key={uuidv4()}>
                            <td className='table-content' key={uuidv4()}>{el.reg}</td>
                            <td className='table-content' key={uuidv4()}>{el.dosi_consegnate}</td>
                            <td className='table-content' key={uuidv4()}>{el.dosi_somministrate}</td>
                            <td className='table-content' key={uuidv4()}>{el.percentuale_somministrazione} %</td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>
</div>
  )
}

export default TableVaccini
