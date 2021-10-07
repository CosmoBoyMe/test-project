import { configureStore } from '@reduxjs/toolkit';
import calendar from './Slice.js';


const reducer = {
    calendar
}

const store = configureStore({ reducer });


export default store;