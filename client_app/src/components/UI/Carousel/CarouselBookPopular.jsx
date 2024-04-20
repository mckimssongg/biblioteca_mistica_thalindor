import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import '../Carousel/style.css'
import Love from '../Iconos/BooksIcons/Love'; 
import Financial from '../Iconos/BooksIcons/Financial';
import Health from '../Iconos/BooksIcons/Health';
import Crimes from '../Iconos/BooksIcons/Crimes';
import Games from '../Iconos/BooksIcons/Games';

export default function CarouselBooksPopular() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <div className="row">

            <div className="col carousel-individual color1  me-2">
              <a href="/categoryLove">
                <Love />
                <p>Libros de romance</p>
              </a>
            </div>
            
            <div className="col carousel-individual color3 me-2">
              <a href="/categoryHealth">
                <Health/>
                <p>Libros de salud</p>
              </a>
            </div>

            <div className="col carousel-individual color2">
              <a href="/categoryFinancial">
                <Financial />
                <p>Libros de finanzas</p>
              </a>
            </div>           

          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <div className="row">

          <div className="col carousel-individual color4  me-2">
              <a href="/categoryCrimes">
                <Crimes/>
                <p>Libros de crimenes</p>
              </a>
            </div>
            
            <div className="col carousel-individual color5 me-2">
              <a href="/categoryGames">
                <Games/>
                <p>Libros de videojuegos</p>
              </a>
            </div>

            <div className="col carousel-individual color6 me-2">
              <a href="/categoryFinancial">
                <Financial />
                <p>Libros de finanzas</p>
              </a>
            </div>  

          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-wrapper">
          <div className="row">

          <div className="col carousel-individual color1  me-2">
              <a href="/categoryLove">
                <Love />
                <p>Libros de romance</p>
              </a>
            </div>
            
            <div className="col carousel-individual color3 me-2">
              <a href="/categoryHealth">
                <Health/>
                <p>Libros de salud</p>
              </a>
            </div>

            <div className="col carousel-individual color2">
              <a href="/categoryFinancial">
                <Financial />
                <p>Libros de finanzas</p>
              </a>
            </div>  

          </div>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}