import "./Footer.css"
import Button from "../Button/Button"

function Footer() {

  function enviarMensagem() {
    alert("Mensagem enviada com sucesso")
  }

  return (
    <footer className="footer">

      <h2>TechConnect</h2>

      <p>contato@techconnect.com</p>

      <p>© 2026 Todos os direitos reservados</p>

      <Button
        texto="Enviar Mensagem"
        acao={enviarMensagem}
        classe="btn-footer"
      />

    </footer>
  )
}

export default Footer