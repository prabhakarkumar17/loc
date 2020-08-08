
import React from 'react';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName:localStorage.getItem('name'),
            statusMsg:localStorage.getItem('statusMsg')
        }   
    }
    setUserName = (setName) => {
        this.setState({userName: setName })
    }
    setStatusMsg = (msg) => {
        this.setState({statusMsg: msg})
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.userName !== prevState.userName){
            localStorage.setItem('name',this.state.userName)
        }
        if(this.state.statusMsg !== prevState.statusMsg){
            localStorage.setItem('AppStatus',this.state.statusMsg)
        }
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state,
                setUserName : (name) => this.setUserName(name),
                setStatusMsg : (msg) => this.setStatusMsg(msg)
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}