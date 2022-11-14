import { Button, Navbar as Nb, Spacer, Text, css } from "@nextui-org/react";
import { FaMoon, FaSun } from 'react-icons/fa';

export const Navbar = () => {


  return (
    <Nb maxWidth='fluid' css={{backgroundColor: '$colors.primary', width: "100%"}}>
      <Nb.Brand><Text h6 size={26}>Where in the world?</Text>
      <Spacer /></Nb.Brand>
      <Button css={{ display: 'flex', alignItems: 'center', boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.2)', backgroundColor: '$colors.primary'}}>
        <FaSun/> 
        <Text style={{marginLeft: 10}}> Light mode</Text>
      </Button>
    </Nb>
  )
}
