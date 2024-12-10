import React from 'react';

const Card = ({ data = [] }) => {
  if (!data.length) {
    return <p>No news available.</p>; // Add fallback when data is empty.
  }

  return (
    <div className='CardContainer'>
      {data.map((curItem, index) => (
        <div className='card' key={index}>
          <img src={curItem.urlToImage} alt={curItem.title} />
          <div className='content'>
            <a className='title'>{curItem.title}</a>
            <p>{curItem.description}</p>
            <button onClick={()=>curItem.url}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
