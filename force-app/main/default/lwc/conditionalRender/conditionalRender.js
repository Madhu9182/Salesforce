import { LightningElement, track } from 'lwc';

export default class ConditionalRender extends LightningElement {
    
    @track displayDiv = false;

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}