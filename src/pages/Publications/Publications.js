import React from 'react'
import Body from '../../components/layout/Body/Body'
import Publication from '../../components/Publication/Publication'

export default function Publications() {
  return (
    <Body>
        <div class="mt-5">
        <Publication 
        title={"LOS OLORES PARA MEJORAR LA VOZ Y LA LOCUCIÓN ACTORAL"}
        spanName = {"Libros"}
        description = {
        "El olfato está ligado absolutamente a los instintos. El olfato fue un sentido imprescindible para nuestra supervivencia y su importancia evolutiva queda reflejada aún en el genoma humano, ya que hay centenares de genes relacionados con la percepción de los olores."}
        />
           <Publication 
        title={"LOS OLORES PARA MEJORAR LA VOZ Y LA LOCUCIÓN ACTORAL"}
        spanName = {"Libros"}
        description = {
        "El olfato está ligado absolutamente a los instintos. El olfato fue un sentido imprescindible para nuestra supervivencia y su importancia evolutiva queda reflejada aún en el genoma humano, ya que hay centenares de genes relacionados con la percepción de los olores."}
        />
        </div>
    </Body>
  )
}
