import React from 'react'
import web3 from './web3'
import './wallet.css'
import { MyContext } from './MyContext'

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
            <div className="wallet">
                <p className="heading">Your Wallet</p>             
               

                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            {context.state.statusMsg}
                        </div>                 
                        

                    )}
                </MyContext.Consumer>

                <h4 className="disclamair">Note: Your public and private key pair are married to each other. So, to 
                    work smoothly, dont ever ever have a dispute between them means </h4>
                 <h4 className="warning">   DON'T LOOSE YOUR KEYS!!! </h4>
                  <h4 className="warning ">  THERE IS NO ALTERNATIVE TO SET THE SAME KEY BACK...GOOD LUCK :)
                </h4>
                <p className="keys">Public key: {this.state.publicKey}</p>
                <p className="keys">Private key: {this.state.privateKey}</p>
                <button onClick={this.createAccount} class="btn btn-danger btnKey">Create your own public & private key pair</button>
            </div>
        )
    }
}

export default wallet;