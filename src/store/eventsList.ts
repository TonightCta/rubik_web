import { createSlice } from "@reduxjs/toolkit";
import {KeyedEvent} from '../typing/apiType'
import type { Vec } from "@polkadot/types";
import type { EventRecord } from "@polkadot/types/interfaces";

interface Events {
    eventCount: number;
    events: KeyedEvent[];
  }

export const eventsListSlice = createSlice({
    name:'eventsList',
    initialState:{
        eventsList:<Events>{
            eventCount:0,
            events:[]
        },
        eventsValue:<Vec<EventRecord>>{}
    },
    reducers:{
        changeEventsList:(state:any,action)=>{
            console.log(state.eventsList);
            console.log(action.payload);
            
            state.eventsList = action.payload
            // state.eventsList = action.payload
        },
        changeEventsVlaue:(state:any,action) =>{
            state.eventsValue = action.payload
        }
    }
})
const selectEventsList = (state:any) =>state.eventsList.eventsList
export const {changeEventsList,changeEventsVlaue} = eventsListSlice.actions
export {selectEventsList}
export default eventsListSlice.reducer