import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from './screen/home';
import Formulir from './screen/formulir';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Home" initial />
        <Scene key="Formulir" component={Formulir} title="Formulir" />
      </Scene>
    </Router>
  );
};

export default App;
