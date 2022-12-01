import React from 'react'
import img1 from "../../assets/images/Publications/img1.jpg"
import img2 from "../../assets/images/Publications/img2.jpg"
import Carousel from '../Carousel/Carousel'
import "../../styles/Publication/Publication.css"
export default function Publication({title, spanName, description}) {
  return (
    <div id="container-article"  class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <Carousel img1={img1} img2={img2} />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <span class="badge text-bg-success mb-2">{spanName}</span>
        
        <p class="card-text">{description}</p>
        </div>
    </div>
  </div>
</div>

  )
}
