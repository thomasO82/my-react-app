import { useState } from "react"
import Input from "../Input/Input"
import { fields } from "./fields"
import Modal from "../Modal/Modal"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import RegisterModalContent from "../RegisterModalContent/RegisterModalContent"

const schema = z.object({
    name: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "le nom est invalide"),
    civilitie: z.enum(["man", "woman", "other"], {
        message: "choisir un champ valide"
    }),
    email: z.string().email("Entrez un mail valide"),
    firstname: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "le prenom est invalide"),
    birthdate: z.string("Date invalide").date().refine(birthdate =>{
        const limit = new Date()
        limit.setFullYear(limit.getFullYear() - 18)
        return new Date(birthdate) <= limit
    }, "Vous devez etre majeur"),
    postal_code: z.string().regex(/^\d{5}$/, " le code postal doit contenir 5 chiffres"),
    city: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "la ville est invalide")
})

const Register = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [formData, setFormData] = useState({})

    const {register, handleSubmit,
        formState: {errors}
    } = useForm({resolver: zodResolver(schema), mode: "onChange"})


    function openModal(data) {
        setFormData(data)
        setIsModalVisible(true)
    }

    return (
        <section className="register">
            <form className="register__form" onSubmit={handleSubmit(openModal)}>
                {fields.map((field)=>(
                    <Input error={errors[field.name]}  register={register} {...field} />
                ))}
                <button>Valider</button>
            </form>
            {
                isModalVisible &&
                <Modal close={() => setIsModalVisible(false)}>
                    <RegisterModalContent {...formData}  />

                </Modal>
            }

        </section>
    )
}

export default Register