import React from 'react';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName:'Ankit'
        }   
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state,
                setUserName : (name) => {
                    this.setState({userName: name})
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}