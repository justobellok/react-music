import "./creadores.css"


function Creadores({imagen, nombre, subnombre, text}){
    return(

        <section className="group">

<div className="contenido">
            <div className="img">
            <img src={`https:/unavatar.io/${imagen}`} alt="" />
            </div>
            <div className="usuario">
                <strong> {nombre} </strong>
                <p>@{subnombre} </p>

                <p className="texto"> {text} </p>
            </div>
        </div>
        </section>

       

    )
}

export default Creadores;

