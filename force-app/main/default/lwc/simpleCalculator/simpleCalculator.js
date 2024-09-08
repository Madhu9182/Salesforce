import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResult = [];
    @track showPreviousResult=false;


    firstNumber;
    secondNumber;

    numberChangerHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'and'+secondN+ 'is'+ (firstN+secondN);
        this.currentResult = `Result of ${firstN} and ${secondN} is ${firstN+secondN}`

        this.previousResult.push(this.currentResult);
    }

    subtractHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN} and ${secondN} is ${firstN-secondN}`
        this.previousResult.push(this.currentResult);
    }

    mulitplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} and ${secondN} is ${firstN*secondN}`
        this.previousResult.push(this.currentResult);
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} and ${secondN} is ${firstN/secondN}`
        this.previousResult.push(this.currentResult);
    }

    showPreviousResultToggle(event){
        this.showPreviousResult = event.target.checked;
    }
}