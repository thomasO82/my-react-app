function Input({ name, error, type, label, options = [], register }) {
  return (
    <>
      {type === "radio" ?

        <fieldset>
          <legend>{label}</legend>
          {options.map((opt) => (
            <label htmlFor="" key={opt.value}>
              <input type={type} value={opt.value} {...register(name)}  />
              <span>{opt.name}</span>
            </label>
          ))}
          {error &&
            <span>{error.message}</span>
          }
        </fieldset>
        :
        <div>
          <label htmlFor="">{label}</label>
          <input type={type} {...register(name)}  />
          {error &&
            <span>{error.message}</span>
          }
        </div>
      }

    </>
  );
}

export default Input