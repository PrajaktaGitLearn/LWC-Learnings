import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT from '@salesforce/schema/Contact';
import NAME from '@salesforce/schema/Contact.Name';
import ACCOUNTID from '@salesforce/schema/Contact.AccountId';
import EMAIL from '@salesforce/schema/Contact.Email';
import PHONE from '@salesforce/schema/Contact.Phone';
import LEADSOURCE from '@salesforce/schema/Contact.LeadSource';
import TITLE from '@salesforce/schema/Contact.Title';
export default class ThirtySixCom_Lightning_Record_Edit_Form extends LightningElement {

    objectName = CONTACT

    fields = {

        name:NAME,
        accountId : ACCOUNTID,
        email:EMAIL,
        phone:PHONE,
        leadsource : LEADSOURCE,
        title:TITLE
    }

    successHandler(event){
        console.log(event.detail.id)
        
        const toastevent = new ShowToastEvent({

            title:"Record Edit Form",
            message:"Record created successfully !! with recordId "+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastevent)


    }

    resetForm(){
        let inputfields =  this.template.querySelectorAll('lightning-input-field')
        
        if(inputfields){
            Array.from(inputfields).forEach( inpfields => {
                inpfields.reset()
            })

        }
        
    }
}
