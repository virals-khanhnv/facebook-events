import React from 'react';
import './App.css';
import './assets/scss/Styles.scss';
import NavigationApp from './components/navigation/NavigationApp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainConnect from './components/connect/MainConnect';
import GeneralSettings from './components/settings/GeneralSettings';
import LabelCustom from './components/settings/LabelCustom';
import CalendarSnippet from './components/settings/CalendarSnippet';
import AdvancedSettings from './components/settings/AdvancedSettings';
import MainPreview from './components/settings/MainPreview';
import MainEvents from './components/events/MainEvents';

function App() {
    return (
        <div className='app'>
            <Router>
                <div className='col-12 mt-3'>
                    <NavigationApp/>
                    <Routes>
                        <Route path='/'
                            element={<MainConnect/>}></Route>
                        <Route path='/general-settings'
                            element={<GeneralSettings/>}></Route>
                        <Route path='/label-custom'
                            element={<LabelCustom/>}></Route>
                        <Route path='/calender-snippet'
                            element={<CalendarSnippet/>}></Route>
                        <Route path='/advanced-settings'
                            element={<AdvancedSettings/>}></Route>
                        <Route path='/preview'
                            element={<MainPreview/>}></Route>
                        <Route path='/events'
                        element={<MainEvents/>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
