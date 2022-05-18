import { configureStore } from "@reduxjs/toolkit";
import chainInfoListReducer from './chain_info_list_Slice'

export default configureStore({
    reducer:{
        chainInfoList:chainInfoListReducer
    }
})