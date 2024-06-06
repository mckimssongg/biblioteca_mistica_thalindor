import React from 'react';
import Card from '../Card/Card';
import Love from '../Iconos/Usuario/Book/Love';
import Terror from '../Iconos/Usuario/Book/Terror';
import './StyleCarousel.css'; // Importa el archivo de estilo del carousel

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content align-items-center extremos">
            <Card
              title={'Así fue como me enamore'}
              subtitle={'Autor: John Petter'}
              icon={<Terror />}
              link={'#'}
              className="card-container"
            />
            <Card
              title={'Otra tarjeta'}
              subtitle={'Autor: Autor 2'}
              icon={<Love />}
              link={'#'}
              className="card-container"
            />
            <Card
              title={'Otra tarjeta'}
              subtitle={'Autor: Autor 2'}
              icon={<Love />}
              link={'#'}
              className="card-container"
            />
            {/* Agrega más tarjetas aquí si lo deseas */}
          </div>
        </div>
        {/* Agrega más elementos 'carousel-item' para más diapositivas */}
        <div className='carousel-item'>
        <div className="d-flex justify-content align-items-center extremos">
            <Card
              title={'Otra tarjeta'}
              subtitle={'Autor: Autor 2'}
              icon={<Love />}
              link={'#'}
              className="card-container"
            />

            <Card
              title={'Así fue como me enamore'}
              subtitle={'Autor: John Petter'}
              icon={<Terror />}
              link={'#'}
              className="card-container"
            />         
          </div>   
        </div>
      </div>

      <a className="carousel-control-prev custom-carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className="carousel-control-next custom-carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}