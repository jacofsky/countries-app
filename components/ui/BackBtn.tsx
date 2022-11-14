import { Button } from "@nextui-org/react"
import Link from "next/link"

const BackBtn = () => {
  return (
    <Link href='/'><Button css={{margin: '0 1.5vw', marginBottom: 30}} size="md">Back</Button></Link>
  )
}

export default BackBtn