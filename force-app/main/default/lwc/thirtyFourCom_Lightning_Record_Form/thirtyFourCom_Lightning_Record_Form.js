import { LightningElement , api} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import RATING from '@salesforce/schema/Account.Rating';
import TYPE from '@salesforce/schema/Account.Type';
import INDUSTRY from '@salesforce/schema/Account.Industry';
export default class ThirtyFourCom_Lightning_Record_Form extends LightningElement {

    accObject = ACCOUNT_OBJECT
    accfields = [NAME,ANNUAL_REVENUE,RATING,TYPE,INDUSTRY]
    @api recordId
    @api objectApiName
    

    successHandler(event){
        console.log(event.detail.id)
        
        const toastevent = new ShowToastEvent({

            title:"Record Form",
            message:"Record created successfully !! with recordId "+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastevent)


    }
}