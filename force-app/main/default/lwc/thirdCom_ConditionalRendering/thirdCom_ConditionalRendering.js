import { LightningElement } from 'lwc';

export default class ThirdCom_ConditionalRendering extends LightningElement {
    // Conditional Rendering - if:true and if:false

    expression = false
    showData(){
        this.expression = true
    }

    // conditional Rendering example 2
    captchaval = 'JFk88p1'
    
    inputvalue
    checkInput(event){

        this.inputvalue = event.target.value
    }

    get returnInputValue(){
        return this.inputvalue === this.captchaval
    }
}