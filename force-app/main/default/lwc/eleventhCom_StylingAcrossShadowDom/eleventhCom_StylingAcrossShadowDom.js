import { LightningElement } from 'lwc';

export default class EleventhCom_StylingAcrossShadowDom extends LightningElement {
    isloaded = false
    renderedCallback()
    {
        if(this.isloaded) return
        const style = document.createElement('style')
        style.innerText = `c-eleventh-com_-styling-across-shadow-dom .slds-button{
            background-color: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)

        this.isloaded = true
    }
    
}