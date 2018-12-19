// React
import React from 'react';
import { render } from 'react-dom';
// Components
import App_Auth from './components/App_Auth';
// CSS
import './index.css';
// Redux
import { store } from './redux/store/app-store';
import { Provider, connect } from 'react-redux';

const Root = () => {
  return (
    <Provider store={store}>
      <App_Auth />
    </Provider>
  );
};

render(<Root />, document.getElementById('root'));
