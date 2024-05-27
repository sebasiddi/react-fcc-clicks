import React from 'react';

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require ('../imagenes/testimonio-3.png')} alt='Foto de Emma' />
      <div className='contenderor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."2</p>
      </div>
    </div>
  )
}

export default Testimonio;