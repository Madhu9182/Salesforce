import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    //public property value should come from parent component
    // @api meetingRoomInfo;//{roomName:'A-01', roomCapacity:'12'} 
    
    @api showMeetingInfo = false;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.showMeetingInfo, bubbles:true});

        this.dispatchEvent(tileClicked);
    }
}