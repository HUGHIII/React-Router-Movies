import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path='/'>
        <MovieList/>
      </Route>

      <Route path='/movies/:movieID'>
        <Movie/>
      </Route>

    </div>
  );
};

export default App;
