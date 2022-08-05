import defaultMovies from '../defaultMovies';
import MovieTeasers from './MovieTeasers';
import FilterForm from './FilterForm';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function MoviesFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState(defaultMovies);

  useServerSearch(searchTerm, setMovies);

  return (
    <BrowserRouter>
      <div className="movies-finder">
        <nav className="main-navigation">
          <Link to="/">Start</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>

        <Routes>
          <Route
            path=""
            element={
              <>
                <Helmet>
                  <title>Filmdatenbank</title>
                </Helmet>
                <FilterForm
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <MovieTeasers movies={movies} />
              </>
            }
          />
          <Route
            path="/kontakt"
            element={
              <>
                <Helmet>
                  <title>Kontakt</title>
                </Helmet>
                <h2>Kontakt</h2>
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <Movie />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function useServerSearch(searchTerm, setMovies) {
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 600);

  useEffect(() => {
    if (debouncedSearchTerm.length < 2) {
      setMovies(defaultMovies);
      return;
    }

    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://omdbapi.com/?apikey=3265d996&s=${debouncedSearchTerm}`
        );

        if (!response.ok) {
          throw new Error('Fehler beim laden der Daten!');
        }
        const jsonData = await response.json();

        setMovies(jsonData.Search);
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    }

    fetchMovies();
  }, [debouncedSearchTerm, setMovies]);
}

/*
1. Geht in die Datei MovieTeasers und ergänzt sie so, dass die movies angezeigt
werden.
2. Nutzt useDebouncedValue um den Wert debouncedSearchTerm zu erhalten.
3. Nutzt useEffect, um aus der Datenbank die zum Suchbegriff passenden Ergebnisse
zu laden. Achtet dabei darauf, dass mindestens 2 Buchstaben eingegeben wurden, bevor
die Anfrage gemacht wird. Wenn weniger Buchstaben eingegeben sind, sollen wieder
die defaultMovies angezeigt werden.
Basis-URL:
https://omdbapi.com/?apikey=3265d996&s=Suchbegriff
*/
