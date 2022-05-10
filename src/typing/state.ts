export interface IState{
    activeIndex:number
}
export interface IAction{
    type:ActionType;
    payload:IState
}
export enum ActionType{
    CHANGE_ACTIVE_INDEX = 'activeIndex'
}