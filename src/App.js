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
import CatchChangeToSave from './components/catchChangeToSave/CatchChangeToSave';
import { useSelector } from 'react-redux';

function App() {
    const {statusNavbar} = useSelector((state) => ({...state.data}));
    return (
        <div className='app'>
            {
                statusNavbar ? <CatchChangeToSave /> : ''
            }
            <Router>
                <div className='col-12'>
                    <NavigationApp/>
                    <Routes>
                        <Route path='/facebook-events/build/'
                            element={<MainConnect/>}></Route>
                        <Route path='/facebook-events/build/general-settings'
                            element={<GeneralSettings/>}></Route>
                        <Route path='/facebook-events/build/label-custom'
                            element={<LabelCustom/>}></Route>
                        <Route path='/facebook-events/build/calender-snippet'
                            element={<CalendarSnippet/>}></Route>
                        <Route path='/facebook-events/build/advanced-settings'
                            element={<AdvancedSettings/>}></Route>
                        <Route path='/facebook-events/build/preview'
                            element={<MainPreview/>}></Route>
                        <Route path='/facebook-events/build/events'
                        element={<MainEvents/>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
