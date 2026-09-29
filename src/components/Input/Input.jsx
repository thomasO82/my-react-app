function Input({ type, label, options = [], setValue }) {
  return (
    <>
      {type === "radio" ?

        <fieldset>
          <legend>{label}</legend>
          {options.map((opt) => (
            <label htmlFor="" key={opt.value}>
              <input type={type} value={opt.value} onChange={setValue} />
              <span>{opt.name}</span>
            </label>

          ))}
        </fieldset>
        :
        <div>
          <label htmlFor="">{label}</label>
          <input type={type} onChange={setValue} />
        </div>
      }
    </>
  );
}

export default Input