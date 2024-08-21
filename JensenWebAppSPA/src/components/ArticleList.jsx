import React, { useEffect, useState } from 'react'; // Importing necessary hooks from React
import { ArticleFilter, ArticleSorter } from '../index.js'; // Importing components from a relative path
import '../App.css'; // Importing global CSS
import styles from '../styles/ArticleList.module.css'; // Importing CSS module for scoped styles

const ArticleList = () => {
    const [articles, setArticles] = useState([]); // State to store articles
    const [selectedTopic, setSelectedTopic] = useState(''); // State to store selected topic for filtering
    const [sortOrder, setSortOrder] = useState('newest'); // State to store sort order
    const [isLoading, setIsLoading] = useState(false); // State to manage loading state
    const [page, setPage] = useState(1); // State to manage pagination
    const [limit] = useState(10); // State to set the limit of articles per page
    const [hasMore, setHasMore] = useState(true); // State to check if more articles are available

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true); // Set loading state to true before fetching
            try {
                const queryParams = new URLSearchParams({
                    topic: selectedTopic,
                    sortBy: sortOrder,
                    page: page,
                    limit: limit,
                }); // Construct query parameters for the API request
                const response = await fetch(`http://localhost:3000/api/articles?${queryParams.toString()}`); // Fetch articles from API

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`); // Throw error if response is not ok
                }

                const data = await response.json(); // Parse JSON response

                setArticles(prevArticles => [...prevArticles, ...data.data]); // Append new articles to existing list
                setHasMore(data.page < data.totalPages); // Update hasMore based on total pages

            } catch (error) {
                console.error('Error fetching articles', error); // Log error if fetching fails
            } finally {
                setIsLoading(false); // Set loading state to false after fetching
            }
        };

        fetchArticles(); // Call the fetchArticles function
    }, [selectedTopic, sortOrder, page, limit]); // Dependencies for useEffect to re-run when these change

    useEffect(() => {
        setArticles([]); // Clear articles when selectedTopic or sortOrder changes
        setPage(1); // Reset page to 1 when selectedTopic or sortOrder changes
    }, [selectedTopic, sortOrder]); // Dependencies for useEffect to re-run when these change

    const loadMore = () => {
        if (!isLoading && hasMore) {
            setPage(prevPage => prevPage + 1); // Increment page number to load more articles
        }
    }

    const clearFilters = () => {
        setSelectedTopic(''); // Clear selected topic
        setSortOrder('newest'); // Reset sort order to default
    }

    return (
        <div className="mainContent">
            <h1 className={styles.mainTitle}>Articles</h1> {/* Main title */}
            <div className={styles.filterContainer}>
                <ArticleFilter 
                    onFilterChange={setSelectedTopic} 
                    selectedTopic={selectedTopic}    
                /> {/* ArticleFilter component with props */}
                <ArticleSorter 
                    onSortChange={setSortOrder} 
                    sortOrder={sortOrder}    
                /> {/* ArticleSorter component with props */}
                <button className={styles.clearFiltersButton} onClick={clearFilters}>Clear Filters</button> {/* Button to clear filters */}
            </div>
            {isLoading ? (
                <p>Loading articles...</p> // Show loading message if articles are being fetched
            ) : (
                <>
                    <div className="articles">
                        {articles.map(article => (
                            <div
                                className={styles.articleContainer}
                                key={article.Title}
                            >
                                <div className={styles.articleContent}>
                                    <h2>{article.Title}</h2> {/* Article title */}
                                    <p>{article.Summary}</p> {/* Article summary */}
                                    <a href={article.Link}>Read more</a> {/* Link to full article */}
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
                                {isLoading ? 'Loading...' : 'Load More'} {/* Button to load more articles */}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ArticleList; // Exporting the ArticleList component as default