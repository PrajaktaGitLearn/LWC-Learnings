import { LightningElement } from 'lwc';

export default class TwentyOneCom_ReusableComp_Card extends LightningElement {

    checkSlotChange(){
        const footer = this.template.querySelector('.slds-card__footer')
        if(footer){
            footer.classList.remove('slds-hide')
        }
    }
}