import { createSlice } from "@reduxjs/toolkit";
export const ApiStatusSlice = createSlice({
    name:'apiStatus',
    initialState:{
        isReady:false
    },
    reducers:{
        setIsReady:(state,action)=>{
            state.isReady = action.payload
        }
    }
})
const selectApiStatus = (state:any)=>state.apiStatus.isReady
export const {setIsReady} = ApiStatusSlice.actions
export {selectApiStatus}
export default ApiStatusSlice.reducer