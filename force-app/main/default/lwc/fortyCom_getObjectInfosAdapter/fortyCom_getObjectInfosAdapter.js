import { LightningElement,wire } from 'lwc';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import OPPORTUNITY from '@salesforce/schema/Opportunity';
import CONTACT from '@salesforce/schema/Contact';
import CASE from '@salesforce/schema/Case';
import LEAD from '@salesforce/schema/Lead'
export default class FortyCom_getObjectInfosAdapter extends LightningElement {
    objectsInformation

    objectApiNames = [ACCOUNT,OPPORTUNITY,CONTACT,CASE,LEAD]
    @wire(getObjectInfos,{objectApiNames:'$objectApiNames'})
    getObjectsInfo({data,error}){
        if(data){
            console.log(data)
            this.objectsInformation = data
        }

        if(error){
            console.error(error)
        }
    }
}