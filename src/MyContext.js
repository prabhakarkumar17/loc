
import React from 'react';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName:localStorage.getItem('name'),
            statusMsg:localStorage.getItem('statusMsg'),
            bankName:localStorage.getItem('bankName')
        }   
    }

    setUserName = (setName) => {
        this.setState({userName: setName })
    }
    setStatusMsg = (msg) => {
        this.setState({statusMsg: msg})
    }
    setBankName = (name) => {
        this.setState({bankName: name})
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.userName !== prevState.userName){
            localStorage.setItem('name',this.state.userName)
        }
        if(this.state.statusMsg !== prevState.statusMsg){
            localStorage.setItem('statusMsg',this.state.statusMsg)
        }
        if(this.state.bankName !== prevState.bankName){
            localStorage.setItem('bankName', this.state.bankName)
        } 
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state,
                setUserName : (name) => this.setUserName(name),
                setStatusMsg : (msg) => this.setStatusMsg(msg),
                setBankName : (bankname) => this.setBankName(bankname)
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}