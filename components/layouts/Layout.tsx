import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui'

interface Props {
    title: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <nav>
            <Navbar/>
        </nav>
        <main style={{margin: '25px 5%'}}>
            {children}
        </main>
    </>
  )
}
