import { configureStore } from "@reduxjs/toolkit";
import chainInfoListReducer from './chain_info_list_Slice'
import apiStatus from "./api_status";
import eventsList from "./eventsList";
export default configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        chainInfoList:chainInfoListReducer,
        apiStatus: apiStatus,
        eventsList,
    }
})