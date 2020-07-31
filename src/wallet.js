import React from 'react'
import web3 from './web3'

class wallet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            publicKey:'Not Created',
            privateKey:'Not Created'
        }
    }

    createAccount = async (event) => {
        event.preventDefault();
        var acc = await web3.eth.accounts.create();
        console.log(acc.address,acc.privateKey);
        this.setState({publicKey: acc.address});
        this.setState({privateKey: acc.privateKey});
    }

    render(){
        return(
            <div className="profile">
                <h4>Note: Your public and private key pair are marraied to each other. So, to 
                    work smoothly, dont ever ever have a dispute between them means DON'T LOOSE YOUR KEYS!!!
                    THERE IS NO ALTERNATIVE...GOOD LUCK 
                </h4>
                <p>Public key: {this.state.publicKey}</p>
                <p>Private key: {this.state.privateKey}</p>
                <button onClick={this.createAccount} class="btn btn-primary">Create your own public & private key pair</button>
            </div>
        )
    }
}

export default wallet;