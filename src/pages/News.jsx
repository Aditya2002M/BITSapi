import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/news.css";

const NewsAPIKey = '6c4a846fa8dd443f878361eacba102f4'; // Replace with your NewsAPI key

const News= () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Function to fetch trending food news
    const fetchTrendingFoodNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
       
          params: {
            apiKey: NewsAPIKey,
            q: 'food',
            sortBy: 'popularity',
          },
        });

        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the function to fetch news when the component mounts
    fetchTrendingFoodNews();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container mt-4">
    <div className="row mb-5">
      <div className="col-md-3 popular-recipe-text-box">
          <h3>Trending Food News</h3>
      </div>
    </div>
      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={article.urlToImage} className="card-img-top" alt="News" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default News;





















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsAPIKey = '6c4a846fa8dd443f878361eacba102f4'; // Replace with your NewsAPI key

// const FoodNewsComponent = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     // Function to fetch trending food news
//     const fetchTrendingFoodNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/everything', {
//           params: {
//             apiKey: NewsAPIKey,
//             q: 'food',
//             sortBy: 'popularity',
//           },
//         });

//         setNews(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     // Call the function to fetch news when the component mounts
//     fetchTrendingFoodNews();
//   }, []);

//   return (
//     <div>
//       <h2>Trending Food News</h2>
//       <ul>
//         {news.map((article, index) => (
//           <li key={index}>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FoodNewsComponent;
