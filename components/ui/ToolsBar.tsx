import { Input, Grid, Spacer } from "@nextui-org/react"

export const ToolsBar = () => {
  return (
    <Grid.Container gap={2} justify='space-between'>
        <Grid xs={6} md={4}>
            <Input bordered labelPlaceholder="Search for a country" fullWidth/>
        </Grid>
        <Grid xs={6} md={2} alignContent='flex-end' style={{display: 'flex', justifyContent: 'end'}}>

            <select style={{backgroundColor: '$colors.primary', width: '200px', borderRadius: '.75rem', color: '$colors.text', borderColor: '$colors.primary'}}>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </Grid>

    </Grid.Container>
  )
}
