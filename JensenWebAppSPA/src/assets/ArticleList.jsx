import React, { useEffect, useState } from 'react';
const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => {
                console.error('There was an error fetching the articles!', error);
            });
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul className="Article">
                {articles.map(article => (
                    <li key={article.Title}>
                        <h2>{article.Title}</h2>
                        <p>{article.Summary}</p>
                        <a href={article.Link}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;