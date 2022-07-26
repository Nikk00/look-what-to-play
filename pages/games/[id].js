import Header from '../components/Header'
import styles from '../../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'
function Games({ games }){
    return(
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <div className='w-full h-auto bg-gradient-to-r from-gray-900 rounded-md border-2 border-slate-800'>
            <div className="grid place-content-center">
              <div className='grid justify-items-center'>
                <picture>
                <img src={games.thumbnail} alt='Imagen game' className='rounded-md w-auto h-96'></img>
                </picture>
              </div>
              <div className='text-center font-mono'>
                <h1 className='text-white'>{games.title}</h1>
                <h1 className='text-white'>Publisher: {games.publisher}</h1>
                <h1 className='text-white'>Developer: {games.developer}</h1>
                <h1 className='text-white'>Release date: {games.release_date}</h1>
                <h1 className='text-white'>Genre: {games.genre}</h1>
                <p className='text-white'>Description: {games.description}</p>
                <a href={games.game_url} target="_blank" rel="noopener noreferrer"><h1 className='text-cyan-400'>More details here</h1></a>
              </div>
              
            </div>
          </div>
          <div className='grid justify-center mt-1'>
            <Link href='/'><button className='w-20 h-12 bg-white text-black rounded-lg'>Back</button></Link>
          </div>
      </main>
      <Footer></Footer>
    </div>
    )
}

export async function getStaticProps(context){
  const id = context.params.id
  const res = await fetch('https://www.freetogame.com/api/game?id=' + id)
  const result = await res.json()

  return { props: { games: result } }
}
export async function getStaticPaths(){
  const res = await fetch('https://www.freetogame.com/api/games')
  const result = await res.json()
  const paths = result.map(result => { 
    return{ 
      params: { id: result.id.toString() }
    }
  })

  return { 
        paths,
        fallback: false
  }
}
export default Games