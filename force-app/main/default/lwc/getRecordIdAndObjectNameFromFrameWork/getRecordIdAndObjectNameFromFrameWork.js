import { LightningElement, api, track } from 'lwc';

export default class GetRecordIdAndObjectNameFromFrameWork extends LightningElement {

    @api recordId;
    @api objectAPIName;

    onSuccessHandler(event){
        this.recordId = event.detail.id;
    }
}