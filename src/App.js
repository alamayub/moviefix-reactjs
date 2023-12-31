import { useEffect } from 'react';
import { connect } from 'react-redux'
import Headerbar from './components/Headerbar'
import MoviesList from './components/MoviesList'
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
      <Headerbar year={year} />
      <main>
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
