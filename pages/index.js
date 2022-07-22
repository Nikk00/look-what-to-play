import Header from '/pages/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Logo from '/public/images/logo-nl.png'
import React from 'react-dom';
function Home({ posts }) {
    return(
      <div className={styles.container}>
        <Header></Header>
        
        <main className={styles.main}>
              
          <div className='grid lg:grid-cols-3 gap-4 justify-items-center md:grid-cols-2 sm:grid-cols-1'>
            {posts.map(({id, title, genre, thumbnail, publisher, developer, release_date}) => (
              <div key={id} className='w-96 h-96 bg-gradient-to-r from-gray-800 to-slate-500 rounded-md'>
                  <picture><img src={thumbnail} alt={title} className='w-full rounded-md'></img></picture>
                  <div>
                    <h1 className='text-center font-bold'>{title}</h1>
                    <h1 className='px-2'>Publicado: {publisher}</h1>
                    <h1 className='px-2'>Desarrollado: {developer}</h1>
                    <h1 className='px-2'>Fecha de Lanzamiento: {release_date}</h1>
                    <h1 className='px-2'>Genero: {genre}</h1>
                    <Link href={"/games/" + id}><a className='text-cyan-400 px-2'>Clickeame para ver mas detalles del juego</a></Link>
                  </div>
              </div>
            ))}
            
          </div>
        </main>
       
        
        <footer className={styles.footer}>
          <a
            href="https://nicolasluza.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src={Logo} alt="Logo" width={32} height={28} />
            </span>
          </a>
        </footer>
      </div>
    );
}
export async function getStaticProps() {
  
  const res = await fetch('https://www.freetogame.com/api/games')
  const posts = await res.json()

  return { props: {posts}}
}
export default Home;