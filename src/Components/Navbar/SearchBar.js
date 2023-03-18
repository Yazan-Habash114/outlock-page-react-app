import styles from './styles/SearchBar.module.css'
import Icon from './Icon';
const SearchBar = () => {
    return <div className={`${styles["search-bar"]}`}>
        <a href='hh'><Icon title="Search" /></a>
        <input type={'search'} placeholder='Search' />
    </div>
}
export default SearchBar;