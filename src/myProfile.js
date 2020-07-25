import React from 'react';
import './myProfile.css'

class myProfile extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return(
         
          
          <form>
            <h1 className="heading" style={{color:"black",marginLeft:"5px"}}>Update your profile</h1>
            
            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputName">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Name" />
              </div>

              <div class="form-group col-md-6">
                <label for="inputOrgName">Organization Name</label>
                <input type="text" class="form-control" id="inputOrgName" placeholder="Enter Organization Name" />
              </div>

            </div>

            <div class="form-group">

              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            
            </div>

            <div class="form-group">

              <label for="inputGST">GST Number</label>
              <input type="text" class="form-control" id="inputGST" placeholder="29AAACC1206D2ZB" />
  
            </div>

            <div class="form-group">

              <label for="inputWorkingDomain">Working Domain</label>
              <input type="text" class="form-control" id="inputWorkingDomain" placeholder="Field of Work" />
  
            </div>

            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />    
              </div>

              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" id="inputState" class="form-control" />
              </div>

              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="number" class="form-control" id="inputZip" />
              </div>

            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        )
    }
}

export default myProfile;



// <div className="col-md-4" >
// <p className="heading">Update your profile </p>

// <form >
//     <div className="form-group">
//         <label for="exampleInputEmail1">Name</label>
//         <input type="email" name="email" placeholder="Email address"
//                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//     </div>

//     <div className="form-group">
//         <input type="password" name="password" placeholder="Password" 
//                className="form-control" id="exampleInputPassword1" />
//     </div>

//     <button type="submit" className="btn btn-primary submitBtn">Submit</button>
//     </form>



// </div>