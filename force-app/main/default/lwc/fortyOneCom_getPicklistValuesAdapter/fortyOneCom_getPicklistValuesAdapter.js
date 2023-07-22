import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import TYPE from '@salesforce/schema/Account.Type';
export default class FortyOneCom_getPicklistValuesAdapter extends LightningElement {

    selectedIndustry = '';
    selectedType = ''
    industryOptions = []
    typeOptions = []

    @wire(getObjectInfo,{objectApiName:ACCOUNT})
    objectInfo


    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY})
    picklistvalues({data,error}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:TYPE})
    typepicklistvalues({data,error}){
        if(data){
            console.log(data)
            this.typeOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }

    
    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    generatePicklist(data){
        return data.values.map(item => ({ label: item.label, value: item.value }))


    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }

}