import type { HeaderExtended } from '@polkadot/api-derive/types';

export interface HeaderExtendedWithMapping extends HeaderExtended {
    authorFromMapping?: string;
}
declare type FnType = Function;
export declare function isFunction(value: unknown): value is FnType;
export {};
export type CallParam = any;
export type CallParams = [] | CallParam[];
export interface CallOptions <T> {
    defaultValue?: T;
    paramMap?: (params: any) => CallParams;
    transform?: (value: any) => T;
    withParams?: boolean;
    withParamsTransform?: boolean;
  }