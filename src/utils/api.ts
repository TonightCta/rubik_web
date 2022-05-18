import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { HeaderExtendedWithMapping, isFunction } from "../typing/apiType";
import { ReactNode, useEffect } from "react";
import React from "react";
// import store from '../store/index'
import type { Codec, IOption } from "@polkadot/types/types";
import { numFun } from "./filter";
// import { useDispatch } from "react-redux";
import store from "../store";
import {unshiftChainInfoList} from '../store/chain_info_list_Slice'
interface Authors {
    byAuthor: Record<string, string>;
    eraPoints: Record<string, string>;
    lastBlockAuthors: string[];
    lastBlockNumber?: string;
    lastHeader?: HeaderExtendedWithMapping;
    lastHeaders: HeaderExtendedWithMapping[];
  }
class PolkadotConfig {
  private api!: ApiPromise;
  private url: string = "wss://rpc.polkadot.io";
  constructor() {
    const provider = new WsProvider(this.url);
    const initPolkadotConfing:
      | Function
      | Promise<ApiPromise>
      | ReactNode = async () => {
      this.api = await ApiPromise.create({ provider: provider });
      // const test = await this.api.isReady();
      console.log("api", this.api);
    };

    initPolkadotConfing();
  }
  public getBlockHash = async () => {
    const defaultChainHash = this.api.genesisHash.toHex();
    const now = await this.api.query.timestamp.now();

    const addr: string = "5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE";
    const balance = await this.api.query.balances.account(addr);

    // const nonce = await this.api.query.system.blockHash(addr);
  };
  // 获取chain_info 页面数据
  public getChainInfoList = async () => {
    // 建立连接并获取ws msg
    // const dispatch = useDispatch()

    this.api.derive.chain.subscribeNewHeads(async (lastHeader: HeaderExtendedWithMapping):Promise<any>=> {
        // 判断是否拥有authorMapping属性
    const isAuthorMappingWithDeposit =
      typeof this.api.query.authorMapping?.mappingWithDeposit;
    const byAuthor: Record<string, string> = {};
    const MAX_HEADERS = 75;
    const eraPoints: Record<string, string> = {};
        
        let lastBlockNumber = "";
        let lastBlockAuthors: string[] = [];
        let lastHeaders: HeaderExtendedWithMapping[] = [];
  
        if (lastHeader?.number) {
          const blockNumber = lastHeader.number.unwrap();
          let thisBlockAuthor = "";
          const hasConsensusDigest =
            lastHeader.digest.logs &&
            lastHeader.digest.logs[0] &&
            lastHeader.digest.logs[0].isConsensus &&
            lastHeader.digest.logs[0].asConsensus[1];
          const hasPreRuntimeDigest =
            lastHeader.digest.logs &&
            lastHeader.digest.logs[0] &&
            lastHeader.digest.logs[0].isPreRuntime &&
            lastHeader.digest.logs[0].asPreRuntime[1];
          if (lastHeader.author) {
            thisBlockAuthor = lastHeader.author.toString();
          } else if (
            isAuthorMappingWithDeposit != "undefined" &&
            (hasConsensusDigest || hasPreRuntimeDigest)
          ) {
            // Check for a Digest
            // Some blockchains such as Moonbeam need to fetch the author accountId from a mapping
            const optMap = await this.api.query.authorMapping?.mappingWithDeposit<
              IOption<{ account: Codec } & Codec>
            >(
              hasConsensusDigest
                ? lastHeader.digest.logs[0].asConsensus[1]
                : lastHeader.digest.logs[0].asPreRuntime[1]
            );
  
            if (optMap.isSome) {
              lastHeader.authorFromMapping = thisBlockAuthor = optMap
                .unwrap()
                .account.toString();
            }
          }
  
          const thisBlockNumber = numFun(blockNumber.toString());
  
          if (thisBlockAuthor) {
            byAuthor[thisBlockAuthor] = thisBlockNumber;
  
            if (thisBlockNumber !== lastBlockNumber) {
              lastBlockNumber = thisBlockNumber;
              lastBlockAuthors = [thisBlockAuthor];
            } else {
              lastBlockAuthors.push(thisBlockAuthor);
            }
          }
  
          lastHeaders = lastHeaders
            .filter(
              (old, index) =>
                index < MAX_HEADERS && old.number.unwrap().lt(blockNumber)
            )
            .reduce(
              (next, header): HeaderExtendedWithMapping[] => {
                next.push(header);
  
                return next;
              },
              [lastHeader]
            )
            .sort((a, b) => b.number.unwrap().cmp(a.number.unwrap()));
              
        }
        store.dispatch({type:'chainInfoList/unshiftChainInfoList',payload:lastHeaders})
})

    };
}

export default new PolkadotConfig();

// export {};
