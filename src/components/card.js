import PropTypes from "prop-types"
import React from "react"
import "./card.css"

const Card = ({url,img, title, info}) => (
  <a className="card-link" href={url} target="_blank" rel="noopener noreferrer">
    <div className="card">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="card-text">
        <h2 className="card-title">{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  </a>
)

Card.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
}

Card.defaultProps = {
  url: ``,
  img: ``,
  title: ``,
}

export default Card
