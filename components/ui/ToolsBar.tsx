import { Input, Grid, useTheme } from "@nextui-org/react"
import { ChangeEvent, useContext, useState } from "react"
import { CountriesContext } from "../../context"
import { Region } from "../../interfaces"

export const ToolsBar = () => {

  const {theme} = useTheme()

  const {changeRegion, serachCountry} = useContext(CountriesContext)


  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    changeRegion(e.target.value as Region)
  }

  return (
    <Grid.Container gap={2} justify='space-between'>
        <Grid xs={6} md={4}>
            <Input bordered labelPlaceholder="Search for a country" fullWidth onChange={(e) => serachCountry(e.target.value)}/>
        </Grid>
        <Grid xs={6} md={2} alignContent='flex-end' style={{display: 'flex', justifyContent: 'end'}}>

            <select onChange={(e) => onChangeSelect(e)} style={{backgroundColor: theme?.colors.primary.value, width: '200px', borderRadius: '.75rem', color: theme?.colors.text.value, borderColor: theme?.colors.primary.value, padding: '0 10px'}}>
                <option value='All'>All countries</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </Grid>

    </Grid.Container>
  )
}
