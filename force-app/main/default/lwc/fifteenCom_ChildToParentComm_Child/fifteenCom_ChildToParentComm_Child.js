import { LightningElement } from 'lwc';

export default class FifteenCom_ChildToParentComm_Child extends LightningElement {

    closeModal(){
        const closeEvent = new CustomEvent('close',
        {
            bubbles:true ,
            detail:{
                msg:"Modal Closed Successfully!!",
                name :"Prajakta"
        }
        })
        this.dispatchEvent(closeEvent)
    }

    footerHandler(){
        alert('Footer called')
    }
}