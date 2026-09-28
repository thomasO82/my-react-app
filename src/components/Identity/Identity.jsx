import { useEffect } from "react"

function Identity ({name, firstname, tel, address, email}){
 
    return (
    <section>
        <h2>Contact</h2>
        <ul>
            <li>nom et prenom : {name} {firstname}</li>
            <li>tel : {tel}</li>
            <li>addresse : {address}</li>
            <li>email : {email}</li>
        </ul>
    </section>
    )
}

export default Identity