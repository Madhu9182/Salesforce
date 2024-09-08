import { LightningElement, track} from 'lwc';

export default class ConditionalRenderingEx extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Hyderabad','bangalore','chennai','Mumbai'];

    showDivHandler(event){
        this.displayDiv = event.target.value;
    }
}