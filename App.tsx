import React from 'react';
import { Provider } from 'react-redux';
// import store from './Bai1/store';
// import ChupAnh from './Bai1/TakeCapture';
import store from './Bai2/store';
import ChonAnh from './Bai2/SelectImage';

const App = () => {
  return (
    <Provider store={store}>
      <ChonAnh/>
    </Provider>
  );
};

export default App;
