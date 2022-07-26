import Header from './components/Header'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
/* import ReactDOM from 'react-dom' */
import Footer from './components/Footer'
import {useState} from 'react';


function Home({ posts }) {

const [searchValue, setSearchValue] = useState('')

const onSearch = (event) => {
  setSearchValue(event.target.value)
  if(event.target.value){
    var games = document.querySelectorAll('.gameCard')
    games.forEach(game =>{
      game.innerHTML.toLowerCase().includes(event.target.value.toLowerCase())
        ?game.classList.remove("hidden")
        :game.classList.add("hidden")
  })
  }
}
  /* if (typeof window !== 'undefined') {
    document.addEventListener('keyup', e => {
      if(e.target.matches('#search')){
        var games = document.querySelectorAll('.gameCard')
        games.forEach(game =>{
          game.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())
            ?game.classList.remove("hidden")
            :game.classList.add("hidden")
      })
      }
    })
  } */
 
    return(
      <div className={styles.container}>
        <Header></Header>
        <main className={styles.main}>
          <div className='flex place-content-center'>
            <div className='flex flex-row lg:w-1/3 md:w-1/2 sm:w-1/2 h-14 bg-gradient-to-r bg-gray-800 my-1 rounded-lg justify-center opacity-75'>
              <div className='flex items-center'>
                {/* <p className='text-white font-bold'>Search:</p><input id='search' className='text-black rounded-md mx-1'></input> */}
                <p className='text-white font-bold'>Search:</p><input value={searchValue} onChange={onSearch} id='search' className='text-black rounded-md mx-1' placeholder=''></input>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 gap-4 justify-items-center md:grid-cols-2 sm:grid-cols-1'>
            {posts.map(({id, title, genre, thumbnail, publisher, developer, release_date}) => (
              <div key={id} id={genre} className='gameCard w-96 h-96 bg-gradient-to-r from-gray-800 rounded-md'>
                  <picture><img src={thumbnail} alt={title} className='w-full rounded-md'></img></picture>
                    <h1 className='text-center font-bold'>{title}</h1>
                    <h1 className='px-2'>Publisher: {publisher}</h1>
                    <h1 className='px-2'>Developer: {developer}</h1>
                    <h1 className='px-2'>Release date: {release_date}</h1>
                    <h1 className='px-2'>Genre: {genre}</h1>
                    <Link href={"/games/" + id}><a className='text-cyan-400 px-2'>Click me to see more details of the game</a></Link>
              </div>
            ))}
          </div>
        </main>
        <br></br>
        <Footer></Footer>
      </div>
    );
}
export async function getStaticProps() {
  const res = await fetch('https://www.freetogame.com/api/games')
  const posts = await res.json()
  return { props: {posts}}
}
export default Home;