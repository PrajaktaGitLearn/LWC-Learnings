import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
export default class ThirtyNineCom_getObjectInfoAdapter extends LightningElement {

    defaultrecordtyprid
    apiName
    pluralName
    objectkeyprefix

    @wire(getObjectInfo,{objectApiName:ACCOUNT})
    objectInfo({data,error}){
        if(data){
            console.log(data)
            this.defaultrecordtyprid = data.defaultRecordTypeId
            this.apiName = data.apiName
            this.pluralName = data.labelPlural
            this.objectkeyprefix = data.keyPrefix

        }
        if(error){
            console.error(error)
        }
    }

    @wire(getObjectInfo,{objectApiName:ACCOUNT})
    objectinfoproperty
}