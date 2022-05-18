import { ApiPromise } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import keyring from '@polkadot/ui-keyring'
import { WsProvider } from '@polkadot/rpc-provider';
import { cryptoWaitReady, mnemonicGenerate, randomAsHex } from '@polkadot/util-crypto';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { ReactNode } from 'react';
import type { KeypairType } from '@polkadot/util-crypto/types';
import { isWasm } from '@polkadot/util';

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
    public initKeyring = async () => {
        keyring.loadAll({
            genesisHash: this.api.genesisHash,
            type: 'sr25519',
            ss58Format: 42,
        })
    }
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
    public createWalletOne = async (seedType: number, pairType: any, operType: number, mnemonic?: string) => {
        /**
         * @param seedType 密钥类型  助记词 & 十六进制字符串
         * @param pairType 加密类型  sr25519 & ed25519
        */
        // await cryptoWaitReady();
        // const keyring = new Keyring({ type: 'sr25519' })
        const PHRASE: string = operType == 1 ? seedType == 1 ? mnemonicGenerate(12) : randomAsHex(32) : String(mnemonic);
        console.log(keyring)
        console.log(keyring.createFromUri)
        const newPair = keyring.createFromUri(PHRASE, { name: '' }, pairType);
        const stepOneMsg: CreateStepOne = {
            mnemonic: PHRASE,
            address: newPair.address
        }
        return stepOneMsg;

    }
    //创建账户 - step - 2
    public createWalletTwo = async (address: string, walletName: any, password: any, mnemonic: string, pairType: KeypairType) => {
        // console.log(this.api)
        cryptoWaitReady().then(() => {
            /**
             * @param walletName 钱包名称  
             * @param password 钱包密码
             * @param mnemonic 密钥
             * @param pairType 加密类型
            */
            console.log(walletName)
            console.log(password)
            console.log(mnemonic)
            console.log(pairType);
            // const keyring = new Keyring();
            const tags: [] = [];
            const genesisHash = this.api.genesisHash.toString();
            console.log(genesisHash)

            const setPair = keyring.addUri(mnemonic, password, { genesisHash, isHardware: false, walletName, tags }, pairType);
            // return setPair;
        })
    };
    // 获取账户列表

}
export default new PolkadotConfig();

// export {};