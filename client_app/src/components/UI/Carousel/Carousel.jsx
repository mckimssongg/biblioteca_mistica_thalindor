import React from 'react';
import Card from '../Card/Card';
import '../Carousel/StyleCarousel.css';
import Love from '../Iconos/Usuario/Book/Love';
import Terror from '../Iconos/Usuario/Book/Terror';
import Crimen from '../Iconos/Usuario/Book/Crimen';

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        {/* Primer conjunto de tarjetas */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <div className="mx-1 card-container">
              <Card
                title={'Así fue como me enamore'}
                subtitle={'Autor: John Petter'}
                icon={<Terror />}
                link={'#'}
              />
            </div>
            <div className="mx-1 card-container">
              <Card
                title={'Así fue como me enamore'}
                subtitle={'Autor: John Petter'}
                icon={<Crimen />}
                link={'#'}
              />
            </div>
            <div className="mx-1 card-container">
              <Card
                title={'Así fue como me enamore'}
                subtitle={'Autor: John Petter'}
                icon={<Love />}
                link={'#'}
              />
            </div>
          </div>
        </div>

        {/* Segundo conjunto de tarjetas */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <div className="mx-1 card-container">
              <Card
                title={'Libro de Misterio'}
                subtitle={'Autor: Jane Doe'}
                icon={<Terror />}
                link={'#'}
              />
            </div>
          </div>
        </div>

        {/* Agrega más conjuntos de tarjetas según sea necesario */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <div className="mx-1 card-container">
              <Card
                title={'Fantasía'}
                subtitle={'Autor: J.K. Rowling'}
                icon={<Crimen />}
                link={'#'}
              />
            </div>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Siguiente</span>
      </a>
    </div>
  );
}