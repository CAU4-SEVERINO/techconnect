import "./Main.css"
import { useState } from "react"

import Card from "../Card/Card"
import Button from "../Button/Button"

function Main() {

  const [destaque, setDestaque] = useState(false)

  function mostrarDestaque() {
    setDestaque(!destaque)
  }

  return (
    <main className="main">

      <section className="main-container">

        <div className="cards-area">

          <Card
            titulo="Desenvolvimento Web"
            descricao="Sites modernos e responsivos."
            destaque={destaque}
          />

          <Card
            titulo="Aplicativos Mobile"
            descricao="Apps Android e iOS."
            destaque={destaque}
          />

          <Card
            titulo="Banco de Dados"
            descricao="Estruturas seguras."
            destaque={destaque}
          />

          <Card
            titulo="Cloud Computing"
            descricao="Serviços em nuvem."
            destaque={destaque}
          />

          <Card
            titulo="Cyber Segurança"
            descricao="Proteção digital avançada."
            destaque={destaque}
          />

          <Card
            titulo="Inteligência Artificial"
            descricao="Automação inteligente."
            destaque={destaque}
          />

        </div>

        <div className="side-content">

          <h1>
            Tecnologia que conecta empresas ao futuro
          </h1>

          <p>
            A TechConnect oferece soluções modernas para
            transformar ideias em inovação digital.
          </p>

          <Button
            texto="Mostrar Destaque"
            acao={mostrarDestaque}
            classe="btn-destaque"
          />

        </div>

      </section>

    </main>
  )
}

export default Main