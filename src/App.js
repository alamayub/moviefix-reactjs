function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
        {process.env.REACT_APP_TITLE}
        {process.env.REACT_APP_DESCRIPTION}
      </header>
    </div>
  );
}

export default App;
