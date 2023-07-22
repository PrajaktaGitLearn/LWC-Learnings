import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT from '@salesforce/schema/Account';
export default class ThirtySevenCom_Custom_Validation_In_Record_Edit_Form extends LightningElement {

    objectName = ACCOUNT
    inputValue

    handleInput(event){

        this.inputValue = event.target.value
    }

    handleSubmit(event){

        event.preventDefault() // no need to refresh the page therefore we use preventDefault
        const inputComp = this.template.querySelector('lightning-input')
        const value = inputComp.value
        if(!value.includes('India')){
            inputComp.setCustomValidity("The Account name must contains India") // setting the validation / error message
        }
        else{
            inputComp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputComp.reportValidity() // throwing the validation / error message

    }

    successHandler(event){
        console.log(event.detail.id)
        
        const toastevent = new ShowToastEvent({

            title:"Account Record created",
            message:"Account Record created successfully !! with recordId "+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastevent)


    }
    errorHandler(event){

        const toastevent = new ShowToastEvent({

            title:"Error Occurred during Account Creation",
            message:event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastevent)

    }


}