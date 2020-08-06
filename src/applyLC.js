import React from 'react'
import web3 from './web3'
import applyLcContract from './applyLcContract'

class applyLC extends React.Component{
    constructor(props){
        super(props);
        this.state ={
              publicKey: '',
              exporterPublicKey: '',
              bankPublicKey: '',
              exporterBankPublicKey: '',
              documentUpload: '0x6634b88310a558860a6b99Ef00529a6c0371E6c0',
              contractDeal: '0x6634b88310a558860a6b99Ef00529a6c0371E6c0',
              totalAmount: 500
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(
          this.state.publicKey,
          this.state.bankPublicKey,
          this.state.exporterBankPublicKey,
          this.state.exporterPublicKey,
          this.state.totalAmount,
          this.state.contractDeal
        )

        const accounts = await web3.eth.getAccounts();

        const result = await applyLcContract.methods.applyLC(this.state.publicKey, this.state.bankPublicKey,
          this.state.exporterBankPublicKey,
          this.state.exporterPublicKey,
          this.state.totalAmount,
          this.state.contractDeal
        ).send({from: accounts[0]})

        console.log(result);
    }

    handlePublicKey = (event) => {
      event.preventDefault();
      this.setState({publicKey: event.target.value})
    }

    handleExporterPublicKey = (event) => {
      event.preventDefault();
      this.setState({exporterPublicKey: event.target.value})
    }

    handleBankPublicKey = (event) => {
      event.preventDefault();
      this.setState({bankPublicKey: event.target.value})
    }

    handleExporterBankPublicKey = (event) => {
      event.preventDefault();
      this.setState({exporterBankPublicKey: event.target.value})
    }

    handleDocumentChange = (event) => {
      event.preventDefault();
      this.setState({documentUpload: event.target.value})
    }

    handleContractDealChange = (event) => {
      event.preventDefault();
      this.setState({contractDeal: event.target.value})
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
                onChange={this.handlePublicKey} value={this.state.value} />
              </div>

              <div class="form-group col-md-6">
                <label for="inputOrgName">Exporter's Public key</label>
                <input type="text" class="form-control" id="inputOrgName" placeholder="Exporter's Public key address"
                onChange={this.handleExporterPublicKey} value={this.state.value} />
              </div>

            </div>

            <div class="form-group">

              <label for="inputAddress">Your Bank's Public key</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="Bank's public key address"
              onChange={this.handleBankPublicKey} value={this.state.value} />
            
            </div>

            <div class="form-group">

              <label for="inputGST">Exporter's Bank Public key</label>
              <input type="text" class="form-control" id="inputGST" placeholder="Exporter's bank public key address" 
              onChange={this.handleExporterBankPublicKey} value={this.state.value} />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Upload Document</label>
              <input type="file" class="form-control" id="inputWorkingDomain" placeholder="Upload relevant document..." 
              onChange={this.handleDocumentChange} value={this.state.value} />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Contract Deal</label>
              <input type="file" class="form-control" id="inputWorkingDomain" placeholder="Deal of the contract between Importer and Exporter" 
              onChange={this.handleContractDealChange} value={this.state.value} />
  
            </div>            

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        )
    }
}

export default applyLC;