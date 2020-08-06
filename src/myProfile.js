import React from 'react';
import './myProfile.css'
import profileContract from './profileContract'
import web3 from './web3'

class myProfile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          name: '',
          organizationName: '',
          add: '',
          gst: '',
          domain: '',
          city: '',
          district: '',
          zip: 0,
          userName:''
        }
    }

    handleSubmit = async (event) => {
      event.preventDefault();
      console.log(
        this.state.name,
        this.state.organizationName,
        this.state.add,
        this.state.gst,
        this.state.domain,
        this.state.city,
        this.state.district,
        this.state.zip
      )
      const accounts = await web3.eth.getAccounts();

      const result = await profileContract.methods.setDetail(
        this.state.name,
        this.state.organizationName,
        this.state.add,
        this.state.gst,
        this.state.domain,
        this.state.city,
        this.state.district,
        this.state.zip
      ).send({from: accounts[0] });

      var key = result.events.idName.returnValues;
      console.log(key[0]);
      this.setState({userName: key[0]});
    }

    handleNameChange = (event) => {
      event.preventDefault();
      this.setState({name: event.target.value});
    }

    handleOrganizationNameChange = (event) => {
      event.preventDefault();
      this.setState({organizationName: event.target.value});
    }
    
    handleAddressChange = (event) => {
      event.preventDefault();
      this.setState({add: event.target.value});
    }

    handleGstChange = (event) => {
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
            <h1>{this.state.userName} </h1>
            <h1 className="heading" style={{color:"black",marginLeft:"5px"}}>Update your profile</h1>
            
            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputName">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Name" 
                onChange={this.handleNameChange} value={this.state.value} />
              </div>

              <div class="form-group col-md-6">
                <label for="inputOrgName">Organization Name</label>
                <input type="text" class="form-control" id="inputOrgName" placeholder="Enter Organization Name"
                onChange={this.handleOrganizationNameChange} value={this.state.value} />
              </div>

            </div>

            <div class="form-group">

              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
              onChange={this.handleAddressChange} value={this.state.value} />
            
            </div>

            <div class="form-group">

              <label for="inputGST">GST Number</label>
              <input type="text" class="form-control" id="inputGST" placeholder="29AAACC1206D2ZB" 
              onChange={this.handleGstChange} value={this.state.value} />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Working Domain</label>
              <input type="text" class="form-control" id="inputWorkingDomain" placeholder="Field of Work" 
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

export default myProfile;
