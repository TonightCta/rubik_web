import { IState, IAction,ActionType } from '../typing/state';

export function initActive (activeIndex:number){
    return {activeIndex}
}
export function activeReducer(state:IState,action:IAction){
    const {type,payload}  = action
    switch (type){
        
        case ActionType.CHANGE_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex:payload.activeIndex
            };
        default:            
            return state
    }
}
export default{
    initActive,
    activeReducer
}
