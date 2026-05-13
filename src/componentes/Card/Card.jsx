import "./Card.css"

function Card({ titulo, descricao, destaque }) {
  return (
    <div className={destaque ? "card destaque" : "card"}>
      <h3>{titulo}</h3>

      <p>{descricao}</p>
    </div>
  )
}

export default Card