// Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';

function Home() {
  
  const offers = [
    { id: 1, name: 'Oferta 1', price: 10, image: 'https://fairplaybo.vtexassets.com/assets/vtex.file-manager-graphql/images/4c90e7bd-3169-4717-83f2-bb14668a91ff___7763deb35201f492397d313c2736b016.jpg' },
    { id: 2, name: 'Oferta 2', price: 15, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 3, name: 'Oferta 3', price: 10, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/imagen1.png' },
    { id: 4, name: 'Oferta 4', price: 15, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 5, name: 'Oferta 5', price: 10, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 6, name: 'Oferta 6', price: 15, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
  ];

  const bestSellers = [
    { id: 1, name: 'Producto 1', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 2, name: 'Producto 2', price: 25, image: 'product2.jpg' },
  ];

  const newProducts = [
    { id: 1, name: 'Nuevo Producto 1', price: 30, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 2, name: 'Nuevo Producto 2', price: 35, image: 'newproduct2.jpg' },
  ];

  return (
    <div className="home">
       <section >       
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button className="arrow-prev" onClick={onClickHandler} title={label}>
                &#8249;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button className="arrow-next" onClick={onClickHandler} title={label}>
                &#8250;
              </button>
            )
          }
        >
          {offers.map(offer => (
            <Link to={`/products/${offer.id}`}>
              <div key={offer.id} className="carousel-item"> 
                  <img src={offer.image} alt={offer.name} />
                  <div className="carousel-caption">
                    <h3>{offer.name}</h3>
                  </div>               
              </div>
            </Link>
          ))}
        </Carousel>
      </section>
      <section>
        <h2 className="section-title">Productos más vendidos</h2>
        <div className="product-list">
          {bestSellers.map(product => (
            <Link to={`/products/${product.id}`}>
              <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Precio: ${product.price}</p>               
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">Nuevos productos</h2>
        <div className="product-list">
          {newProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
