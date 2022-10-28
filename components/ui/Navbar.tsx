import { Button, Navbar as Nb, Spacer, Text } from "@nextui-org/react";
import { FaMoon, FaSun } from 'react-icons/fa';

export const Navbar = () => {


  return (
    <Nb css={{backgroundColor: '$colors.primary'}}>
      <Nb.Brand><Text h6 size={26}>Where in the world?</Text>
      <Spacer /></Nb.Brand>
      <Button style={{ display: 'flex', alignItems: 'center'}}>
        <FaSun/> 
        <Text style={{marginLeft: 10}}> Light mode</Text>
      </Button>
    </Nb>
  )
}
