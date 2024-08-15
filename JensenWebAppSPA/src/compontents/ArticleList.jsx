import React, { useEffect, useState } from 'react';
import ArticleFilter from './ArticleFilter';
import ArticleSorter from './ArticleSorter';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
            const queryParams = new URLSearchParams({
                topic: selectedTopic,
                sortBy: sortOrder,
            });
            const response = await fetch(`http://localhost:3000/api/articles?${queryParams.toString()}`);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            setArticles(data);
            
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching articles', error);
            setIsLoading(false);
        }
    };

        fetchArticles();
    }, [selectedTopic, sortOrder]);

    return (
        <div>
            <h1>Articles</h1>
            <div>
                <ArticleFilter onFilterChange={setSelectedTopic}/>
                <ArticleSorter onSortChange={setSortOrder} />
            </div>
            {isLoading ? (
                <p>Loading articles...</p>
            ) : (
                <ul className="Article">
                    {articles.map(article => (
                        <li key={article.Title}>
                            <h2>{article.Title}</h2>
                            <p>{article.Summary}</p>
                            <a href={article.Link}>Read more</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticleList;