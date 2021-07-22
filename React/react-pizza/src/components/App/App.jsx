import React from 'react';

import { Route, Switch } from 'react-router-dom';

// Import React Components:
import { Header } from '../../components';
import { Home, Cart } from '../../pages';

// Import Assets Files:

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* React Router */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
