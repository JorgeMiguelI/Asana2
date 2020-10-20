import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Content from './Content';

export default class Principal extends Component {



    constructor (props){
        super(props);
        
    }

    state={
        show:true,
        component:1
    }

   

    GetClass=()=>{
        return this.state.show ? "sb-sidenav accordion sb-sidenav-dark" : "sb-sidenav accordion sb-sidenav-dark d-none";
    }
    getComponent=()=>{
        return this.state.component;
    }
    ChangeState=()=>{
        var state=!this.state.show;
        this.setState({show:state});
        //alert(this.GetClass());
    }

    render() {
        return (
            <div className="sb-nav-fixed"><nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={this.ChangeState}><i className="fas fa-bars"></i></button>
          
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
           
            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" onClick={()=>{alert(this.state.component);}}>Settings</a>
                        <a className="dropdown-item" href="#">Activity Log</a>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
        
        <div id="layoutSidenav">
    
           
            <div id="layoutSidenav_nav">
                <nav className={this.GetClass()} id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Principal</div>
                            <a className="nav-link" onClick={()=>{this.setState({component:1});}} operacion="1">
                                <div className="sb-nav-link-icon"><i className="fas fa-home"></i></div>
                                Home
                            </a>
                            <a className="nav-link" onClick={()=>{this.setState({component:2});}} operacion="2">
                                <div className="sb-nav-link-icon"><i className="far fa-check-circle"></i></div>
                                Mis Tareas
                            </a>
                            



                            <div className="sb-sidenav-menu-heading">Favoritos</div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="401.html">401 Page</a>
                                            <a className="nav-link" href="404.html">404 Page</a>
                                            <a className="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Informes</div>
                            <div className="sb-sidenav-menu-heading">Equipos</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
    
           
    
            <div id="layoutSidenav_content">
                <Content Component={this.getComponent()}/>
            </div>
            
        </div></div>
        )
    }
}


