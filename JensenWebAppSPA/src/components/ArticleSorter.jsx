import styles from '../styles/articleList.module.css';

const ArticleSorter = ({ sortOrder, onSortChange }) => {

    const handleSortChange = (event) => {
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