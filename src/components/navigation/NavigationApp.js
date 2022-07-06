import React from "react";
import './NavigationApp.scss';
import { Link } from 'react-router-dom';

function NavigationApp() {
    return (
        <div role="navigation">
            <div id="clickNav">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="nav-data">
                    <li>
                        <Link className="nav-link" to='/' >Connect</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/general-settings">Settings</Link>
                        <ul className="child__list">
                            <li>
                                <Link className="nav-link" to="/general-settings">General settings</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/label-custom">Label custom</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/calender-snippet">Calender snippet</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/advanced-settings">Advanced settings</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/preview">Preview</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li>
                        <a href="https://help.omegatheme.com/en/category/facebook-events-by-omega-yqc7xu/" data-title="Docs" aria-label="Docs">Our Document</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationApp;
