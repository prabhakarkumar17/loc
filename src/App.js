import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import './App.css';
import Tag from './tagLine';
import Nav from './navBar';

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
            return ( 
            <div className='container'>

                <Tag />
                <Login data={
                {
                    registerStatus : this.state.registerStatus,
                    updateStatus : this.updateStatus.bind(this)
                }
                } />
            </div>
            )
        } else {
            return(
                <div className='container'>
 
                <Tag />
                <Register data={
                {
                    registerStatus : this.state.registerStatus,
                    updateStatus : this.updateStatus.bind(this)
                }
            } />
                </div>
            ) 
        }
    }
}

export default App;