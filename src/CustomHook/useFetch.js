import React, { useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [regioni, setRegioni] = useState([])
    const [newData, setNewData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setIsError(false)
            try {
                const {data} = await axios.get(url);
                setData(data);

                const nuoviDati = data.filter((_, i) => data.length - i <=8)
                setNewData(nuoviDati)
                

                const nuoveRegioni = Array.from(
                    new Set(data.map((el) => el.denominazione_regione))
                  );
                nuoveRegioni.unshift('Italia')
                setRegioni(nuoveRegioni);
                
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                
            }
            setIsLoading(false);
        })();
    }, [url]);
    
  return {data, newData, setNewData, regioni, isLoading, isError}
}

export default useFetch
