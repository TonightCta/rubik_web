import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { ReactNode } from 'react';

class PolkadotConfig {
    private api: any;
    private url: string = 'wss://rpc.polkadot.io';
    constructor() {
        const provider = new WsProvider(this.url);
        const initPolkadotConfing: Function | Promise<ApiPromise> | ReactNode = async () => {
            this.api = await ApiPromise.create({ provider: provider });
            // const test = await this.api.isReady();
            console.log(this.api)
            console.log(this.api._isReady);
        };
        initPolkadotConfing();
    };
    public getBlockHash = async () => {
        const defaultChainHash: Promise<ApiPromise> = this.api.genesisHash.toHex();
        const now: Promise<ApiPromise> = await this.api.query.timestamp.now();
        console.log(defaultChainHash);
        console.log(now);

        const addr: string = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';
        const balance = await this.api.query.balances.account(addr);
        const nonce = await this.api.query.system.blockHash(addr);
        console.log(`${addr} blance is ${balance},Now blockhash is ${nonce}`);

    }
}
export default new PolkadotConfig();

// export {};