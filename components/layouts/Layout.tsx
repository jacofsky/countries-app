import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

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
            
        </nav>
        <main>
            {children}
        </main>
    </>
  )
}
