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
import {Link, useLocation} from 'react-router-dom';

function NavigationApp() {
    const docs = 'https://help.omegatheme.com/en/category/facebook-events-by-omega-yqc7xu/'
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
            <Navbar color="light" className="nav_main" expand="md" light>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink className={`${pathname === '/facebook-events/build/' ? 'activeLink' : 'inActiveLink'}`} tag={Link} to="/facebook-events/build/">
                                Connect Facebook
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle className={`${ list_pathName.includes(pathname) ? 'activeLink' : 'inActiveLink' }`} caret nav>
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
                            <NavLink className={`${pathname === '/facebook-events/build/events' ? 'activeLink' : 'inActiveLink'}`} tag={Link} to="/facebook-events/build/events">
                                Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link_bank_docs">
                                <a target="__blank" href={docs}>Our Document</a>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationApp;
