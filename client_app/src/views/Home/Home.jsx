import React from 'react'
import Navar from '../../components/UI/Navar/Navar'
import CarouselBooksCategory from '../../components/UI/Carousel/CarouselBookCategory'
import '../Home/style.css'
import CarouselBooksPopular from '../../components/UI/Carousel/CarouselBookPopular';


function Home() {
  return (
    <>
      <div className='content-container'>

      <div>
        <h1>Géneros: </h1>
        <CarouselBooksCategory/>
      </div>
      
      <div>
        <h1>Populares</h1>
        <CarouselBooksPopular/>
      </div>
    
      </div>
    
    </>
  )
}

export default Home