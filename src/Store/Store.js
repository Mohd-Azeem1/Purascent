import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authslice';
import bucketslice from './bucketslice';

const Store = configureStore({
    reducer:{
        auth: authSlice,
        bucket: bucketslice,
    }
})

export default Store