import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom'
require('./index.scss')

const IndexView = (): React.ReactElement<ReactNode> => {
    return (
        <div className='index-view'>
            <p>首页</p>
            <p>首页</p>
            <div className='router-view'>
                <Outlet />
            </div>
        </div>
    )
};

export default React.memo(IndexView);