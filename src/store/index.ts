import createSagaMiddleware from 'redux-saga'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootSaga} from "./rootSaga";
import {rootReducer} from "./rootReducer";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

sagaMiddleware.run(rootSaga)

export default store
