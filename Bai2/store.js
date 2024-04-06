// store.js

import { createStore } from 'redux';
import rootReducer from './reducer';

// Tạo store từ rootReducer
const store = createStore(rootReducer);

export default store;
