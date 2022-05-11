import React, { ReactNode } from "react";
import { Routes, Route } from 'react-router-dom';
import * as View from '../views/view';

const RouteConfig = (): React.ReactElement<ReactNode> => {
    return (
        <Routes>
            <Route path="/" element={<View.AccountView />}>
                <Route index element={<View.MyAccount />}></Route>
            </Route>
            <Route path="/explorer" element={<View.ExplorerView />}>
                <Route path="/explorer/chain-info" element={<View.ChainInfo />}></Route>
                <Route path="/explorer/block-details" element={<View.BlockDetail />}></Route>
                <Route path="/explorer/forks" element={<View.Forks />}></Route>
                <Route path="/explorer/total-storage" element={<View.TotalStorage />}></Route>
            </Route>
            <Route path="/staking" element={<View.StakingView />}>
                <Route path="/staking/overview" element={<View.Overview />}></Route>
                <Route path="/staking/waiting" element={<View.Waiting />}></Route>
                <Route path="/staking/account-actions" element={<View.AccountActions />}></Route>
                <Route path="/staking/target" element={<View.Target />}></Route>
                <Route path="/staking/payouts" element={<View.Payouts />}></Route>
                <Route path="/staking/slashes" element={<View.Slashes />}></Route>
                <Route path="/staking/guardian-stats" element={<View.GuardianStats />}></Route>
            </Route>
            <Route path="/chain-state" element={<View.ChainStateView />}>
                <Route path="/chain-state/chain-stotage" element={<View.ChainStorage />}></Route>
                <Route path="/chain-state/contants" element={<View.Contants />}></Route>
                <Route path="/chain-state/raw-storage" element={<View.RawStorage />}></Route>
            </Route>
            <Route path="/extrinsics" element={<View.ExtrinsicsView/>}>
                <Route path="/extrinsics/submission" element={<View.Submission/>}></Route>
            </Route>
            <Route path="/settings" element={<View.SettingView />}>
                <Route path="/settings/general" element={<View.Gneral />}></Route>
            </Route>
        </Routes>
    )
};

export default RouteConfig;
