import "./home.css"
import music from "./img/music.jpg"
import "./Creadores"
import Creadores from "./Creadores"

const Home = ()=>{
    return(
        <>
        <header className="header">
            <div className="inicio">
            <h1>Descarga y Escucha tus Musicas Favoritas</h1>
            <h3>Suscribete y Sube tus musicas 100% Confiable</h3>
            <button>Comenzar</button>
            </div>

            <div>
                <img src={ music } alt="" />
            </div>
        </header>

    <main>
        <h2 className="title">Creadores y Colaboradores</h2>
        <article>
            <Creadores
             imagen="Francisco"
            nombre="fancisco"
            subnombre="franciscoPerez"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam molestias facere et consequuntur ipsam fuga labore tenetur necessitatibus! Nisi explicabo pariatur ducimus inventore autem qui esse vel soluta deserunt. Omnis."
            />

<Creadores
             imagen="Anna"
            nombre="anna"
            subnombre="annaPerez"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam molestias facere et consequuntur ipsam fuga labore tenetur necessitatibus! Nisi explicabo pariatur ducimus inventore autem qui esse vel soluta deserunt. Omnis."
            />

<Creadores
             imagen="Maria"
            nombre="maria"
            subnombre="mariaPerez"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam molestias facere et consequuntur ipsam fuga labore tenetur necessitatibus! Nisi explicabo pariatur ducimus inventore autem qui esse vel soluta deserunt. Omnis."
            />

<Creadores
             imagen="Manuel"
            nombre="manuel"
            subnombre="manuelMella"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam molestias facere et consequuntur ipsam fuga labore tenetur necessitatibus! Nisi explicabo pariatur ducimus inventore autem qui esse vel soluta deserunt. Omnis."
            />
        </article>
    </main>

        </>
    )
}

export default Home;