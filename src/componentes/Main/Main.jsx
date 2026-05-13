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

      <h1>Conectando inovação e tecnologia</h1>

      <p>
        A TechConnect desenvolve soluções digitais modernas para empresas
        que desejam crescer através da tecnologia, automação e inovação.
      </p>

      <div className="cards">

        <Card
          titulo="Desenvolvimento Web"
          descricao="Sites modernos, rápidos e totalmente responsivos."
          destaque={destaque}
        />

        <Card
          titulo="Aplicativos Mobile"
          descricao="Aplicativos Android e iOS com foco em desempenho."
          destaque={destaque}
        />

        <Card
          titulo="Banco de Dados"
          descricao="Estruturas seguras para armazenamento de informações."
          destaque={destaque}
        />

      </div>

      <Button
        texto="Mostrar Destaque"
        acao={mostrarDestaque}
        classe="btn-destaque"
      />

    </main>
  )
}

export default Main