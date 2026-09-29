import { useState } from "react"
import Input from "../Input/Input"
import Modal from "../Modal/Modal"
import RegisterModalContent from "../RegisterModalContent/RegisterModalContent"

const Register = () => {
    const [civilitie, setCivilitie] = useState("")
    const [name, setName] = useState("")
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [bdate, setbDate] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [city, setCity] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()
        setIsModalVisible(true)
    }


    return (
        <section className="register">

            <form className="register__form" onSubmit={(e)=>{handleSubmit(e)}}>
                <Input type="radio" label="Civilité" setValue={(e)=>setCivilitie(e.target.value)} options={[{ name: "Homme", value: "man" }, { name: "Femme", value: "woman" }]} />
                <Input type="text" label="Nom" setValue={(e)=>setName(e.target.value)} />
                <Input type="text" label="Prenom" setValue={(e)=>setFname(e.target.value)} />
                <Input type="text" label="Email" setValue={(e)=>setEmail(e.target.value)} />
                <Input type="text" label="Date de naissance" setValue={(e)=>setbDate(e.target.value)} />
                <Input type="text" label="Code postal" setValue={(e)=>setZipcode(e.target.value)} />
                <Input type="text" label="Ville" setValue={(e)=>setCity(e.target.value)} />

                <button>Valider</button>
            </form>

            {
                isModalVisible &&
                <Modal  close={()=>setIsModalVisible(false)}>
                    <RegisterModalContent civilitie={civilitie} name={name} />

                </Modal>
            }

        </section>
    )
}

export default Register