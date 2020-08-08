import React from 'react'
import { Provider } from './MyContext'

class Parent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        userName: "Prabhakar"
    };
    }
    

    setUserName = newName => {
        this.setState({userName: newName});
    };

    render(){
        return (
            <Provider value = {{
                state: this.state,
                setUserName: e => this.setUserName(e)
            }} >
                {this.props.children}
            </Provider>
        );
    }
}

export default Parent;