pragma solidity ^0.4.25;

contract profile{
    struct myProfile{
         string name;
         string organizationName;
         string add;
         string gst;
         string domain;
         string city;
         string district;
         string zip;
    }
    
    mapping(string => myProfile) id;
    event idName(string);
    
    function setDetail(string _name, string _organizationName, string _add, string _gst,string _domain,
        string _city, string _district, string _zip) public {
            
            id[_gst].name = _name;
            id[_gst].organizationName = _organizationName;
            id[_gst].add = _add;
            id[_gst].gst = _gst;
            id[_gst].domain = _domain;
            id[_gst].city = _city;
            id[_gst].district = _district;
            id[_gst].zip = _zip;
            
            emit idName(id[_gst].name);
        }
}