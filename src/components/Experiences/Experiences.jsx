import Experience from "../Experience/Experience"
function Experiences({ exps }) {


    return (
        <section>
            <h2>Experiences</h2>

            {exps.map((exp) => (
                <Experience key={exp.id} {...exp} />
            ))}
        </section>
    )
}

export default Experiences