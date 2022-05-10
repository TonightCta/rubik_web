export interface IState{
    activeIndex?:number,
    leftActiveIndex?:string,
}
export interface IAction{
    type:ActionType;
    payload:IState
}
export enum ActionType{
    CHANGE_ACTIVE_INDEX = 'activeIndex',
    CHANGE_LEFT_ACTIVE = 'left_active_index'
}