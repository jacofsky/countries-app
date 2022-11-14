import { Layout } from '../components/layouts/Layout';
import { ToolsBar } from '../components/ui/ToolsBar';
import { GetStaticProps } from 'next'
import { countryApi } from '../api';
import { Country } from '../interfaces';
import { useContext, useEffect } from 'react'
import { CountriesContext } from '../context';
import { CardList } from '../components/ui/CardList';

interface IProps {
  countries: Country[]
}

const HomePage = ({countries}:IProps) => { 

  const { setCountries } = useContext(CountriesContext)

  useEffect(() => {
    setCountries(countries)

  }, [])
  
  
  return (
    <Layout title='Home - Country App'>
      <ToolsBar/>
      <CardList/>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await countryApi.get<Country>('/all')

  return {
    props: {
      countries: data
    }
  }
}

export default HomePage