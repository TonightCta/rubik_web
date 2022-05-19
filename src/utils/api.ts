import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { HeaderExtendedWithMapping } from "../typing/apiType";
import { ReactNode } from "react";
import { numFun } from "./filter";
import { Keyring } from '@polkadot/keyring'
import store from "../store";
import {
    cryptoWaitReady,
    mnemonicGenerate,
    randomAsHex,
} from "@polkadot/util-crypto";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import type { KeypairType } from "@polkadot/util-crypto/types";
import keyring from "@polkadot/ui-keyring";

interface CreateStepOne {
    mnemonic: string;
    address: string;
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
                keyring.loadAll({
                    genesisHash: this.api.genesisHash,
                    type: "sr25519",
                    ss58Format: 42,
                });
            };
        initPolkadotConfing();
    }
    public initKeyring = async () => {
        keyring.loadAll({
            genesisHash: this.api.genesisHash,
            type: "sr25519",
            ss58Format: 42,
        });
    };
    public getBlockHash = async () => {
        //测试
        const defaultChainHash: string = await this.api.genesisHash.toHex();
        const now = await this.api.query.timestamp.now();
        console.log(defaultChainHash);
        console.log(now);
        const addr: string = "5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE";
        const balance = await this.api.query.balances.account(addr);
        // const nonce = await this.api.query.system.blockHash(addr);
        console.log(`${addr} blance is ${balance}`);
        const [chain, nodeName, nodeVersion] = await Promise.all([
            (<any>this.api.rpc).system.chain(),
            (<any>this.api.rpc).system.name(),
            (<any>this.api.rpc).system.version(),
        ]);
        console.log(
            `You are connected to chain ${chain.toString()} using ${nodeName.toString()} v${nodeVersion.toString()}`
        );
    };
    //创建账户 - step - 1
    public createWalletOne = async (
        seedType: number,
        pairType: any,
        operType: number,
        mnemonic?: string
    ) => {
        /**
         * @param seedType 密钥类型  助记词 & 十六进制字符串
         * @param pairType 加密类型  sr25519 & ed25519
         */
        // await cryptoWaitReady();
        // const keyring = new Keyring({ type: 'sr25519' })
        const PHRASE: string =
            operType == 1
                ? seedType == 1
                    ? mnemonicGenerate(12)
                    : randomAsHex(32)
                : String(mnemonic);
        console.log(keyring);
        console.log(keyring.createFromUri);
        const newPair = keyring.createFromUri(PHRASE, { name: "" }, pairType);
        const stepOneMsg: CreateStepOne = {
            mnemonic: PHRASE,
            address: newPair.address,
        };
        return stepOneMsg;
    };
    //创建账户 - step - 2
    public createWalletTwo = async (
        address: string,
        walletName: any,
        password: any,
        mnemonic: string,
        pairType: KeypairType
    ) => {
        // console.log(this.api)
        cryptoWaitReady().then(() => {
            /**
             * @param walletName 钱包名称
             * @param password 钱包密码
             * @param mnemonic 密钥
             * @param pairType 加密类型
             */
            console.log(walletName);
            console.log(password);
            console.log(mnemonic);
            console.log(pairType);
            // const keyring = new Keyring();
            const tags: [] = [];
            const genesisHash = this.api.genesisHash.toString();
            console.log(genesisHash);

            const setPair = keyring.addUri(
                mnemonic,
                password,
                { genesisHash, isHardware: false, walletName, tags },
                pairType
            );
            console.log(setPair);
            return setPair;
        });
    };
    // 获取chain_info 页面数据
    public getChainInfoList = async () => {
        // 建立连接并获取ws msg
        // const dispatch = useDispatch()

        this.api.derive.chain.subscribeNewHeads(
            async (lastHeader: any): Promise<any> => {
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
                        isAuthorMappingWithDeposit &&
                        (hasConsensusDigest || hasPreRuntimeDigest)
                    ) {
                        // Check for a Digest
                        // Some blockchains such as Moonbeam need to fetch the author accountId from a mapping
                        const optMap: any =
                            await this.api.query.authorMapping.mappingWithDeposit(
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
                store.dispatch({
                    type: "chainInfoList/unshiftChainInfoList",
                    payload: lastHeaders,
                });
            }
        );
    };
    //发生转账
    public sendTransfer = async () => {
        console.log(this.api.tx.balances)
    };
    // Staking Info
    public getStakingInfo = async () => {
        // const result = await this.api.derive.staking.overview;
        // console.log(result);
        
    }
}

export default new PolkadotConfig();

// export {};
