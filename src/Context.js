import { useState, useContext, createContext, useEffect } from "react";
import useFetch from "./CustomHook/useFetch";


const AppContext = createContext();



const AppProvider = ({children}) => {
    const urlNazionali = `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json`;
    const urlRegioni = `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json`;
    const urlLatestRegioni = `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json`;
    const urlVaccini = `https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/consegne-vaccini-latest.json`
    const urlDosiVaccini = `https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json`;
    const urlAnagraficaVaccini = `https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json`;
    const {data, newData, setNewData, isLoading, isError} = useFetch(urlNazionali);
    const {data: dataRegioni} = useFetch(urlRegioni);
    const {data: latestRegioni} = useFetch(urlLatestRegioni);
    const {data: vaccini} = useFetch(urlVaccini);
    const {data: dosiVaccini} = useFetch(urlDosiVaccini)
    const {data: anagraficaVaccini} = useFetch(urlAnagraficaVaccini)
    
    // gestione classe active 

    const [selected, setSelected] = useState(0);

    // fine gestione classe active

    //gestione stati sidebar

    const [isOpen, setIsOpen] = useState(false);
    const modalMenu = () => {
      setIsOpen(!isOpen)
    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const Menu = () => {
      setIsModalOpen(!isModalOpen)
    }

    // fine gestione sidebar

    // gestione swith tema

    const [theme, setTheme] = useState('light');

    useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark');
      }else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme])

    const themeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark') 
    }

    // fine switch tema
    
    //array unico per i nomi regione

    const nuoveRegioni = Array.from(
        new Set(dataRegioni.map((el) => el.denominazione_regione))
      );
    nuoveRegioni.unshift('Italia')

    //fine array gestione regioni
   
    //funzione per filtrare i dati in base alla regione

    const filtraRegioni = (item, i) => {
      setSelected(i)
        //Se indico Italia ottengo dati su tutto il territorio nazionale
        if (item === "Italia") {
          setNewData(data.filter((_, i) => data.length -i <=8));
          
        } //filter Method per filtrare i dati regionali
        else {
          const regioniFilter = dataRegioni.filter((el) =>
            el.denominazione_regione === item)
            setNewData(regioniFilter.filter((_, i) => regioniFilter.length -i <=8));
            
        }
      };

    // fine gestione funzione
    

    return (
        <AppContext.Provider
        value={{
            data,
            nuoveRegioni,
            isLoading,
            isError,
            newData,
            dataRegioni,
            filtraRegioni,
            modalMenu,
            Menu,
            isModalOpen,
            isOpen,
            latestRegioni,
            theme,
            themeSwitch,
            vaccini,
            dosiVaccini,
            anagraficaVaccini,
            selected,
          }}
        >
            {children}
        </AppContext.Provider>
    )

};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext};