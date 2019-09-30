import PropTypes from "prop-types"
import React from "react"
import "./card.css"

const Card = ({url}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="card">
      <div className="img-container">
        <img src="https://images.pexels.com/photos/2196602/pexels-photo-2196602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      </div>
      <div className="card-text">
        <h2 className="card-title">Card 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis itaque aliquid totam quis aliquam esse dignissimos laboriosam error earum!</p>
      </div>
    </div>
  </a>
)

Card.propTypes = {
  url: PropTypes.string,
}

Card.defaultProps = {
  url: ``,
}

export default Card
