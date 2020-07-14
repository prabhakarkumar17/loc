import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import AppCss from './App.css';

//import NavBar from './navBar';


// const App = (props) => {
//     console.log(props.registerStatus);
// }

class App extends Component{

    
    render(){
        return(
            <div>                
                <Login />
            </div>            
        );
    }
}

export default App;