// Home.js
import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';

function Home() {
  function Buttons({productContainerRef}){
    const scrollLeft = () => {
      if (productContainerRef.current) {
        productContainerRef.current.scrollLeft -= 200;
      }
    };
  
    const scrollRight = () => {
      if (productContainerRef.current) {
        productContainerRef.current.scrollLeft += 200;
      }
    };
    return(
      <div className="scroll-buttons">
          <button className="scroll-button scroll-left" onClick={scrollLeft}>
            &lt;
          </button>
          <button className="scroll-button scroll-right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
    );
  }
  const offers = [
    { id: 1, name: 'Oferta 1', price: 10, image: 'https://fairplaybo.vtexassets.com/assets/vtex.file-manager-graphql/images/4c90e7bd-3169-4717-83f2-bb14668a91ff___7763deb35201f492397d313c2736b016.jpg' },
  ];

  const bestSellers = [
    { id: 1, name: 'Producto 1', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 2, name: 'Producto 2', price: 25, image: 'product2.jpg' },
    { id: 3, name: 'Producto 1', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 4, name: 'Producto 2', price: 25, image: 'product2.jpg' },
    { id: 5, name: 'Producto 1', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 6, name: 'Producto 2', price: 25, image: 'product2.jpg' },
    { id: 2, name: 'Producto 2', price: 25, image: 'product2.jpg' },
    { id: 3, name: 'Producto 1', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 4, name: 'Producto 2', price: 25, image: 'product2.jpg' },
    { id: 5, name: 'Producto 1', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 6, name: 'Producto 2', price: 25, image: 'product2.jpg' },
  ];

  const newProducts = [
    { id: 1, name: 'Nuevo Producto 1', price: 30, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 2, name: 'Nuevo Producto 2', price: 35, image: 'newproduct2.jpg' },
    { id: 3, name: 'Nuevo Producto 1', price: 30, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 4, name: 'Nuevo Producto 2', price: 35, image: 'newproduct2.jpg' },
    { id: 5, name: 'Nuevo Producto 1', price: 30, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 6, name: 'Nuevo Producto 2', price: 35, image: 'newproduct2.jpg' },
  ];
  const productContainerRef1= useRef(null),productContainerRef2 = useRef(null);

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
      <section className='sections'>
        <h2 className="section-title">PRODUCTOS MAS VENDIDOS</h2>
        <div className="Hproduct-list-container">
          <div className="Hproduct-list-horizontal" ref={productContainerRef1} >
            {bestSellers.map(product => (
              <div key={product.id} className="Hproduct-card">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                  <div className="Hproduct-info">
                    <h3>{product.name}</h3>
                    <p>Precio: ${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {< Buttons productContainerRef={productContainerRef1}/>}
      </section>
      <section className='sections'>
        <h2 className="section-title">NUEVOS PRODUCTOS</h2>
        <div className="Hproduct-list-horizontal" ref={productContainerRef2}>
          {newProducts.map(product => (
            <div key={product.id} className="Hproduct-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className="Hproduct-details">
                  <h3>{product.name}</h3>
                  <p>Precio: ${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {< Buttons productContainerRef={productContainerRef2}/>}
      </section>
    </div>
  );
}

export default Home;
