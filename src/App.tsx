import React, { ReactNode,useEffect } from 'react';
import './App.css';
import './assets/css/reset.css'
import RouteConfig from './route/route';
import MenuHeader from './components/menu_header';
import './app.scss'
import LeftMenu from './components/left_menu/index';
import { HashRouter, useNavigate } from 'react-router-dom';

const App = (): React.ReactElement<ReactNode> => {
  
  return (
    <HashRouter>
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
    </HashRouter>
    
  );
}

export default App;
