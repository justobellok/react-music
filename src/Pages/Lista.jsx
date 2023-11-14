

function Lista({ imagen, cantante, apodo }) {
    return (

        <>
       
        <section className="dad">
            <div className="lista">
                <img src={`https:/unavatar.io/${imagen}`} alt="no cargo" />
            </div>
            <div className="info">
                <strong> {cantante} </strong>
                <p> {apodo} </p>
            </div>
            <div>
                <button>Reproducir</button>
            </div>


        </section>

        

        </>
        


    )
}

export default Lista;