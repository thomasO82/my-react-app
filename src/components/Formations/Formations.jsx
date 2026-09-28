import Formation from "../Formation/Formation"

function Formations({formas}) {
    return (
        <section>
            <h2>Formations</h2>
            {formas.map((forma)=>(
                <Formation key={forma.id} {...forma} />
            ))}
        </section>
    )
}

export default Formations