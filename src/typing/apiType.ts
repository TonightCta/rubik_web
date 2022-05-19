import type { HeaderExtended } from '@polkadot/api-derive/types';
import type { EventRecord,BlockNumber } from '@polkadot/types/interfaces';
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
  export interface IndexedEvent {
    indexes: number[];
    record: EventRecord;
  }
  export interface KeyedEvent extends IndexedEvent {
    blockHash?: string;
    blockNumber?: BlockNumber;
    key: string;
  }