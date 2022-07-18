import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios, {AxiosError} from 'axios';

const showErrorAlert = (error: AxiosError, details: string) => {
  const { response } = error;
  const defaultMessage = 'unknown';
  alert(`Error ${response?.status}: ${response?.data?.Message || defaultMessage}\n\n${details}`);
};

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response?.status) {
      case 401:
        showErrorAlert(error, 'Add "authorization_token" to your local storage');
        break;
      case 403:
        showErrorAlert(error, '"authorization_token" is provided but did not pass the check');
      default:
        // console.log(error);
    }

    return Promise.reject(error?.response ?? error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
