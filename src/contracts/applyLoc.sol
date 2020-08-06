pragma solidity ^0.4.25;

contract letterOfCredit {
    struct apply{
        address applicant;
        address exporter;
        address applicantBank;
        address exporterBank;
        string document;
        uint totalAmount;
        string dealContract;
       
        LCStatus status;
        DocVerify statusDoc;
    }
    
    
    enum LCStatus { Applied, ApplicantBankAccepted, ExporterBankAccepted, ExporterAccepted, ItemsShipped, ExporterPaid, ExporterBankPaid, ApplicantBankPaid, Accomplished }
    enum DocVerify { Verified, NotVerified}
    
    event checkStatus(LCStatus);
    event checkAddress(address);
    
    uint totalAmount;
    //uint defectCharges;
    
    mapping (address => apply) loc;
    mapping(address => uint) balances;
    
    // this function is for applying for letterOfCredit
    function applyLC(address _applicant, address _applicantBank, address _exporterBank, address _exporter, uint _totalAmount, string memory _dealContract) public {
       // if(msg.sender != _applicant)  revert();
        
        // else save entries
       loc[_applicant].applicant = _applicant;
       loc[_applicant].applicantBank = _applicantBank;
       loc[_applicant].exporterBank = _exporterBank;
       loc[_applicant].exporter = _exporter;
       loc[_applicant].totalAmount = _totalAmount;
       loc[_applicant].dealContract = _dealContract;
        
        // initial status
        loc[_applicant].status = LCStatus.Applied;
        
    }
    
    function getApplicant(address _applicant) public{
        emit checkAddress(loc[_applicant].applicant);
    }
    
    function getApplicantBank(address _applicant) public{
        emit checkAddress(loc[_applicant].applicantBank);
    }
    
    function getExporter(address _applicant) public{
        emit checkAddress(loc[_applicant].exporter);
    }
    
    function getExporterBank(address _applicant) public{
        emit checkAddress(loc[_applicant].exporterBank);
    }
    
    function getStatus(address _applicant) public{
        emit checkStatus(loc[_applicant].status);
    }
    
    //applicant bank receives the request and they can further accept or reject it
    function applicantBankAccepts(address _applicant, bool success) public {
        //if(msg.sender != applicantBank) revert();
        
        if(success){
            loc[_applicant].status = LCStatus.ApplicantBankAccepted;
            
        }
        // } else {
        //     revert();
        // }
    }
    
    
    function exporterBankAccepts(address _applicant, bool success) public {
        //if(msg.sender != exporterBank) revert();
        
        if(loc[_applicant].status == LCStatus.ApplicantBankAccepted){
            if(success){
            loc[_applicant].status = LCStatus.ExporterBankAccepted;
        }
        }
        
    }
    
    function exporterAccepts(address _applicant, bool success) public {
        //if(msg.sender != exporter) revert();
        
        if(loc[_applicant].status == LCStatus.ExporterBankAccepted){
            if(success){
                loc[_applicant].status = LCStatus.ExporterAccepted;
            }
        }
    }
    
    //currently not including defectCharges
    function shipment(address _applicant, string memory _document, uint _totalAmount) public {
       // if(msg.sender != exporter) revert();
        
        if(loc[_applicant].status == LCStatus.ExporterAccepted){
            loc[_applicant].document = _document;
            
            if(loc[_applicant].totalAmount == _totalAmount){
                loc[_applicant].status = LCStatus.ItemsShipped;
            }
        }
    }
    
    
    // comparing strings using
    
    // keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) 
    
    function exporterBankPaysExporter(address _applicant, address _exporterBank, address _exporter, string memory _document, uint _totalAmount) public payable {
        //if(msg.sender != exporterBank) revert();
        
        if(keccak256(abi.encodePacked(loc[_applicant].document)) == keccak256(abi.encodePacked(_document))){
            loc[_applicant].statusDoc = DocVerify.Verified;
            
            //reverify all details
           loc[_applicant].exporterBank = _exporterBank;
           loc[_applicant].exporter = _exporter;
           loc[_applicant].document = _document;
           loc[_applicant].totalAmount = _totalAmount;
           
           //send amount to exporter
           balances[loc[_applicant].exporterBank] -= totalAmount;
           balances[loc[_applicant].exporter] += totalAmount;
           
           loc[_applicant].status = LCStatus.ExporterPaid;
        } else {
            loc[_applicant].statusDoc = DocVerify.NotVerified;
            //revert();
        }
    }
    
    function applicantBankPaysExpBank(address _applicant, address _applicantBank, address _exporterBank, string memory _document, uint _totalAmount) public payable {
        //if(msg.sender != applicantBank) revert();
        
        if(keccak256(abi.encodePacked(loc[_applicant].document)) == keccak256(abi.encodePacked(_document))){
            loc[_applicant].statusDoc = DocVerify.Verified;
            
            //reverify details
            loc[_applicant].applicantBank = _applicantBank;
            loc[_applicant].exporterBank = _exporterBank;
            loc[_applicant].document = _document;
            loc[_applicant].totalAmount = _totalAmount;
            
            //pay to exporter bank
            balances[loc[_applicant].applicantBank] -= totalAmount;
            balances[loc[_applicant].exporterBank] += totalAmount;
            
            loc[_applicant].status = LCStatus.ExporterBankPaid;
            
        } else {
            loc[_applicant].statusDoc = DocVerify.NotVerified;
            //revert();
        }
    }
    
    function applicantPaysAppBank(address _applicant, address _applicantBank, string memory _document, uint _totalAmount) public payable{
        //if(msg.sender != applicant) revert();
        
        if(keccak256(abi.encodePacked(loc[_applicant].document)) == keccak256(abi.encodePacked(_document))){
            loc[_applicant].statusDoc = DocVerify.Verified;
        
            
            //pay to applicantBank
            balances[loc[_applicant].applicant] -= totalAmount;
            balances[loc[_applicant].applicantBank] += totalAmount;
            
            loc[_applicant].status = LCStatus.ApplicantBankPaid;
            
        } else {    
            loc[_applicant].statusDoc = DocVerify.NotVerified;
            //revert();
        }

    }
    
    function dealCompleted(address _applicant) public {
        if(loc[_applicant].status == LCStatus.ApplicantBankPaid){
            loc[_applicant].status = LCStatus.Accomplished;}
        // } else {
        //     revert();
        // }
    }
    
    
    
}