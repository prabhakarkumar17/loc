 pragma solidity ^0.4.25;

contract login {
   
    struct customer {
       
        string name;
        string email;
        string occupation;
        uint contact;
        string password;
        string confirmPassword;
        Status status;
    }
    
    struct bank {
        string bankName;
        string branchName;
        string bankAddress;
        string Id;
        string bankPassword;
        string confirmBankPassword;
        bankStatus bs;
        
    }
   
    mapping(string => customer) userId;
    mapping(string => bank) bankId;
   
    enum Status {success, failed}
    enum bankStatus { success, failed }
    
    event checkLogin(Status, string);
    event checkBankLogin (bankStatus, string);
   
    function setCustomerDetails (string memory _name, string memory _email, string memory _occupation, uint _contact, string memory _password, string memory _confirmPassword) public {
                   
                    userId[_email].name = _name;
                    userId[_email].email = _email;
                    userId[_email].occupation = _occupation;
                    userId[_email].contact = _contact;
                    userId[_email].password = _password;
                    userId[_email].confirmPassword = _confirmPassword;
                   
                    //emit checkRegister ( userId[_email].name, )
                   
                    //return (userId[email].email, userId[email].password);
                }
                
    function setBankDetails(string memory _name, string memory _branch, string memory _bankAddress, string memory _id, string memory _password, string memory _confirmPassword) public {
                    
                    bankId[_id].Id = _id;
                    bankId[_id].bankName = _name;
                    bankId[_id].branchName = _branch;
                    bankId[_id].bankPassword = _password;
                    bankId[_id].bankAddress = _bankAddress;
                    bankId[_id].confirmBankPassword = _confirmPassword;
                    
    }
   
    //  function getCustomerDetails (string memory _email) public view returns(string memory _name, string memory _occupation,
    //     uint _contact , string memory _password, string memory _confirmPassword)  {
           
    //         return (
    //                 userId[_email].name,
    //                 userId[_email].occupation,
    //                 userId[_email].contact,
    //                 userId[_email].password,
    //                 userId[_email].confirmPassword
    //             );bankName
           
    //     }
       
    function userValidate(string memory email, string memory password) public {        
        if(keccak256(abi.encodePacked(userId[email].password)) == keccak256(abi.encodePacked(password))){
           emit checkLogin(Status.success, userId[email].name);
        } else {
           emit checkLogin(Status.failed, userId[email].name);
        }
    }
    
    function bankValidate(string memory _id, string memory givenBankPassword) public {
        
        if(keccak256(abi.encodePacked(bankId[_id].bankPassword)) == keccak256(abi.encodePacked(givenBankPassword))) {
            emit checkBankLogin(bankStatus.success, bankId[_id].bankName);
        } else {
            emit checkBankLogin(bankStatus.failed, bankId[_id].bankName);
        }
    }
}