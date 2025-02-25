import React, { useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState([]);
  const API_KEY =  process.env.REACT_APP_NEWS_API;

  const getData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      setNewsData(jsonData.articles || []); // Fallback to empty array if no articles.
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>World Trends</h1>
        </div>
        <ul>
          <li><a href="#">All News</a></li>
          <li><a href="#">Trending</a></li>
        </ul>
        <div className='searchbar'>
          <input type='text' placeholder='Search News' onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='top'>Stay Updated with Trending News</p>
      </div>
      <div className='categorybtn'>
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;
