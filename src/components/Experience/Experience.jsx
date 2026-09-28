function Experience({date,poste,description}) {
    return (
        <article>
            <h3>{poste}</h3>
            <p>date : {date}</p>
            <p>{description}</p>
        </article>
    )
}

export default Experience