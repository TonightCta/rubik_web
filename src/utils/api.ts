import { ApiPromise } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring'
import { WsProvider } from '@polkadot/rpc-provider';
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { ReactNode } from 'react';
import type { KeypairType } from '@polkadot/util-crypto/types';

interface CreateStepOne {
    mnemonic: string,
    address: string
}

class PolkadotConfig {
    private api: any;
    private url: string = 'ws://3.222.215.241:19944';
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
    public getBlockHash = async () => {//测试
        const defaultChainHash: Promise<ApiPromise> = this.api.genesisHash.toHex();
        const now: Promise<ApiPromise> = await this.api.query.timestamp.now();
        console.log(defaultChainHash);
        console.log(now);
        const addr: string = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';
        const balance = await this.api.query.balances.account(addr);
        // const nonce = await this.api.query.system.blockHash(addr);
        console.log(`${addr} blance is ${balance}`);
        const [chain, nodeName, nodeVersion] = await Promise.all([
            this.api.rpc.system.chain(),
            this.api.rpc.system.name(),
            this.api.rpc.system.version()
        ]);
        console.log(`You are connected to chain ${chain.toString()} using ${nodeName.toString()} v${nodeVersion.toString()}`);
    };
    //创建账户 - step - 1 
    public createWalletOne = async (seedType: number, pairType: any,operType:number,mnemonic?:string) => {
        /**
         * @param seedType 密钥类型  助记词 & 十六进制字符串
         * @param pairType 加密类型  sr25519 & ed25519
        */
        await cryptoWaitReady();
        const PHRASE: string = operType == 1 ? seedType == 1 ? mnemonicGenerate() : 'Wait Raw seend' : String(mnemonic);
        const keyring = new Keyring({ type: 'sr25519' });
        const newPair = keyring.createFromUri(PHRASE, { name: '' }, pairType);
        const stepOneMsg: CreateStepOne = {
            mnemonic: PHRASE,
            address: newPair.address
        }
        return stepOneMsg;
    }
    //创建账户 - step - 2
    public createWalletTwo = async (name: string, password: string, mnemonic: string, pairType: KeypairType) => {
        /**
         * @param name 钱包名称  
         * @param password 钱包密码
         * @param mnemonic 密钥
         * @param pairType 加密类型
        */
        console.log(name)
        console.log(password)
        console.log(mnemonic)
        console.log(pairType)
    }
}
export default new PolkadotConfig();

// export {};