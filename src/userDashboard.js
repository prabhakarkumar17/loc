import React from 'react'
import {MyContext} from './MyContext'
import './userDashboard.css'

class userDashboard extends React.Component{
    render(){
        return(
            <div className="dashboard">
                <h2 className="dashboardHeading">Your Activity</h2>
                

                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            <h3 className="status">Status : {context.state.statusMsg}</h3>
                        </div>       
                    
                    )}
                </MyContext.Consumer>

            </div>
        )
    }
}

export default userDashboard;