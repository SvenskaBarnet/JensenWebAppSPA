import React, {useState } from 'react';
import { topics } from '../assets/topics';
import styles from '../styles/ArticleList.module.css';

const ArticleFilter = ({ onFilterChange }) => {
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
        onFilterChange(event.target.value);
        
    };

    return (
        <div className={styles.topicSortContainer}>
            <h2>Filter by</h2>
            <select value={selectedTopic} onChange={handleTopicChange}>
                <option value="">All topics</option>
                {topics.map((topic) => (
                    <option key={topic.value} value={topic.value}>
                        {topic.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ArticleFilter;