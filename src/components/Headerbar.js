import SearchComponent from "./SearchComponent";
import GenreList from "./GenreList";
const Headerbar = ({ year }) => {
    return (
        <header>
            <SearchComponent year={year} />
            <GenreList />
        </header>
    );
}

export default Headerbar;