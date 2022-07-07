import React from "react";
import {
    Navbar,
    NavbarBrand,
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
import {Link} from 'react-router-dom';

function NavigationApp() {
    const docs = 'https://help.omegatheme.com/en/category/facebook-events-by-omega-yqc7xu/'
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <div>
            <Navbar color="light" expand="md" light>
                <NavbarBrand href="/">
                    Facebook Events
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                Connect
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle caret nav>
                                Settings
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/general-settings">
                                        General settings
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/label-custom">
                                        Label custom
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/calender-snippet">
                                        Calender snippet
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/advanced-settings">
                                        Advanced settings
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/preview">
                                        Preview
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink tag={Link} to="/events">
                                Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
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
