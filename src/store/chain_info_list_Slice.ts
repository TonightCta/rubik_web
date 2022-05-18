import {createSlice} from '@reduxjs/toolkit'
import { HeaderExtendedWithMapping } from '../typing/apiType'
export const chainInfoListSlice = createSlice({
    name:'chainInfoList',
    initialState:{
        chainInfoList:<HeaderExtendedWithMapping[]>[]
    },
    reducers:{
        unshiftChainInfoList:(state,action)=>{
            if(state.chainInfoList.length>75){
                state.chainInfoList.pop()
            }
            state.chainInfoList.unshift(action.payload)
        }
    }
})
const selectChainInfoList = (state:any) =>state.chainInfoList.chainInfoList
export const {unshiftChainInfoList} = chainInfoListSlice.actions
export {selectChainInfoList}
export default chainInfoListSlice.reducer