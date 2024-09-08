import { LightningElement, track, wire } from 'lwc';
//Now we need to import LDS from our UI record API module so that we can create this record
import { createRecord, getRecord } from 'lightning/uiRecordApi';

//create field array that we want to retreive
const fieldArray = ['Account.Name', 'Account.Phone','Account.Website'];

export default class AccountManagerLDS extends LightningElement {
    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    //declare a property that holds the recordId
    @track recordId;

    //the getRecord accepts 2 parameters, first one the record Id that we want to fetch from the salesforce backend and the second is the field that we want to retreive form that recordId
    //this recordId is being used inside the wire service to retreive the data from the server along with fields
    @wire(getRecord, {recordId : '$recordId', fields : fieldArray}) 
    accountRecord;  
    //As soon as we are getting the data from server we are going to assign it to wire property called accountRecord and we are using this wire property to fetch our account name, phone, website in the below

    // we captured the values 
    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        //create a javascript object to map our field values with the actual API name 
        //field API name as the key and their value as value
        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website' : this.accountWebsite};
        //create one more Java script object to map these fields with their object name
        //In this object we need to supply the object name for which we are going to create a record
        const recordInput = {apiName : 'Account', fields};

        // The successful respone can be handled by "then" key word and error response can be handled by "catch" keyword
        createRecord(recordInput).then(response => {
            console.log('Account is created : ', response.id);
            //We are assigning newly created account Id to out recordId Property this recordId is being used inside the wire service 
            this.recordId = response.id;
        }).catch(error => {
            console.error('Error in creating account : ', error.body.message);
        });
    }

    // get retAccountName(){
    //     //checking if my account record really holding my value or not 
    //     if(this.accountRecord.data){
    //         return this.accountRecord.data.fields.Name.vaue;
    //     }
    //         return undefined;
    // }

    // get retAccountPhone(){
    //     if(this.accountRecord.data){
    //         return this.accountRecord.data.fields.Phone.value;
    //     }
    //         return undefined;
    // }

    // get retAccountWebsite(){
    //     if(this.accountRecord.data){
    //         return this.accountRecord.data.fields.Website.value;
    //     }
    //         return undefined;
    // }
}