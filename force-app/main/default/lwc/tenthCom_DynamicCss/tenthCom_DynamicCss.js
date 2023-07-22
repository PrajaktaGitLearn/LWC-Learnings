import { LightningElement } from 'lwc';

export default class TenthCom_DynamicCss extends LightningElement {

    percent = 10
    checkPercent(event){
        this.percent = event.target.value
    }

    get percentage(){
        return `width:${this.percent}%`
    }
}