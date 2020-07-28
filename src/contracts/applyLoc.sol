pragma solidity ^0.4.25;

contract letterOfCredit {
    address applicant;
    address exporter;
    address applicantBank;
    address exporterBank;
    string document;
    string dealContract;
    
    enum LCStatus { Applied, ApplicantBankAccepted, ExporterBankAccepted, ExporterAccepted, ItemsShipped, ExporterPaid, ExporterBankPaid, ApplicantBankPaid, Accomplished }
    enum DocVerify { Verified, NotVerified}
    
    LCStatus status;
    DocVerify statusDoc;
    uint totalAmount;
    //uint defectCharges;
    
    mapping(address => uint) balances;
    
    // this function is for applying for letterOfCredit
    function applyLC(address _applicant, address _applicantBank, address _exporterBank, address _exporter, uint _totalAmount, string memory _dealContract) public {
        if(msg.sender != _applicant)  revert();
        
        // else save entries
        applicant = _applicant;
        applicantBank = _applicantBank;
        exporterBank = _exporterBank;
        exporter = _exporter;
        totalAmount = _totalAmount;
        dealContract = _dealContract;
        
        // initial status
        status = LCStatus.Applied;
        
    }
    
    function getApplicant() public view returns(address) {
        return applicant;
    }
    
    function getApplicantBank() public view returns(address) {
        return applicantBank;
    }
    
    function getExporter() public view returns(address) {
        return exporter;
    }
    
    function getExporterBank() public view returns(address) {
        return exporterBank;
    }
    
    function getStatus() public view returns(LCStatus) {
        return status;
    }
    
    //applicant bank receives the request and they can further accept or reject it
    function applicantBankAccepts(bool success) public {
        if(msg.sender != applicantBank) revert();
        
        if(success){
            status = LCStatus.ApplicantBankAccepted;
        } else {
            revert();
        }
    }
    
    
    function exporterBankAccepts(bool success) public {
        if(msg.sender != exporterBank) revert();
        
        if(status == LCStatus.ApplicantBankAccepted){
            if(success){
            status = LCStatus.ExporterBankAccepted;
        } else {
            revert();
        }
        }
        
    }
    
    function exporterAccepts(bool success) public {
        if(msg.sender != exporter) revert();
        
        if(status == LCStatus.ExporterBankAccepted){
            if(success){
                status = LCStatus.ExporterAccepted;
            } else {
                revert();
            }
        }
    }
    
    //currently not including defectCharges
    function shipment(string memory _document, uint _totalAmount) public {
        if(msg.sender != exporter) revert();
        
        if(status == LCStatus.ExporterAccepted){
            document = _document;
            
            if(totalAmount == _totalAmount){
                status = LCStatus.ItemsShipped;
            }
        }
    }
    
    
    // comparing strings using
    
    // keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) 
    
    function exporterBankPaysExporter(address _exporterBank, address _exporter, string memory _document, uint _totalAmount) public payable {
        if(msg.sender != exporterBank) revert();
        
        if(keccak256(abi.encodePacked(document)) == keccak256(abi.encodePacked(_document))){
            statusDoc = DocVerify.Verified;
            
            //reverify all details
           exporterBank = _exporterBank;
           exporter = _exporter;
           document = _document;
           totalAmount = _totalAmount;
           
           //send amount to exporter
           balances[exporterBank] -= totalAmount;
           balances[exporter] += totalAmount;
           
           status = LCStatus.ExporterPaid;
        } else {
            statusDoc = DocVerify.NotVerified;
            revert();
        }
    }
    
    function applicantBankPaysExpBank(address _applicantBank, address _exporterBank, string memory _document, uint _totalAmount) public payable {
        if(msg.sender != applicantBank) revert();
        
        if(keccak256(abi.encodePacked(document)) == keccak256(abi.encodePacked(_document))){
            statusDoc = DocVerify.Verified;
            
            //reverify details
            applicantBank = _applicantBank;
            exporterBank = _exporterBank;
            document = _document;
            totalAmount = _totalAmount;
            
            //pay to exporter bank
            balances[applicantBank] -= totalAmount;
            balances[exporterBank] += totalAmount;
            
            status = LCStatus.ExporterBankPaid;
            
        } else {
            statusDoc = DocVerify.NotVerified;
            revert();
        }
    }
    
    function applicantPaysAppBank(address _applicant, address _applicantBank, string memory _document, uint _totalAmount) public payable{
        if(msg.sender != applicant) revert();
        
        if(keccak256(abi.encodePacked(document)) == keccak256(abi.encodePacked(_document))){
            statusDoc = DocVerify.Verified;
        
            
            //pay to applicantBank
            balances[applicant] -= totalAmount;
            balances[applicantBank] += totalAmount;
            
            status = LCStatus.ApplicantBankPaid;
            
        } else {    
            statusDoc = DocVerify.NotVerified;
            revert();
        }

    }
    
    function dealCompleted(bool success) public {
        if(status == LCStatus.ApplicantBankPaid){
            status = LCStatus.Accomplished;
        } else {
            revert();
        }
    }
    
    
    
}