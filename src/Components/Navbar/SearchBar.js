import './styles/SearchBar.css'
import Icon from './Icon';
const SearchBar = props => {
    return <div className="search-bar">
        <a href='hh'><Icon title="Search" /></a>
        <input type={'search'} placeholder='Search' />
    </div>
}
export default SearchBar;
