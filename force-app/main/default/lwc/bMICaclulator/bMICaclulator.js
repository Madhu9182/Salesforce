import { LightningElement, track } from 'lwc';
import { getBMI } from 'c/bmi';

export default class BMICaclulator extends LightningElement {

    //non reactive property
    cardTitle='BMI Calculator'

    //@track bmiData ={
    // weight = 0,
    // height = 0,
    // result = 0
    //}

    weight;
    height;

    bmi;
    onWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBMI(event){
        this.bmi = getBMI(this.weight, this.height);
    }

    //using getter properties
    get bmiValue(){
        if(this.bmi === undefined){
            return "";
        }
        return `Value of BMI is: ${this.bmi}`
    }
    
}