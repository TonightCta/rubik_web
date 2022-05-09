import React, { ReactNode } from 'react';
import './App.css';
import './assets/css/reset.css'
import RouteConfig from './route/route';
import MenuHeader from './components/menu_header';
import './app.scss'

const App = (): React.ReactElement<ReactNode> => {
  return (
    <div className="App">
      {/* 头部导航 */}
      <MenuHeader/>
      <div className='content-box'>
        <div className='menu'>
          菜单
        </div>
        <div className='view-box'>
          <RouteConfig />
        </div>
      </div>
    </div>
  );
}

export default App;
