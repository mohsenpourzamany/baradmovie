import React , {useState , useEffect} from 'react';
import './App.css';
import Header from '../src/components/Header'
import Movie from '../src/components/Movie'
import Search from '../src/components/Search'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=18e9be27";


function App() {

  const[loading , setLoading] = useState(true);
  const[movies , setMovies] = useState([]);
  const[errorMessage , setErrorMessage] = useState(null);

    useEffect(() => {
      fetch(MOVIE_API_URL)
      .then(Response => Response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        // console.log(jsonResponse.Search,'aaa')
        setLoading(false);
      });
    },[]);

    const search = searchValue => {
      setLoading(true);
      setErrorMessage(null);

      fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=18e9be27`)
      .then(Response => Response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        }else{
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
    }

  return (
    <div className="App">
      <Header text=" بــــــاراد فیــــــــلم" />
      <Search search={search} />
      <p className='App-intro'> جســــتجوی  فیـــلم  با  یک  کلیــــک </p>
      <div className='movies'>
        {loading && !errorMessage ?(
          <span>در حال بارگذاری ...</span>
        ): errorMessage ? (
          <div className='errormessage'>{errorMessage}</div>
        ):(
          movies.map((movie ,index) => (
            < Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
      
    </div>
  );
}

export default App;
