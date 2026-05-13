import "./Button.css"

function Button({ texto, acao, classe }) {
  return (
    <button className={classe} onClick={acao}>
      {texto}
    </button>
  )
}

export default Button