import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json';

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        {
          movies.map((element) => {
            return (
              <Movie
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
