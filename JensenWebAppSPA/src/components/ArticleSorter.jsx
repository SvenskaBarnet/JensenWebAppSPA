import React, { useState } from 'react';
import styles from '../styles/articleList.module.css';

const ArticleSorter = ({ onSortChange }) => {
    const [sortOrder, setSortOrder] = useState('newest');

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
        onSortChange(event.target.value);
    };

    return (
        <div className={styles.topicSortContainer}>
            <h2>Sort by</h2>
            <select value={sortOrder} onChange={handleSortChange}>
                <option value="newest">Newest to oldest</option>
                <option value="oldest">Oldest to newest</option>
            </select>
        </div>
    );
};

export default ArticleSorter;