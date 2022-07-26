import Head from 'next/head'
import Link from 'next/link'
export default function Header(){
    return(
        <>
        <Head>
        <title>Look What To Play</title>
        <meta name="description" content="Look What To Play" />
        <link rel="icon" href='../../public/images/favicon.ico' />
      </Head>
      <header>
      <Link href="/"><a className='text-center text-white text-2xl font-mono font-bold'><h1 className='pt-3'>Look What To Play</h1></a></Link>
      </header>
      </>
    )
}