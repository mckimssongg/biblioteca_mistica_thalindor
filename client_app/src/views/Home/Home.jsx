import React from 'react'
import Carousel from '../../components/UI/Carousel/Carousel'
import Card from '../../components/UI/Card/Card'
import Fantasy from '../../components/UI/Iconos/Book/Fantasy'

function Home() {
  return (
    <div>Home
      <h1>Categorias</h1>
      <Carousel/>

      <h1>Populares</h1>
      <Card
        title={'Libro 1'}
        subtitle={'Autor 1'}
        icon={<Fantasy/>}
        link={'#'}
      />
    </div>

    
  )
}

export default Home