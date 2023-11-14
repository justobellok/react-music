import "./lista.css"
import Lista from "./Lista.jsx"
import error from "./img/error.jpg"

const ListMusic = ()=>{
    return(

        <div className="todo">
  <div className="item">

  <h2 className="play">Algunas Play List Gratis</h2>

      <Lista 
      imagen="Faruko"
      cantante="Faruko"
      apodo="faruko"
      />

      <Lista 
      imagen="manuel"
      cantante="manuel"
      apodo="manuelPerez"
      />

      <Lista 
      imagen="lesly"
      cantante="lesly"
      apodo="lesly"
      />

      <Lista 
      imagen="jose"
      cantante="Jose"
      apodo="Jose"
      />

<Lista 
      imagen="anna"
      cantante="Anna"
      apodo="annaFazt"
      />

<Lista 
      imagen="miguel"
      cantante="miguel"
      apodo="miguelP."
      />

<Lista 
      imagen="jean"
      cantante="Jean"
      apodo="JeanBello"
      />
      </div>

      <article>
        <div className="repro">
            <img src={ error } alt="imagen no encotrada" />
        </div>
      </article>

      </div>

    )
}

export default ListMusic;