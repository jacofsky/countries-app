import { Card, Grid } from '@nextui-org/react'
import React, { useContext } from 'react'
import { CountriesContext } from '../../context'
import { Country } from '../../interfaces'
import { CardCountry } from './'

export const CardList = () => {

  const { countriesShowing } = useContext(CountriesContext)
  
  return (
    <Grid.Container gap={2}>
      {
        countriesShowing.map(country => <CardCountry country={country}/>)
      }
    </Grid.Container>
  )
}
