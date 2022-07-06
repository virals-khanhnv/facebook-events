import React from 'react';
import './App.css';
import NavigationApp from './components/navigation/NavigationApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainConnect from './components/connect/MainConnect';
import MainSettings from './components/settings/MainSettings';

function App() {
  return (
    <div className='col-12'>
      <div className='row'>
          <Router>
            <div className='col-3 pl-0'>
              <NavigationApp />
            </div>
            <div className='col-8 mt-3'>
              <Routes>
                <Route path='/' element={<MainConnect />}></Route>
                <Route path='/general-settings' element={<MainSettings />}></Route>
              </Routes>
            </div>
          </Router>
      </div>
    </div>
  );
}

export default App;
