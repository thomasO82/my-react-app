import "./Modal.css"
function Modal({children, close}) {
  return (
    <div className="modal">
        <button onClick={close}>fermer</button>
        {children}
    </div>
  )
}

export default Modal