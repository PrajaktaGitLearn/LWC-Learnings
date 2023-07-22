import { LightningElement } from 'lwc';

export default class FifteenCom_ChildToParentComm_Parent extends LightningElement {
    msg
    name
    showModal = false

    handleModal(){
        this.showModal = true
    }

    closeThisModal(event){
        this.showModal = false
        this.msg = event.detail.msg
        this.name = event.detail.name
         
    }
    finalEvent(){
        alert('Parent Div at top called')
    }
}