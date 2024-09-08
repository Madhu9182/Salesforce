import { LightningElement, track } from 'lwc';
// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import Name from '@salesforce/schema/Account.Name';
// import PHN_FIELD from '@salesforce/schema/Account.Phone';
// import Phone from '@salesforce/schema/Account.Phone';
// import Website from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {

    @track recordId;

    // fieldsArray = [Name, Phone, Website];

    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}