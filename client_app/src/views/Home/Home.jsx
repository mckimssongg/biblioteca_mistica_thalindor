import React, { useEffect } from 'react';

import Carousel from '../../components/UI/Carousel/Carousel'
import Card from '../../components/UI/Card/Card'

function Home() {
  /*useEffect(() => {
    // Desactivar scroll cuando el componente se monta
    document.body.style.overflow = 'hidden';

    // Limpiar al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);*/

  return (
    <div>Home
      <h1>Categorias</h1>
      <Carousel/>

      <h1>Populares</h1>
      <Card
        title={'Libro 1'}
        subtitle={'Autor 1'}
        link={'#'}
      />
    </div>

    
  )
}

export default Home