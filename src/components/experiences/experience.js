import React from "react"

function experience({
  start,
  end,
  company,
  position,
  description,
  technologies,
  companyLink,
  products,
}) {
  const techList = technologies?.length
    ? technologies.map(tech => <li>{tech}</li>)
    : null
  const productList = products?.length
    ? products.map(product => (
        <li>
          <a href={product.link}>{product.name}</a>
        </li>
      ))
    : null
  return (
    <div>
      <time>
        {start} - {end}
      </time>
      <div>
        <h3>
          <a href={companyLink}>{company}</a>
        </h3>
        <h3>{position}</h3>
        <p>{description}</p>
        {techList && <ul>{techList}</ul>}
        {productList && <ul>{productList}</ul>}
      </div>
    </div>
  )
}

export default experience
