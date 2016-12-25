import React from 'react';
import ReactDOM from 'react-dom';
import AppJS from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <AppJS />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
