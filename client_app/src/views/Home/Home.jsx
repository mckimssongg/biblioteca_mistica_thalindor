import React from 'react';
import CarouselCategorias from '../../components/UI/Carousel/CarouselCategorias';
import CarouselPopulares from '../../components/UI/Carousel/CarouselPopulares';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h4>Categorias</h4>
          <CarouselCategorias />
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 mx-auto">
          <h4>Populares</h4>
          <CarouselPopulares />
        </div>
      </div>
    </div>
  );
}

export default Home;