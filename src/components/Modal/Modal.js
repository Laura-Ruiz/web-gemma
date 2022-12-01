import React, {useRef} from 'react'
import { ReactDOM } from 'react'
import "../../styles/Modal/Modal.css"

export default function Modal({children, open, close}) {
  const DIV_OVERLAY_STYLE = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor : 'rgba(0,0,0,.8)',
    // backgroundColor : "rgba(245, 245,245, 0.7",
    zIndex : 1000
}

    if(!open) return null
    return (
<div style = {DIV_OVERLAY_STYLE}>
        <div className='modal' >
          <div className='btn-style'><button onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button> </div>
          {children}
        </div>
        </div>
    )
}
    

