import { Header } from '@/components/Header/Header'
import './globals.css'
import { Footer } from '@/components/Footer/Footer'
import Head from 'next/head'

export const metadata = {
  title: 'Next test',
  description: 'Generated by create next app',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <title>
            Content
          </title>
        <meta
          name="description"
          content="Check out content"
        />
        <meta property="og:title" content="any" />
        <meta
          property="og:description"
          content="any"
        />
        <meta
          property="og:image"
          content="anylink"
        />
      </Head>
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}  
