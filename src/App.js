import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/home/HomePage.js' /* webpackChunkName: "home" */),
);
const Movies = lazy(() =>
  import('./pages/movies/MoviesPage.js' /* webpackChunkName: "movies" */),
);
const MovieDetails = lazy(() =>
  import(
    './pages/movieDetails/MovieDetailsPage.js' /* webpackChunkName: "movie-details" */
  ),
);
const NotFound = lazy(() =>
  import('./pages/notFound/NotFound.js' /* webpackChunkName: "not-found" */),
);

const App = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={Movies} />
          <Route path={routes.moviesDitails} component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
