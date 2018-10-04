import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink as RRNavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import './assets/css/common.css';

import Home from './views/Home.js';
import VehicleList from './views/VehicleList';

import InsertVehicleData from './views/InsertVehicleData';
import InsertVehicleType from './views/InsertVehicleType';
import InsertVehicle from './views/InsertVehicle';

import VehicleTypeList from './views/VehicleTypeList';
import ManufacturerList from './views/ManufacturerList';
import UserList from './views/UserList';
import InsurerList from './views/InsurerList';
import DriveDataList from './views/DriveDataList';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
    return (
        <Router>
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to="/">제조사</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/insertVehicleData" tag={RRNavLink}>차량 데이터 등록</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/insertVehicleType" tag={RRNavLink}>차종 등록</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/insertVehicle" tag={RRNavLink}>차량 등록</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/vehicleList" tag={RRNavLink}>차량 조회</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/userList" tag={RRNavLink}>사용자 조회</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/vehicleTypeList" tag={RRNavLink}>차종 조회</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/manufacturerList" tag={RRNavLink}>제조사 조회</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/insurerList" tag={RRNavLink}>보험사 조회</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/driveDataList" tag={RRNavLink}>주행데이터 조회</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Container>
                    <Row>
                        <Col>
                            <div className="content">
                                <Route exact path="/" component={Home} />
                                <Route path="/vehicleList" component={VehicleList} />
                                <Route path="/insertVehicleData" component={InsertVehicleData} />
                                <Route path="/insertVehicleType" component={InsertVehicleType} />
                                <Route path="/insertVehicle" component={InsertVehicle} />

                                <Route path="/userList" component={UserList} />
                                <Route path="/manufacturerList" component={ManufacturerList} />
                                <Route path="/vehicleTypeList" component={VehicleTypeList} />
                                <Route path="/insurerList" component={InsurerList} />
                                <Route path="/driveDataList" component={DriveDataList} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col align="right">
                            <div className="footer small">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        Developed by 여현승, 권혁찬
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  
        </Router>
    );
  }
}

export default App;
