import React, { ReactNode } from 'react';
import './App.css';
import './assets/css/reset.css'
import RouteConfig from './route/route';
import MenuHeader from './components/menu_header';
import './app.scss'
import LeftMenu from './components/LeftMenu/index';

const App = (): React.ReactElement<ReactNode> => {
  return (
    <div className="App">
      {/* 头部导航 */}
      <MenuHeader/>
      <div className='content-box'>
        <LeftMenu/>
        <div className='view-box'>
          <RouteConfig />
        </div>
      </div>
    </div>
  );
}

export default App;
