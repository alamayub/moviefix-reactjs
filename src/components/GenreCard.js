import { useSelector, useDispatch } from 'react-redux'
import { setSelectGenre } from '../store/storeActions'
const GenreCard = ({ genre }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.genre);

  return (
    <div className="genre__card"
      onClick={() => dispatch(setSelectGenre(genre))}
      style={{ backgroundColor: selected != null && selected['id'] === genre['id'] ? 'red' : 'rgba(0, 0, 0, 0.4)' }}
    > {selected}{genre['name']}</div>
  );
}

export default GenreCard;