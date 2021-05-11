import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  datasetGetPending,
  datasetGetSuccess,
  datasetGetFailure,
} from 'store/actions';
import requestGetDataset from 'api';
import {
  Home,
  Guides,
  Cities,
  Experiences,
  NotFound,
} from 'components/pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(datasetGetPending());
  
      try {
        const { dataset: datasetData } = await requestGetDataset();
  
        dispatch(datasetGetSuccess(datasetData));
      } catch (error) {
        // TODO: dispatch alert error message.
  
        dispatch(datasetGetFailure(error));
      } 
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/experiences" component={Experiences} />

        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
