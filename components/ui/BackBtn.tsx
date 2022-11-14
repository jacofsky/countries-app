import { Button } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/router"

const BackBtn = () => {

  const {push} = useRouter()

  const onClick = () => {
    push('/')
  }

  return (
    <Button onClick={onClick} css={{margin: '0 1.5vw', marginBottom: 30}} size="md">Back</Button>
  )
}

export default BackBtn