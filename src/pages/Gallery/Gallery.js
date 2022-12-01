import React, { useState } from 'react'
import Body from '../../components/layout/Body/Body'
import Modal from '../../components/Modal/Modal'
import "../../styles/Gallery/Gallery.css"
import "../../styles/Modal/Modal.css"
import img1 from "../../assets/images/gallery/gemma_gallery_1.jpg"
import img2 from "../../assets/images/gallery/gemma_gallery_2.jpg"
import img3 from "../../assets/images/gallery/gemma_gallery_3.jpg"
import img4 from "../../assets/images/gallery/gemma_gallery_4.jpg"
import img5 from "../../assets/images/gallery/gemma_gallery_5.jpg"
import img6 from "../../assets/images/gallery/gemma_gallery_6.jpg"
 import Carrousel from '../../components/Carousel/Carousel'
// import Slider from '../../components/Slider/Slider'


export default function Gallery() {

  const [numImg, setNumImg] = useState()
  const [isOpen, setIsOpen] = useState(false)



function handleClick(id){
setIsOpen(true)
setNumImg(id)

}


  return (
    <Body>
      <div className={`${isOpen ? "bg-opacity" : ""}`}>
    <div className='background-img background-img-gallery'></div>
    <div id="vacio"></div>
    <div className='background-container'>
          <div  className="container-images">
            <div className='imageStyle'>

              
              <button onClick={() => handleClick(1)} ><img src={img1} alt="Foto Gemma" /></button>
              <button onClick={() => handleClick(2)} ><img src={img2} alt="Foto Gemma" /></button>

            </div>
            
            <div className='imageStyle'>
            <button onClick={() => handleClick(3)} ><img src={img3} alt="Foto Gemma" /></button>
              <button onClick={() => handleClick(4)} ><img src={img4} alt="Foto Gemma" /></button>
             
            </div>
           
            <div className='imageStyle'>
            <button onClick={() => handleClick(5)} ><img src={img5} alt="Foto Gemma" /></button>
              <button onClick={() => handleClick(6)} ><img src={img6} alt="Foto Gemma" /></button>
           
            </div>
          </div>
        </div>
        
     <Modal open = {isOpen} close = { () => setIsOpen(false)} ><Carrousel id={numImg}/></Modal>
   
    </div>
      </Body>
  )
}
