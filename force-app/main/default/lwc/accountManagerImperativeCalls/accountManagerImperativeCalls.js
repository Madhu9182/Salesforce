import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerImperativeCalls extends LightningElement {

    @track numberOfRecords;
    @track accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response => {
            //Here I want to get all those accounts on server and assign it to my track property called "accounts"
            this.accounts = response;

            const toastEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                Message : this.numberOfRecords + 'Accounts Fetched From Server',
                variant : 'success',
            });
            // once you set the properties of a toast event you just need to fire it using this.dispatchEvent method
            this.dispatchEvent(toastEvent);

        }).catch(error => {
            console.error('Error in getting the accounts', error.body.message);

            const toastEvent = new ShowToastEvent({
                title : 'Error',
                message : error.body.message,
                variant : 'error',
            });
            this.dispatchEvent(toastEvent);
        })
    }
}