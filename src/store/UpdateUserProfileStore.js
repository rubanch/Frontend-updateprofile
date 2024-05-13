// store.js
import { createStore } from 'redux';
import reducer from '../reducers/UpdateUserProfileReducer';

const store = createStore(reducer);

export default store;
