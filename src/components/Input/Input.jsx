export default function Input({ label, name, type, options = null, register, error }) {
    return (
        <>
            {type != "checkbox" && type != "radio" ?

                <div>
                    <label htmlFor="">{label}</label>
                    <input type={type}  {...register(name)} />
                    {error &&
                        <span>{error.message}</span>
                    }
                </div>

                :
                <div>
                    <fieldset>
                        {error &&
                            <span>{error.message}</span>
                        }
                        <legend>{label}</legend>
                        {options.map((opt) => (
                            <label key={opt} htmlFor="">
                                <input type={type} value={opt} {...register(name)} />
                                {opt}
                            </label>

                        ))}
                    </fieldset>
                </div>

            }
        </>
    )
}