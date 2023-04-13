import React from 'react';
import cardData from './card.json';

const Cards = () => {
  const cards = cardData.map(item => {
    return (
      <div key={item.id} className="col-12 col-md-4">
        <div className="card content-card" style={{ width: '18rem', height: '27rem' }}>
          <img src={item.image} className="card-img-top" style={{ height: '300px' }} alt={item.alt} />
          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <p className="card-text">{item.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container cards-container">
      <div className="row">
        <div className="col-md-12 hero1">
          <h3>Join the Community </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem perspiciatis ut possimus nihil rerum sapiente totam iusto praesentium ipsam qui.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi repudiandae hic quibusdam
            molestias quae quam soluta error, rerum ipsam voluptatum praesentium libero voluptas excepturi
            ullam facilis? Omnis, dolorum eum?
          </p>
        </div>
      </div>
      <div className="row content">
        {cards}
      </div>
    </div>
  );
};

export default Cards;
