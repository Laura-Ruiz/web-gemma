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
  <div style={DIV_OVERLAY_STYLE} onClick={close}>
      <div className="modal" >
        <div className="btn-style">
        </div>
        <div onClick={e => e.stopPropagation()}>
        {children}</div>
      </div>
    </div>
    )
}
    

