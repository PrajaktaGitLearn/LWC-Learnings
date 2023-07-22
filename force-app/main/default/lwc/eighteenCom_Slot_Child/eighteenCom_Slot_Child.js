import { LightningElement } from 'lwc';

export default class EighteenCom_Slot_Child extends LightningElement {

    changeSlotHandler(){
        const footer = this.template.querySelector('.slds-card__footer')
        if(footer){
            footer.classList.remove('slds-hide')
        }
        
    }
}