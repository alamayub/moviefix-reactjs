import { connect } from "react-redux";
import { setSearch } from '../store/storeActions'

const SearchComponent = ({ year, setSearch }) => {
    return (
        <div className="search__component">
            <input placeholder="Search movie..." onChange={e => setSearch(e.target.value)} />
            <p>{year}</p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    search: state.search,
})

const mapDispatchToProps = (dispatch) => ({
    setSearch: val => dispatch(setSearch(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)