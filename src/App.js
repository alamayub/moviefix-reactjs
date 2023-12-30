import { useEffect } from 'react';
import { connect } from 'react-redux'
import GenreList from './components/GenreList'
import MoviesList from './components/MoviesList'
import SearchComponent from './components/SearchComponent'
import { setYear } from './store/storeActions';
const App = ({ year, setYear }) => {
  const onScroll = () => {
    if (document.scrollingElement.scrollTop === 0) {
      let x = year--;
      setYear(x);
    }
    if ((window.pageYOffset + window.innerHeight) >= document.documentElement.scrollHeight) {
      let x = year++;
      setYear(x);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <main>
        <SearchComponent year={year} />
        <GenreList />
        <MoviesList />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  year: state.year,
  search: state.search,
})

const mapDispatchToProps = (dispatch) => ({
  setYear: year => dispatch(setYear(year))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
