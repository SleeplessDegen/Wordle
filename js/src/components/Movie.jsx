import { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useMovieIdSearch(id, setMovieInfo, errorMessage, setErrorMessage);

  const { Title, Poster, Plot, Year, Runtime, Ratings } = movieInfo;

  return (
    <article className="movie">
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <h2 className="movie__title">{Title}</h2>
      {movieInfo.Poster && (
        <img src={Poster} alt={Title} className="movie__poster" />
      )}
      {Plot && <p className="movie__plot">{Plot}</p>}
      <h3>Details</h3>
      <dl className="movie__details">
        {Year && (
          <>
            <dt>Jahr</dt>
            <dd>{Year}</dd>
          </>
        )}
        {Runtime && (
          <>
            <dt>Dauer</dt>
            <dd>{Runtime}</dd>
          </>
        )}
      </dl>

      {Ratings && <MovieRatings ratings={Ratings} />}
    </article>
  );
}

function MovieRatings({ ratings }) {
  return (
    <dl className="movie__ratings">
      {ratings.map(({ Source, Value }) => (
        <Fragment key={Source}>
          <dt>{Source}</dt>
          <dd>{Value}</dd>
        </Fragment>
      ))}{' '}
    </dl>
  );
}

function useMovieIdSearch(id, setMovieInfo, errorMessage, setErrorMessage) {
  useEffect(() => {
    async function fetchMovieInfo() {
      try {
        const response = await fetch(
          `https://omdbapi.com/?apikey=3265d996&i=${id}`
        );

        if (!response.ok) {
          throw new Error('Daten konnten nicht geladen werden!');
        }

        const jsonData = await response.json();
        setMovieInfo(jsonData);
      } catch (error) {
        setErrorMessage(error.message);
        console.log(errorMessage);
      }
    }
    fetchMovieInfo();
  }, [id, setMovieInfo]);
}

// tt0372784
// `https://omdbapi.com/?apikey=3265d996&i=${id}`
// https://omdbapi.com/?apikey=3265d996&i=tt0372784

/*

<article class="movie">
  <h2 class="movie__title">Titel</h2>
  <!-- Bild nur anzeigen, wenn vorhanden, d.h. Poster ungleich 'N/A' -->
  <img src="" alt="" class="movie__poster" />
  <!-- Plot anzeigen, wenn vorhanden -->
  <p class="movie__plot">Plot</p>
  <h3>Details</h3>
  <dl class="movie__details">
	<!-- Auch Jahr und Dauer prüfen, ob sie vorhanden sind -->
	<dt>Jahr</dt>
	<dd>2000</dd>
	<dt>Dauer</dt>
	<dd>200 Minuten</dd>
  </dl>

  <!-- Bonus: Die Ratings ausgeben. Ihr könnt wieder eine dl-Liste verwenden. -->
  <dl class="movie__ratings">
 
  	<dt>Rotten Tomatoes</dt>
  	<dd>90%</dd>
 
  </dl>
</article>

// Bonus: Nutz Helmet, um den Filmtitel als Seitentitel darzustellen


*/

// https://www.mediaevent.de/xhtml/dl.html
// http://html5doctor.com/the-dl-element/
