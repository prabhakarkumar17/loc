import React, { Component } from 'react'
import Login from './login'
import Register from './register'
import './App.css'
import Tag from './tagLine'
import NAVBAR from './navBar'
import Profile from './profile' 
import BankLogin from './bank'
import BankRegister from './bankRegister'
import ProfileNavBar from './profileNavBar'
import BankNavBar from './bankNavBar'
import MyProfile from './myProfile'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
    
    render(){
               return(
                   <div >
                <BrowserRouter>            
                    <Route path="/" exact render = {props => 
                            <div className="container-fluid">
                                <NAVBAR />
                                <Tag />
                                <Login/>
                            </div>
                    } />

                    <Route path="/Register" exact render = {props => 
                        <div className="container-fluid">
                            <NAVBAR />
                            <Tag />
                            <Register />
                        </div>
                    } />
                    
                    <Route path="/BankLogin" exact render = {props => 
                            <div className="container-fluid">
                                <NAVBAR />
                                <Tag />
                                <BankLogin />
                            </div>
                    } />

                    <Route path="/BankRegister" exact render = {props => 
                            <div className="container-fluid">
                                <NAVBAR />
                                <Tag />
                                <BankRegister />
                            </div>
                    } />

                    <Route path='/userProfile' render = {props =>
                            <div>
                                <ProfileNavBar />
                            </div>
                    } />

                    <Route path='/userProfile/myProfile' render = {props => 
                            <div>
                                <MyProfile />
                            </div>
                    } />

                    <Route path='/BankLogin/bankProfile' render = {props => 
                            <div>
                                <BankNavBar />
                            </div>
                    } />
                </BrowserRouter>
                </div>
               ) 
            }
            
        
    }





// class App extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             registerStatus: false,
//             profileStatus: false
//         }
//     }
//     updateStatus(status){
//         this.setState({registerStatus : status});
//     }

//     updateProfile(status){
//         this.setState({profileStatus : status});
//     }

//     render() {     
//         if(this.state.profileStatus){
//             return (
//                 <div className='container'>
//                     <Profile />
//                 </div>
//             )                
//         }    

//         else if(!this.state.registerStatus){
//             return ( 
//             <div className='container'>
//                 <BrowserRouter >
//                 <Tag />
//                 <Login data={
//                 {
//                     registerStatus : this.state.registerStatus,
//                     updateStatus : this.updateStatus.bind(this),
//                     profileStatus : this.state.profileStatus,
//                     updateProfile : this.updateProfile.bind(this)
//                 }
//                 } />

//                 <Route path="/register" exact component={Register} />

//                 </BrowserRouter>

//             </div>
//             )
//         } else {
//             return(
//                 <div className='container'>
 
//                 <Tag />
//                 <Register data={
//                 {
//                     registerStatus : this.state.registerStatus,
//                     updateStatus : this.updateStatus.bind(this)
//                 }
//             } />
//                 </div>
//             ) 
//         }
//     }
// }

export default App;