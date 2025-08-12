import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Hooks
//Store'a actionlar dispatch edilir
export const useAppDispatch: () => AppDispatch = useDispatch;
//Store'dan veriler select edilir
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;