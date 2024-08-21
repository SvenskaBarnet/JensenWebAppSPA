import styles from '../styles/articleList.module.css'; // Importing CSS module for scoped styles

const ArticleSorter = ({ sortOrder, onSortChange }) => {

    const handleSortChange = (event) => {
        onSortChange(event.target.value); // Call the onSortChange function with the selected value
    };

    return (
        <div className={styles.topicSortContainer}>
            <h2>Sort by</h2> {/* Heading for the sort section */}
            <select value={sortOrder} onChange={handleSortChange}> {/* Dropdown for selecting sort order */}
                <option value="newest">Newest to oldest</option> {/* Option for sorting from newest to oldest */}
                <option value="oldest">Oldest to newest</option> {/* Option for sorting from oldest to newest */}
            </select>
        </div>
    );
};

export default ArticleSorter; // Exporting the ArticleSorter component as default