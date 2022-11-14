import { createContext, FC, PropsWithChildren, useState, Dispatch, useEffect } from 'react';
import { Country, Region } from '../interfaces';

interface ContextProps {
  setCountries: (countries: Country[]) => void
    countriesShowing: Country[]
    changeRegion: (region: Region) => void
    serachCountry: (region: string) => void

}

export const CountriesContext = createContext({} as ContextProps)

export const CountriesProvider:FC<PropsWithChildren> = ({children}) => {


    const [countries, setCountries] = useState<Country[] | []>([])
    const [countriesShowing, setCountriesShowing] = useState<Country[] | []>([])

    useEffect(() => {
      changeRegion('All')
    
    }, [countries])
    


    const changeRegion = (region:Region | 'All') => {
      if (region === 'All') {
        setCountriesShowing(countries) 
        return
      } 
      setCountriesShowing(countries.filter((c) => c.region === region))
    }

    const serachCountry = (country:string) => {
      if (country.trim().length > 0) {
        setCountriesShowing(countries.filter((c) => c.name.includes(country.trim())))
      } else {
        setCountriesShowing(countries)
      }
      
    }


    
    return (
      <CountriesContext.Provider value={{ 
        setCountries,
        countriesShowing,
        changeRegion,
        serachCountry
      }}>
          {children}
      </CountriesContext.Provider>
    )
}
