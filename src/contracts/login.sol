pragma solidity ^0.4.25;

contract login{
   
    struct customer{
               
        string name;
        string email;
        string occupation;
        int256 contact;
        string password;
        string confirmPassword;
        Status status;
    }
   
    mapping(string => customer) userId;
   
    enum Status {success, failed}
   
    function setCustomerDetails (string memory _name, string memory _email, string memory _occupation, int _contact,
                string memory _password, string memory _confirmPassword) public returns(string memory email, string memory password){
                   
                    userId[email].name = _name;
                    userId[email].email = _email;
                    userId[email].occupation = _occupation;
                    userId[email].contact = _contact;
                    userId[email].password = _password;
                    userId[email].confirmPassword = _confirmPassword;
                   
                   
                    return (userId[email].email, userId[email].password);
                }
        
    function validate(string memory email, string memory password) public returns(Status status){
        if(keccak256(abi.encodePacked(userId[email].password))  == keccak256(abi.encodePacked(password))){
           
            return userId[email].status = Status.success;
        } else {
           
            return userId[email].status = Status.failed;
        }
    }
   
   
   
}