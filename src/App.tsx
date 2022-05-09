import React, { ReactNode } from 'react';
import './App.css';
import RouteConfig from './route/route';
import './app.scss'
import LeftMenu from './components/LeftMenu/index';

const App = (): React.ReactElement<ReactNode> => {
  return (
    <div className="App">
      <div className='header'>
        头部
      </div>
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
