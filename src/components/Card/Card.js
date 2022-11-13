import React from 'react'

export default function Card({sourceImage, alt, tittle, description,}) {
  return (
    <div>
        <img src={sourceImage} alt={alt}/>
        <h1>{tittle}</h1>
        <p>{description}</p>
    </div>
  )
}
