import { topics } from '../index.js'; // Importing topics data from the index.js file
import styles from '../styles/ArticleList.module.css'; // Importing CSS module for styling

const ArticleFilter = ({ selectedTopic, onFilterChange }) => {

    const handleTopicChange = (event) => {
        // Calls the onFilterChange function passed as a prop with the new selected topic value
        onFilterChange(event.target.value);
    };

    return (
        <div className={styles.topicSortContainer}> {/* Applying CSS class for styling */}
            <h2>Filter by</h2>
            <select value={selectedTopic} onChange={handleTopicChange}> {/* Dropdown for selecting a topic */}
                <option value="">All topics</option> {/* Default option to show all topics */}
                {topics.map((topic) => (
                    <option key={topic.value} value={topic.value}> {/* Creating an option for each topic */}
                        {topic.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ArticleFilter; // Exporting the ArticleFilter component as the default export