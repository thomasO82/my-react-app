
function Student(props) {

    return (
        <li>
            <article>
                {props.isFromRi7 &&
                    <p>est bien de ri7</p>
                 
                }
                <h3>{props.name} {props.firstname}</h3>
                <img alt={props.name} src={props.avatar} />
                <p>Campus : {props.campus}</p>
                <p>Langage préféré : {props.favoriteLanguage}</p>
                <button onClick={() => alert("Présentation de " + props.name)}>Presentation</button>
            </article>
        </li>

    )
}

export default Student