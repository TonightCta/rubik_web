import React, { ReactNode } from 'react';
import './App.css';
import RouteConfig from './route/route';
import './app.scss'

const App = (): React.ReactElement<ReactNode> => {
  return (
    <div className="App">
      <div className='header'>
        头部
      </div>
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
