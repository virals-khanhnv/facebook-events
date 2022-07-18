import React, {useState} from "react";
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from "reactstrap";
import { Icon } from "@shopify/polaris";
import {Link, useLocation} from 'react-router-dom';
import {
    ConnectMinor,
    SettingsMinor,
    CalendarMinor
  } from '@shopify/polaris-icons';

function NavigationApp() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = useLocation().pathname;
    const list_pathName = [
        '/facebook-events/build/general-settings',
        '/facebook-events/build/label-custom',
        '/facebook-events/build/calender-snippet',
        '/facebook-events/build/advanced-settings',
    ]
    return(
        <div>
            <Navbar color="warning" light expand="md" >
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem className="">
                            <NavLink className={`${pathname === '/facebook-events/build/' ? 'activeLink' : 'inActiveLink'} d-flex float-left`} tag={Link} to="/facebook-events/build/">
                            <Icon
                            source={ConnectMinor}
                            color="base"
                            />
                                Connect Facebook
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle className={`${ list_pathName.includes(pathname) ? 'activeLink' : 'inActiveLink' }   d-flex justify-content-center align-items-center float-left` } caret nav>
                            <Icon
                                source={SettingsMinor}
                                color="base"
                                />
                                Settings
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavLink className={`${pathname === '/facebook-events/build/general-settings' ? 'activeLink' : 'inActiveLink'}`} tag={Link} to="/facebook-events/build/general-settings">
                                        General settings
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink className={`${pathname === '/facebook-events/build/label-custom' ? 'activeLink' : 'inActiveLink'}`} tag={Link} to="/facebook-events/build/label-custom">
                                        Label custom
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink className={`${pathname === '/facebook-events/build/calender-snippet' ? 'activeLink' : 'inActiveLink'}`} tag={Link} to="/facebook-events/build/calender-snippet">
                                        Calender snippet
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink className={`${pathname === '/facebook-events/build/advanced-settings' ? 'activeLink' : 'inActiveLink'}`} tag={Link} to="/facebook-events/build/advanced-settings">
                                        Advanced settings
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink className={`${pathname === '/facebook-events/build/events' ? 'activeLink' : 'inActiveLink'} d-flex float-left`} tag={Link} to="/facebook-events/build/events">
                            <Icon
                                source={CalendarMinor}
                                color="base"
                                />
                                Events
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationApp;
