import React, {useState } from 'react';
import { topics } from '../assets/topics';

const ArticleFilter = ({ onFilterChange }) => {
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <div>
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