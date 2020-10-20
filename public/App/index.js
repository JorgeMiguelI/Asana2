import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {render} from 'react-dom';
import Login from './login';
import Principal from './principal';
import Registro from './Registro';
import topbar from './topbar';
import MisTareas from './MisTareas';




class App extends Component{

   

    render(){
        return(
            <Router>
                <Route exact path="/" component={Login}/>
                
                <Route path="/principal" component={Principal}/>
                <Route path="/registro" component={Registro}/>
                <Route path="/MisTareas" component={MisTareas}/>
            </Router>
            
        
        )
    }
}
//alert("Hola");
//document.getElementById('layoutSidenav_content').setAttribute("value","Hola");
render(<App/>,document.getElementById('root')); 
