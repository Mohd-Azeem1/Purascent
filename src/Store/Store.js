import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../../../megaproject/src/store/authSlice';
import bucketslice from './bucketslice';

const Store = configureStore({
    reducer:{
        auth: authSlice,
        bucket: bucketslice,
    }
})

export default Store