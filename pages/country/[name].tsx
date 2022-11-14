import { Layout } from "../../components/layouts"
import { GetStaticPaths, GetStaticProps } from 'next'
import { countryApi } from "../../api"
import { Country } from "../../interfaces"
import { Grid, Text, Image, Row } from "@nextui-org/react"
import BackBtn from "../../components/ui/BackBtn"

interface IProps {
    country:Country
}

const CountryPage = ({country}:IProps) => { 


  console.log(country);

  
  
  return (
    <Layout title={`${country.name} - Country App`}>
        <BackBtn/>

        <Grid.Container>


            <Grid xl={6} lg={6} sm={12}>
                <Image src={country.flag} css={{borderRadius: 10}}/>
            </Grid>
            <Grid xl={6} lg={6} sm={12} direction='column' justify="center" css={{padding: '0 5vw'}}>
                <Text h2>{country.name}</Text>
                <Grid.Container xl={12} justify="space-between" css={{marginTop: '33px'}}>
                    <Grid>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Native: {country.nativeName}</Text>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Population: {country.population}</Text>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Region: {country.region}</Text>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Sub Region: {country.subregion}</Text>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Capital: {country.capital}</Text>
                    </Grid>
                    <Grid>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Top Level Domain: {country.topLevelDomain}</Text>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Currencies: {country.currencies?.map((c, i) => i > 0 ? `, ${c.name}` : `${c.name}`)}</Text>
                        <Text css={{fontWeight: 400, fontSize: '16px', color: '$colors.text'}}>Lenguages: {country.languages?.map((l, i) => i > 0 ? `, ${l.name}` : `${l.name}`)}</Text>
                    </Grid>
                </Grid.Container>

                <Row css={{marginTop: '80px'}} align='baseline'><Text>Border Countries: </Text> {country.borders?.map(c => <Text css={{padding: '5px 27px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)', fontSize: '14px', borderRadius: 3, backgroundColor: '$primary', marginLeft: '10px'}}>{c}</Text>)}</Row>
            </Grid>
        </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    let { data } = await countryApi<Country[]>('/all')
    
    
    const paths = data.map((c) => ({
        params: {name: `${c.name.toLocaleLowerCase()}`}
    }))

    return {
        paths,
        fallback: false
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({params}) => {

    const {name} = params as {name:string}

    const {data} = await countryApi<Country[]>(`/name/${name}`) 

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }    

    return {
        props: {
            country: data[0]
        },
        revalidate: 86400
    }
}

export default CountryPage