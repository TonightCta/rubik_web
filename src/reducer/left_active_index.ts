import { IState, IAction, ActionType } from '../typing/state';

export function initLeftActive(leftActiveIndex: string) {
    return { leftActiveIndex }
}
export function activeLeftReducer(state: IState, action: IAction) {
    const { type, payload } = action;
    switch (type) {
        case ActionType.CHANGE_LEFT_ACTIVE:
            // sessionStorage.setItem('left_active_index',(<any>payload).leftMenuActiveindex)
            return {
                ...state,
                leftActiveIndex: payload.leftActiveIndex,
            };
        default:
            return state
    }
}
export default {
    initLeftActive,
    activeLeftReducer
}
