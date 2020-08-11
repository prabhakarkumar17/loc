import React from 'react';
import './myProfile.css'
import profileContract from './profileContract'
import web3 from './web3'

class bankProfile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          
        }
    }

    handleSubmit = async (event) => {
      event.preventDefault();
    }

    handleNameChange = (event) => {
      event.preventDefault();
      this.setState({name: event.target.value});
    }

    handleBranchNameChange = (event) => {
      event.preventDefault();
      this.setState({branchName: event.target.value});
    }
    
    handleAddressChange = (event) => {
      event.preventDefault();
      this.setState({add: event.target.value});
    }

    handleIFSCCodeChange = (event) => {
      event.preventDefault();
      this.setState({gst: event.target.value});
    }

    handleDomainChange = (event) => {
      event.preventDefault();
      this.setState({domain: event.target.value});
    }

    handleCityChange = (event) => {
      event.preventDefault();
      this.setState({city: event.target.value});
    }

    handleStateChange = (event) => {
      event.preventDefault();
      this.setState({district: event.target.value});
    }

    handleZipChange = (event) => {
      event.preventDefault();
      this.setState({zip: event.target.value});
    }

    render(){
        return(
         
          
          <form onSubmit={this.handleSubmit} className="profileForm">
            <h1 className="heading" style={{color:"black",marginLeft:"5px"}}>Bank profile</h1>
            
            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputName">Bank Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Name of Bank" 
                onChange={this.handleNameChange} value={this.state.value} />
              </div>

              <div class="form-group col-md-6">
                <label for="inputOrgName">Branch Name</label>
                <input type="text" class="form-control" id="inputOrgName" placeholder="Enter name of branch"
                onChange={this.handleBranchNameChange} value={this.state.value} />
              </div>

            </div>

            <div class="form-group">

              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
              onChange={this.handleAddressChange} value={this.state.value} />
            
            </div>

            <div class="form-group">

              <label for="inputGST">IFSC Code</label>
              <input type="text" class="form-control" id="inputGST" placeholder="ABCN000001" 
              onChange={this.handleIFSCCodeChange} value={this.state.value} />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Your Public key address</label>
              <input type="text" class="form-control" id="inputWorkingDomain" placeholder="0x1a4Bb2F80fDf3806E5872f43D36bCEA278A8181D" 
              onChange={this.handleDomainChange} value={this.state.value} />
  
            </div>

            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" placeholder="Enter City name"
                onChange={this.handleCityChange} value={this.state.value} />    
              </div>

              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" id="inputState" class="form-control" placeholder="Enter State name"
                onChange={this.handleStateChange} value={this.state.value} />
              </div>

              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="number" class="form-control" id="inputZip" placeholder="Pincode"
                onChange={this.handleZipChange} value={this.state.value} />
              </div>

            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        )
    }
}

export default bankProfile;
