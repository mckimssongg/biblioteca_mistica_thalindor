import React from 'react';
import Card from '../Card/Card';

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <Card
                title={'Así fue como me enamoré'}
                subtitle={'Autor: John Petter'}
                link={{ href: '#', text: 'Ver más' }}
                className=""
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                title={'Otra tarjeta'}
                subtitle={'Autor: Autor 2'}
                link={{ href: '#', text: 'Ver más' }}
                className=""
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                title={'Otra tarjeta'}
                subtitle={'Autor: Autor 2'}
                link={{ href: '#', text: 'Ver más' }}
                className=""
              />
            </div>
            {/* Agrega más tarjetas aquí si lo deseas */}
          </div>
        </div>
        {/* Agrega más elementos 'carousel-item' para más diapositivas */}
        <div className='carousel-item'>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <Card
                title={'Otra tarjeta'}
                subtitle={'Autor: Autor 2'}
                link={{ href: '#', text: 'Ver más' }}
                className=""
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                title={'Así fue como me enamoré'}
                subtitle={'Autor: John Petter'}
                link={{ href: '#', text: 'Ver más' }}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev custom-carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next custom-carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}