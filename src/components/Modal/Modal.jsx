
export default function Modal({children, close}) {
  return (
    <div>
        <button onClick={close}>X</button>
        {children}
    </div>
  )
}
