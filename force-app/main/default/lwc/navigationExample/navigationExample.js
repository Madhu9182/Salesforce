import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts(){
        //within this method we are going to use our navigate method from this navigation service to navigate to a web page 
        //for that we also going to pass a page reference to our navigate method
        this[NavigationMixin.Navigate]({
            //we need to pass the page reference
            type : 'standard__WebPage',
            attributes : {
                url : 'https://hianime.to/watch/black-clover-2404?ep=51121'
            }
        });
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                action: 'new'
            }
        });
    }
}