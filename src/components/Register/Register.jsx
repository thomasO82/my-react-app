import "./Register.css"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import FormModal from "../FormModal/FormModal"
import { fields } from "./fields"
import Input from '../Input/Input'
import Modal from "../Modal/Modal"

const schema = z.object({
    name: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "le nom est invalide"),
    civilitie: z.enum(["homme", "femme", "autre"], {
        required_error: "choisir une option",
        invalid_type_error: "choisir une option"
    }),
    email: z.string().email("entrez un mail valide"),
    firstname: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "le prenom est invalide"),
    birthdate: z.string('date invalide').refine(birthdate => {
        const limit = new Date();
        limit.setFullYear(limit.getFullYear() - 18);
        return new Date(birthdate) <= limit;
    }, "vous devez etre majeur"),
    postal_code: z.string().regex(/^\d{5}$/, "Le code postal doit contenir 5 chiffres"),
    city: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "la ville est invalide")

})

function Register() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [formData, setFormData] = useState({})
    const { register, handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(schema), mode: "onChange" })

    function openModal(data) {
        setFormData(data);
        setModalIsVisible(true)
    }
    return (
        <section>

            <form action="" method="post" onSubmit={handleSubmit(openModal)} >
                {fields.map((field) => (
                    <Input key={field.name} register={register} error={errors[field.name]} {...field} />
                ))}
                <button type="submit">Soumettre</button>
            </form>
            {
                modalIsVisible &&
                <>
                    <p>dhjssdsd</p>
                    <Modal >
                        <FormModal data={formData} />
                    </Modal>
                </>
            }
        </section >
    )
}

export default Register