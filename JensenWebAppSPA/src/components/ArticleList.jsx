import React, { useEffect, useRef, useState } from 'react';
import ArticleFilter from './ArticleFilter';
import ArticleSorter from './ArticleSorter';
import '../App.css'
import styles from '../styles/ArticleList.module.css';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);
            try {
                const queryParams = new URLSearchParams({
                    topic: selectedTopic,
                    sortBy: sortOrder,
                    page: page,
                    limit: limit,
                });
                const response = await fetch(`http://localhost:3000/api/articles?${queryParams.toString()}`);

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();

                setArticles(prevArticles => [...prevArticles, ...data.data]);
                setHasMore(data.page < data.totalPages);

            } catch (error) {
                console.error('Error fetching articles', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [selectedTopic, sortOrder, page, limit]);

    useEffect(() => {
        setArticles([]);
        setPage(1);
    }, [selectedTopic, sortOrder]);

    const loadMore = () => {
        if (!isLoading && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    }

    return (
        <div className="mainContent">
            <div className={styles.filterContainer}>
                <ArticleFilter onFilterChange={setSelectedTopic} />
                <ArticleSorter onSortChange={setSortOrder} />
            </div>
            {isLoading ? (
                <p>Loading articles...</p>
            ) : (
                <>
                    <div className="articles">
                        {articles.map(article => (
                            <div
                                className={styles.articleContainer}
                                key={article.Title}
                            >
                                <div className={styles.articleContent}>
                                    <h2>{article.Title}</h2>
                                    <p>{article.Summary}</p>
                                    <a href={article.Link}>Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {hasMore && (
                        <div className={styles.loadMoreButtonContainer}>
                            <button
                                className={styles.loadMoreButton}
                                onClick={loadMore}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading...' : 'Load More'}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ArticleList;