import { LightningElement, track} from 'lwc';

export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoom;

    meetingRoomsInfo = [
        {roomName:'A-01', roomCapacity:'50'},
        {roomName:'A-02', roomCapacity:'4'},
        {roomName:'A-03', roomCapacity:'10'},
        {roomName:'B-01', roomCapacity:'12'},
        {roomName:'B-02', roomCapacity:'6'},
        {roomName:'B-03', roomCapacity:'15'},
        {roomName:'C-01', roomCapacity:'24'}
    ];

    onTileSelectionHandler(){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    constructor(){
        super();
        this.template.addEventListener('tileclick',this.onTileSelectionHandler.bind(this));
    }
}