import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];

    options =  [
            { label: 'Red Marker', value: 'red' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Green Marker', value: 'Green' },
            { label: 'Black Marker', value: 'Black' },
        ];

        @api
        selectCheckBox(checkboxValue){
            const selectedCheckbox = this.options.find(checkbox => {
                return checkboxValue === checkbox.value;
            })

            if(selectedCheckbox){
                this.value = selectedCheckbox.value;
                return "Successfully checked";
            }
            return "No checkbox found";
        }
}