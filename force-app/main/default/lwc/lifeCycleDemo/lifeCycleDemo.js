import { LightningElement } from 'lwc';

export default class LifeCycleDemo extends LightningElement {

    constructor(){
        super();
        console.log('Constructor called');
    }

    connectedCallback(){
        console.log('Component Connected Callback is called');
    }

    renderedCallback(){
        console.log('Component Rendered Callback is called');
    }

    disconnectedCallback(){
        console.log('Component Disconnected Callback is called');
    }
}