import React from 'react';

import { Switch, Link } from 'react-router-dom';

// Import Components:
import { Favorites, Home, Orders } from '../../pages/';

// Import Assets Files:

const App = () => {
  return (
    <>
      <Switch>
        <Link exact path="/" component={Home} />
        <Link exact path="/orders" component={Orders} />
        <Link exact path="/favorites" component={Favorites} />
      </Switch>
    </>
  );
};

export default App;


