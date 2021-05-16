import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';

export default configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})