import React from 'react'
import web3 from './web3'

class applyLC extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return(
         
          
          <form onSubmit={this.handleSubmit}>
            <h1>{this.state.userName} </h1>
            <h1 className="heading" style={{color:"black",marginLeft:"5px"}}>Apply for Letter of Credit</h1>
            
            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputName">Your Public key</label>
                <input type="text" class="form-control" id="inputName" placeholder="Public key address" 
                onChange={this.handleNameChange} value={this.state.value} />
              </div>

              <div class="form-group col-md-6">
                <label for="inputOrgName">Exporter's Public key</label>
                <input type="text" class="form-control" id="inputOrgName" placeholder="Exporter's Public key address"
                onChange={this.handleOrganizationNameChange} value={this.state.value} />
              </div>

            </div>

            <div class="form-group">

              <label for="inputAddress">Your Bank's Public key</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="Bank's public key address"
              onChange={this.handleAddressChange} value={this.state.value} />
            
            </div>

            <div class="form-group">

              <label for="inputGST">Exporter's Bank Public key</label>
              <input type="text" class="form-control" id="inputGST" placeholder="Exporter's bank public key address" 
              onChange={this.handleGstChange} value={this.state.value} />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Upload Document</label>
              <input type="file" class="form-control" id="inputWorkingDomain" placeholder="Upload relevant document..." 
              onChange={this.handleDomainChange} value={this.state.value} />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Contract Deal</label>
              <input type="file" class="form-control" id="inputWorkingDomain" placeholder="Deal of the contract between Importer and Exporter" 
              onChange={this.handleDomainChange} value={this.state.value} />
  
            </div>            

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        )
    }
}

export default applyLC;