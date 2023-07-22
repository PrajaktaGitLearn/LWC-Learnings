import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT from '@salesforce/schema/Contact';
export default class FortySevenCom_createRecordAdapter extends LightningElement {

    formFields = {}
    handleChange(event){
        const {name,value} = event.target
        this.formFields[name] = value
    }

    createContactRecord(){

        const recordInput = {apiName:CONTACT.objectApiName,fields:this.formFields}
        createRecord(recordInput).then( result =>{
            this.showToastMessage("SUCCESS",`Contact Created successfully with Id ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields = {}

            }).catch(error => {
                this.showToastMessage("FAILED",'Contact Creation Failed','error')
            })
    }

    showToastMessage(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({

            title,
            message,
            variant : variant || 'success'
        }))
    }


}