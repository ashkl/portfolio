import { ColorModeScript } from '@chakra-ui/react'
import Head from "next/head"
import theme from "./theme"

export default function Layout({ children }: any) {
    return (
        <div>
            <Head>
                <title>ASSHWIN.M</title>
            </Head>
            <div>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <main>{children}</main>
            </div>
        </div>
    )
}