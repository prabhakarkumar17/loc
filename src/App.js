import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import AppCss from './App.css';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            registerStatus: false   
        }
    }
    updateStatus(status){
        this.setState({registerStatus : status});
    }

    render() {         
        if(!this.state.registerStatus){
            return <Login data={
                {
                    registerStatus : this.state.registerStatus,
                    updateStatus : this.updateStatus.bind(this)
                }
            } />
        } else {
            return <Register data={
                {
                    registerStatus : this.state.registerStatus,
                    updateStatus : this.updateStatus.bind(this)
                }
            } />
        }
    }
}

// const image = { uri: "https://reactjs.org/logo-og.png" };

// class App extends Component{    
//     render(){
//         return(
//             <div>     
//                 <ImageBackground source= {image} />         
//                 <Login />                
//             </div>            
//         );
//     }
// }

export default App;