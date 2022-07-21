import Header from '/pages/Header'
import styles from '../../styles/Home.module.css'
import Footer from '/pages/Footer'

function Games({ games }){
    return(
    <div className={styles.container}>
      <Header></Header>
      <body>
          <div className='w-full h-auto bg-gradient-to-r from-gray-800 to-gray-800 rounded-md border-2 border-black'>
            <div className="grid place-content-center">
              <div className='grid justify-items-center'>
                <picture>
                <img src={games.thumbnail} alt='Imagen game' className='rounded-md w-auto h-96'></img>
                </picture>
              </div>
              <div className='text-center font-mono'>
                <h1 className='text-white'>{games.title}</h1>
                <h1 className='text-white'>Publicado: {games.publisher}</h1>
                <h1 className='text-white'>Desarrollado: {games.developer}</h1>
                <h1 className='text-white'>Fecha de Lanzamiento: {games.release_date}</h1>
                <h1 className='text-white'>Genero: {games.genre}</h1>
                <p className='text-white'>Descripcion: {games.description}</p>
                <h1 className='text-white'>Requerimientos:</h1>
                <ul className='text-white'>
                <li>Sistema Operativo: {games.minimum_system_requirements.os}</li>
                <li>Procesador: {games.minimum_system_requirements.processor} </li>
                <li>Memoria RAM: {games.minimum_system_requirements.memory} </li>
                <li>Grafica: {games.minimum_system_requirements.graphics}</li>
                </ul>
              </div>
            </div>
          </div>
      </body>
      <br></br>
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