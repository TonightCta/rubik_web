
// extract the serialized and mapped params, all ready for use in our call
import { isFunction, isNull, isUndefined } from '@polkadot/util';
import store from '../store'
type VoidFn = () => void;
type CallFn = (...params: unknown[]) => Promise<VoidFn>;

export function transformIdentity <T> (value: unknown): T {
    return value as T;
  }
function extractParams <T> (fn: unknown, params: unknown[],paramMap = transformIdentity) {
    return [
      JSON.stringify({ f: (fn as { name: string })?.name, p: params,  }),
      params.length === 0 || !params.some((param) => isNull(param) || isUndefined(param))
      ? paramMap(params)
      : null
    ];
  }
  function subscribe <T> ( fn: any, params: any, ): void {
    const validParams = params.filter((p:any) => !isUndefined(p));
  
    // unsubscribe(tracker,setIsActiveCopy);
  
    setTimeout((): void => {
          // swap to active mode
            (fn as CallFn)(...params, (value: any): void => {
            
            // we use the isActive flag here since .subscriber may not be set on immediate callback)
              try {
                store.dispatch({type:'eventsList/changeEventsVlaue',payload:value})
                // setValue(
                //   transformIdentity(value)
                // );
              } catch (error) {
                // handleError(error as Error, tracker, fn);
              }
          }).catch();
    }, 0);
  }
export const useCall=<T>(fn:any)=>{
    const [serialized, mappedParams] = extractParams(fn, []);
    if(mappedParams){
        subscribe( fn, mappedParams);
    }
}