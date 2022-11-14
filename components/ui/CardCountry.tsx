import { Card, Grid, Text } from '@nextui-org/react'
import Link from 'next/link'
import { Country } from '../../interfaces'

interface IProps {
    country: Country
}

export const CardCountry = ({country}:IProps) => {

  return (
    <Grid sm={12} md={6} xl={3}>
      <Link href={`/country/${country.name.toLocaleLowerCase()}`}>
          <Card isHoverable isPressable>
            <Card.Image src={country.flag}/>
              <Card.Body css={{justifyContent: 'flex-end'}}>
              <Text h2>{country.name}</Text>
              <div>
                <Text>Population: {country.population}</Text>
                <Text>Region: {country.region}</Text>
                <Text>Capital: {country.capital}</Text>
              </div>
              </Card.Body>
          </Card>
        </Link>
    </Grid>
  )
}
