import React, { ReactNode } from "react";
import { Routes, Route } from 'react-router-dom';
import * as View from '../views/view';

const RouteConfig = (): React.ReactElement<ReactNode> => {
    return (
        <Routes>
            <Route path="/" element={<View.AccountView />}>
                <Route index element={<View.MyAccount />}></Route>
            </Route>
            <Route path="/settings" element={<View.SettingView />}>
                <Route index element={<View.Gneral />}></Route>
            </Route>
        </Routes>
    )
};

export default RouteConfig;
