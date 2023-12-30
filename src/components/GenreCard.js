const GenreCard = ({ genre, selected, setSelectGenre }) => {
  return (
    <div className="genre__card"
      onClick={setSelectGenre}
      style={{ backgroundColor: selected != null && selected['id'] === genre['id'] ? 'red' : 'rgba(0, 0, 0, 0.4)' }}
    > {genre['name']}</div>
  );
}

export default GenreCard;