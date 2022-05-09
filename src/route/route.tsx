import React, { ReactNode } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import * as View from '../views/view';

const RouteConfig = (): React.ReactElement<ReactNode> => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<View.AccountView />}>
                    <Route index element={<View.MyAccount />}></Route>
                </Route>
                <Route path="/setting" element={<View.SettingView />}>
                    <Route index element={<View.Gneral />}></Route>
                </Route>
            </Routes>
        </HashRouter>
    )
};

export default RouteConfig;
