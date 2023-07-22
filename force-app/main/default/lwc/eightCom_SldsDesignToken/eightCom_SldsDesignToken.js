import { LightningElement } from 'lwc';

export default class EightCom_SldsDesignToken extends LightningElement {

    changcolor(){
        const elem = this.template.querySelector('.btn')
        elem.style.border = "4px solid red"
        

        const elem1 = this.template.querySelector('i')
        elem1.style.border = "4px solid red"

    }
}