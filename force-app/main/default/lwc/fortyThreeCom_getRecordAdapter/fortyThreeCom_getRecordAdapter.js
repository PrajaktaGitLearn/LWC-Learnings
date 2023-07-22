import { LightningElement,wire,api } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Contact.Name';
import EMAIL from '@salesforce/schema/Contact.Email';
import OWNER from '@salesforce/schema/Contact.OwnerId';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
export default class FortyThreeCom_getRecordAdapter extends LightningElement {
 
    name
    email
    ownerId

    accname 
    annualrevenue

    
    annualrevenueformatted

    @api recordId

    
     @wire(getRecord,{recordId:'$recordId',fields:[NAME,EMAIL,OWNER]})
    // @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
    recieveRecord({data,error}){

        if(data){
            console.log(data)
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.email = data.fields.Email.displayValue ? data.fields.Email.displayValue : data.fields.Email.value
            this.ownerId = data.fields.OwnerId.displayValue ? data.fields.OwnerId.displayValue : data.fields.OwnerId.value
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord,{recordId:'$recordId',fields:[ACCOUNT_NAME,ANNUAL_REVENUE]})
    // @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
    recieveRecordFieldValue({data,error}){

        if(data){
            console.log(data)
            this.accname = getFieldValue(data,ACCOUNT_NAME)
            this.annualrevenue = getFieldValue(data,ANNUAL_REVENUE)

            this.annualrevenueformatted = getFieldDisplayValue(data,ANNUAL_REVENUE)
        }
        if(error){
            console.error(error)
        }
    }


}