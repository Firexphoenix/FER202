import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ id, text, imageUrl }) => {
  const getCardStyle = () => {
    switch (id) {
      case 1:
        return { border: '10px solid #007bff', backgroundColor: '#007bff', color: 'black', textAlign: 'center' };
      case 2:
        return { border: '10px solid #ffc107', backgroundColor: '#ffc107', color: 'black', textAlign: 'center' };
      case 3:
        return { border: '10px solid #dc3545', backgroundColor: '#dc3545', color: 'black', textAlign: 'center' };
      default:
        return { backgroundColor: '#fff' };
    }
  };

  return (
    <div className="card" style={getCardStyle()}>
      <img src={imageUrl} className="card-img-top" alt="Car" />
      <div className="card-body">
        <p className="card-text" style={{ height: '10px' }}>{text}</p>
      </div>
    </div>
  );
};

const App = () => {
  const cardData = [
    {
      id: 1,
      text: 'Some text inside the first card',
      imageUrl: '/toyota.jpg',
    },
    {
      id: 2,
      text: 'Some text inside the first card',
      imageUrl: '/toyota.jpg',
    },
    {
      id: 3,
      text: 'Some text inside the first card',
      imageUrl: '/toyota.jpg',
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4">Cards Columns</h1>
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <Card id={card.id} text={card.text} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;