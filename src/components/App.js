import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Guides,
  Cities,
  Experiences,
  Explorers,
  NotFound,
} from 'components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/explorers" component={Explorers} />

        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
