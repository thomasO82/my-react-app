function Identity({name, firstname, email, address, tel}) {
    return (
        <section>
            <h2>Contact</h2>
            <article>
                <h3>nom et prenom : {name} {firstname}</h3>
                <ul>
                    <li>email: {email}</li>
                    <li>adresse : {address}</li>
                    <li>tel:{tel}</li>          
                </ul>
            </article>

        </section>
    )
}

export default Identity