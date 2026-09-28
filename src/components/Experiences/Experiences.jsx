import Experience from "../Experience/Experience"
function Experiences({ exps }) {
    return (
        <div>

            {exps.map((exp)=>(
                <Experience key={exp.id} {...exp}/>
            ))}

        </div>
    )
}

export default Experiences