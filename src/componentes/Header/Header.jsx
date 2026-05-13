import "./Header.css"
import Button from "../Button/Button"

function Header() {

  function entrarSistema() {
    alert("Você entrou no sistema")
  }

  return (
    <header className="header">

      <h1 className="logo">TechConnect</h1>

      <nav>
        <a href="#">Início</a>
        <a href="#">Tecnologias</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>

      <Button
        texto="Entrar"
        acao={entrarSistema}
        classe="btn-entrar"
      />

    </header>
  )
}

export default Header